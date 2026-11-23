"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("Loading...");
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    client.fetchWelcomeMessage().then(message => { if (active) setWelcomeOnLoad(message); })
      .catch(error => { if (active) { setWelcomeOnLoad(""); setError(client.errorMessage(error)); } });
    return () => { active = false; };
  }, []);
  return <section><h3>HTTP Client</h3>
    {error && <p role="alert" className="text-red-800">{error}</p>}
    <h4>Requesting on Click</h4><button id="wd-fetch-welcome" type="button" onClick={async () => {
      setError("");
      try { setWelcomeOnClick(await client.fetchWelcomeMessage()); } catch (error) { setError(client.errorMessage(error)); }
    }}>Fetch Welcome</button><p>Response from server: <b>{welcomeOnClick}</b></p>
    <h4>Requesting on Load</h4><p>Response from server: <b>{welcomeOnLoad}</b></p>
  </section>;
}
