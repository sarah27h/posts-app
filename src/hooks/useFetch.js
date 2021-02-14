import { useEffect, useState } from 'react';

export default function useFetch(url) {
  // please note that data variable used in useState is differ from data return in fetch
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //   used to run our JSON fake server
  //npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    // 2
    // create an instance
    const abortcont = new AbortController();
    setTimeout(() => {
      // 3
      // associate instance with fetch
      fetch(url, { signal: abortcont.signal })
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
        // 5
        // abort fetch will cause error and it get catched
        //
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            // auto catches network / connection error
            setPending(false);
            setErrorMessage(err.message);
          }
        });
    }, 1000);

    // 1
    // clean up function to abort fetch
    // 4
    // abort any fetch associate with abortCont
    return () => abortcont.abort();
  }, [url]);

  return { data, pending, errorMessage };
}
