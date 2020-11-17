import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

function App() {
  const [token, setToken] = useState(null);

  // Run Code Based on A condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log(_token);
  }, []);
  return <div className="App">{token ? <h1>Loggged In</h1> : <Login />}</div>;
}

export default App;
