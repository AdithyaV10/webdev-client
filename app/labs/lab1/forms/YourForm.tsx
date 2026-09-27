"use client";

export default function YourForm() {
  return (
    <>
      <h4>Student Profile</h4>

      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Personal Information</h5>

        <label htmlFor="wd-your-first-name">First name:</label>
        <input
          id="wd-your-first-name"
          type="text"
          defaultValue="Adithya"
        />
        <br />

        <label htmlFor="wd-your-last-name">Last name:</label>
        <input
          id="wd-your-last-name"
          type="text"
          defaultValue="Varadarajan"
        />
        <br />

        <label htmlFor="wd-your-password">Password:</label>
        <input
          id="wd-your-password"
          type="password"
          defaultValue="webdev123"
        />
        <br />

        <h5>About Me</h5>

        <label htmlFor="wd-your-bio">
          Why I am taking this course:
        </label>
        <br />

        <textarea
          id="wd-your-bio"
          cols={40}
          rows={5}
          defaultValue="I am taking this course to improve my full-stack web development skills and become more confident building complete modern web applications."
        />

        <h5>Class Standing</h5>

        <input
          id="wd-your-standing-freshman"
          type="radio"
          name="your-standing"
        />
        <label htmlFor="wd-your-standing-freshman">Freshman</label>
        <br />

        <input
          id="wd-your-standing-sophomore"
          type="radio"
          name="your-standing"
        />
        <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
        <br />

        <input
          id="wd-your-standing-junior"
          type="radio"
          name="your-standing"
        />
        <label htmlFor="wd-your-standing-junior">Junior</label>
        <br />

        <input
          id="wd-your-standing-senior"
          type="radio"
          name="your-standing"
        />
        <label htmlFor="wd-your-standing-senior">Senior</label>
        <br />

        <input
          id="wd-your-standing-graduate"
          type="radio"
          name="your-standing"
          defaultChecked
        />
        <label htmlFor="wd-your-standing-graduate">Graduate</label>

        <h5>Enrollment Status</h5>

        <input
          id="wd-your-full-time"
          type="radio"
          name="your-enrollment"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />

        <input
          id="wd-your-part-time"
          type="radio"
          name="your-enrollment"
        />
        <label htmlFor="wd-your-part-time">Part-time</label>

        <h5>Interests</h5>

        <input
          id="wd-your-interest-fullstack"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-fullstack">
          Full-stack development
        </label>
        <br />

        <input
          id="wd-your-interest-ai"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-ai">
          AI engineering
        </label>
        <br />

        <input
          id="wd-your-interest-backend"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-backend">
          Backend development
        </label>
        <br />

        <input
          id="wd-your-interest-cloud"
          type="checkbox"
        />
        <label htmlFor="wd-your-interest-cloud">
          Cloud computing
        </label>

        <h5>Major</h5>

        <label htmlFor="wd-your-major">Major:</label>
        <br />

        <select
          id="wd-your-major"
          defaultValue="CS"
        >
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
          <option value="CY">Cybersecurity</option>
        </select>

        <h5>Topics I Want to Learn More About</h5>

        <label htmlFor="wd-your-topics">
          Select one or more topics:
        </label>
        <br />

        <select
          id="wd-your-topics"
          multiple
          defaultValue={["REACT", "NEXTJS"]}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="REACT">React</option>
          <option value="NEXTJS">Next.js</option>
          <option value="BACKEND">Backend Development</option>
        </select>

        <h5>Additional Information</h5>

        <label htmlFor="wd-your-email">School email:</label>
        <input
          id="wd-your-email"
          type="email"
          placeholder="varadarajan.ad@northeastern.edu"
        />
        <br />

        <label htmlFor="wd-your-graduation">
          Expected graduation year:
        </label>
        <input
          id="wd-your-graduation"
          type="number"
          min={2025}
          max={2035}
          defaultValue={2027}
        />
        <br />

        <label htmlFor="wd-your-start-date">
          Program start date:
        </label>
        <input
          id="wd-your-start-date"
          type="date"
          defaultValue="2025-09-01"
        />
        <br />

        <label htmlFor="wd-your-excitement">
          Excitement for this course (0-10):
        </label>
        <input
          id="wd-your-excitement"
          type="range"
          min={0}
          max={10}
          defaultValue={9}
        />

        <br />
        <br />

        <button
          id="wd-your-save"
          type="submit"
        >
          Save
        </button>

        <button
          id="wd-your-cancel"
          type="button"
        >
          Cancel
        </button>
      </form>
    </>
  );
}