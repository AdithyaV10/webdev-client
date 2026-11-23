"use client";
import { useState } from "react";
import * as client from "./client";
const symbols: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("10"), [b, setB] = useState("5"), [operation, setOperation] = useState("add");
  const [result, setResult] = useState(""), [error, setError] = useState(""), [pending, setPending] = useState(false);
  const calculate = async (operation: string) => {
    setError(""); setPending(true);
    try { const value = await client.calculate(a, b, operation); setResult(`${value.a} ${symbols[operation]} ${value.b} = ${value.result}`); }
    catch (error) { setResult(""); setError(client.errorMessage(error)); }
    finally { setPending(false); }
  };
  return <section id="wd-next-calculator"><h3>Calculator (Next.js Web API)</h3>
    <label>A: <input aria-label="Calculator A" type="number" value={a} onChange={e => setA(e.target.value)} /></label>
    <label>B: <input aria-label="Calculator B" type="number" value={b} onChange={e => setB(e.target.value)} /></label>
    <label>Operation: <select aria-label="Calculator operation" value={operation} disabled={pending} onChange={e => { setOperation(e.target.value); void calculate(e.target.value); }}>
      {Object.entries(symbols).map(([key, symbol]) => <option value={key} key={key}>{symbol}</option>)}
    </select></label>
    <button type="button" disabled={pending} onClick={() => calculate(operation)}>Calculate</button>
    <p><input aria-label="Calculator result" readOnly value={result} /></p>
    {error && <p role="alert" className="text-red-800">{error}</p>}
  </section>;
}
