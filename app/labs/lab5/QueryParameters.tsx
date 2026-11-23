"use client";
import { useState } from "react";
export default function QueryParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34"), [b, setB] = useState("23");
  return <section><h3>Query Parameters</h3>
    <label>A: <input aria-label="Query A" value={a} onChange={e => setA(e.target.value)} /></label>
    <label>B: <input aria-label="Query B" value={b} onChange={e => setB(e.target.value)} /></label>
    <ul>{["add", "subtract", "multiply", "divide"].map((operation, index) => <li key={operation}>
      <a id={`wd-query-parameter-${operation}`} href={`${HTTP_SERVER}/lab5/calculator?${new URLSearchParams({ operation, a, b })}`}>{operation.charAt(0).toUpperCase() + operation.slice(1)} {a} {["+", "-", "×", "÷"][index]} {b}</a>
    </li>)}</ul>
  </section>;
}
