"use client";
import { useParams } from "next/navigation";
export default function ThreeNumberPathCalculator() {
  const { a, b, c } = useParams<{ a: string; b: string; c: string }>();
  return <div id="wd-path-calculator-three"><h1>Calculator - Path Parameters</h1><p>a = {a}</p><p>b = {b}</p><p>c = {c}</p><h2>Sum = {Number(a) + Number(b) + Number(c)}</h2></div>;
}
