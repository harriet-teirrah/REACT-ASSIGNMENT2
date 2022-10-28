
import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const handleError=useErrorHandler()
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
        
      })
      .catch((error) => {
        handleError(error)
        // setError(error.message)
        setLoading(false)
      });
  }, [url]);

  return { data, error, loading };
}
