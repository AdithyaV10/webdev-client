export default function PassingFunctions({
  message,
  theFunction,
  personalFunction,
  theOtherFunction,
}: {
  message: string;
  personalFunction: () => void;
  theOtherFunction: () => void;
  theFunction: (message: string) => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button type="button" id="wd-pass-functions-personal" onClick={personalFunction}>My name</button>
      <button type="button" id="wd-pass-functions-other-click" onClick={theOtherFunction}>Other function</button>
      <hr />
    </div>
  );
}
