import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ Children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const result = await response.json();
        setData(result.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {Children}
    </DataContext.Provider>
  );
}
