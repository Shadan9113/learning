import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("networking is not working");
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

  if (loading) return <p>loading....</p>;
  if (error) return <p>error:{error}</p>;
  return (
    <div>
      <h1>fetching data</h1>
      <ul>
        {data.map((post, index)=>(
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
