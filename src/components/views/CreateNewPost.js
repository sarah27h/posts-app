import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import { useStyles } from './CreateNewPostStyle';
import { useHistory } from 'react-router-dom';

export default function CreateNewPost() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Joel Olawanle');
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title, body, author };
    setIsPending(true);
    console.log(post);
    // POST new post to our api
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      console.log('new post added');
      setIsPending(false);

      // programatically direct user to home page
      history.push('/');
    });
  };

  return (
    <form>
      <FormControl className={classes.formControl} margin="normal">
        <Typography variant="h5">Add New Post</Typography>

        <TextField
          margin="normal"
          id=""
          variant="outlined"
          value={title}
          label="Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          margin="normal"
          id=""
          label="Post Body"
          variant="outlined"
          value={body}
          placeholder="Post Body"
          multiline
          rows={4}
          onChange={(e) => setBody(e.target.value)}
        />

        {/* use select native to solve findDOMNode error */}
        <Select
          className={classes.formFieldsMargin}
          native
          value={author}
          label="Post Author"
          variant="outlined"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option aria-label="None" value="" />
          <option value="Joel Olawanle">Joel Olawanle</option>
          <option value="Sarah Hassan">Sarah Hassan</option>
          <option value="Richard Nikolas">Richard Nikolas</option>
        </Select>

        {/* isPending true Adding post... */}
        {/* isPending false add post */}
        {isPending ? (
          <Button
            className={classes.formFieldsMargin}
            variant="contained"
            color="primary"
            disabled={true}
          >
            adding post...
          </Button>
        ) : (
          <Button
            className={classes.formFieldsMargin}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            add post
          </Button>
        )}
      </FormControl>
    </form>
  );
}
