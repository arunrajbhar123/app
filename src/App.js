import logo from "./logo.svg";
import "./App.css";
import useFatch from "./components/useFatch.jsx";
import { useState } from "react";
// https://api.github.com/search/users?q=masai
function App() {
  const { isError, isLoading, data, setUrl } = useFatch("");
  const [first, setfirst] = useState('');
  const handlePost = (first) => {
    setUrl(first)
  };
  return (
    <div className="App">
      <h1> Custom Hooks - USEFETCH()</h1>
      <input type="text" onChange={(e) => setfirst(e.target.value)} />
      <button onClick={()=>handlePost(first)}>Fetch</button>
      <br />

      {data &&
        data.map((el) => (
          <div
            key={el.id}
            style={{ display: "flex", gap: "25px", justifyContent: "center" }}
          >
            <p> Name:</p> <p>{el.login}</p>
            {/* <img src={el.avatar_url} alt="" /> */}
          </div>
        ))}
    </div>
  );
}

export default App;
