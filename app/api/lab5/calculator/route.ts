import type { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const aValue = searchParams.get("a"), bValue = searchParams.get("b");
  const a = Number(aValue), b = Number(bValue), operation = searchParams.get("operation");
  if (!aValue?.trim() || !bValue?.trim() || !Number.isFinite(a) || !Number.isFinite(b)) return Response.json({ error: "Invalid numbers" }, { status: 400 });
  let result: number;
  switch (operation) {
    case "add": result = a + b; break;
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide":
      if (b === 0) return Response.json({ error: "Cannot divide by zero" }, { status: 400 });
      result = a / b; break;
    default: return Response.json({ error: "Invalid operation" }, { status: 400 });
  }
  if (!Number.isFinite(result)) return Response.json({ error: "Invalid result" }, { status: 400 });
  return Response.json({ a, b, operation, result });
}
