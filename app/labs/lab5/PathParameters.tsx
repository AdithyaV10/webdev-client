"use client";
import { useState } from "react";
export default function PathParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34"), [b, setB] = useState("23");
  return <section><h3>Path Parameters</h3>
    <label>A: <input aria-label="Path A" value={a} onChange={e => setA(e.target.value)} /></label>
    <label>B: <input aria-label="Path B" value={b} onChange={e => setB(e.target.value)} /></label>
    <ul>{["add", "subtract", "multiply", "divide"].map((operation, index) => <li key={operation}>
      <a id={`wd-path-parameter-${operation}`} href={`${HTTP_SERVER}/lab5/${operation}/${encodeURIComponent(a)}/${encodeURIComponent(b)}`}>{operation.charAt(0).toUpperCase() + operation.slice(1)} {a} {["+", "-", "×", "÷"][index]} {b}</a>
    </li>)}</ul>
  </section>;
}
