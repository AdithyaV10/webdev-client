export default function Add({ a, b, id = "wd-add" }: { a: number; b: number; id?: string }) {
  return (
    <div id={id}>
      <h4>Add</h4>
      a = {a}
      b = {b} <br />
      a + b = {a + b}
      <hr />
    </div>
  );
}
