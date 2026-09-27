export default function TextFields() {
  return (
    <>
      <h5>Text Fields</h5>

      <label htmlFor="wd-text-fields-username">Username:</label>
      <input
        id="wd-text-fields-username"
        placeholder="jdoe"
      />
      <br />

      <label htmlFor="wd-text-fields-password">Password:</label>
      <input
        id="wd-text-fields-password"
        type="password"
        defaultValue="123@#$asd"
      />
      <br />

      <label htmlFor="wd-text-fields-first-name">First name:</label>
      <input
        id="wd-text-fields-first-name"
        type="text"
        title="John"
      />
      <br />

      <label htmlFor="wd-text-fields-last-name">Last name:</label>
      <input
        id="wd-text-fields-last-name"
        type="text"
        placeholder="Doe"
        defaultValue="Wonderland"
        title="The last name"
      />
    </>
  );
}