export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const personalCourse = { course: "CS5610", credits: 4, student: { name: "Adithya Varadarajan" }, topics: ["JavaScript", "React"] };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <pre>{JSON.stringify(personalCourse, null, 2)}</pre>
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
