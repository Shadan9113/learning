import { useContext } from "react"
import { DataContext } from "./DataContext"


function App() {
  const {data, loading, error} = useContext(DataContext)

  if(loading) return <p>loading....</p>
  if(error) return <p>error:{error.message}</p>
  return (
    <div>
        <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
