"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    client.fetchHello().then(value => { if (active) setHello(value); })
      .catch(error => { if (active) setError(client.errorMessage(error)); });
    return () => { active = false; };
  }, []);
  return <section><h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
    <a href="/api/lab5/hello">Hello API</a>
    {error && <p role="alert">{error}</p>}<pre>{JSON.stringify(hello, null, 2)}</pre>
  </section>;
}
