import { useEffect, useState } from 'react';

export default function useFetch(url) {
  // please note that data variable used in useState is differ from data return in fetch
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //   used to run our JSON fake server
  //npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch resource data');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setErrorMessage(null);
        })
        .catch((err) => {
          setPending(false);
          setErrorMessage(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, pending, errorMessage };
}
