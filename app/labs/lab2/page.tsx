import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <section id="wd-css-style-attribute">
        <h3>Styling with the STYLE attribute</h3>
        <p style={{ backgroundColor: "blue", color: "white" }}>
          The style attribute configures this element directly. It is convenient
          for experiments, but a separate stylesheet makes shared styles easier
          to maintain.
        </p>
        <p
          id="wd-your-style-attr"
          style={{ backgroundColor: "green", color: "yellow" }}
        >
          My additional inline example uses a green background and yellow text.
        </p>
        <p
          id="wd-ai-style-attr"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          This additional sample uses a purple background and white text.
        </p>
      </section>

      <section id="wd-css-import">
        <h3>Importing CSS documents</h3>
        <p id="wd-css-import-example">
          This paragraph has no style attribute. Its green background and white
          text come from the imported index.css stylesheet.
        </p>
        <p>
          The section headings also use imported tag rules. Those rules are
          scoped to #wd-lab2 so headings on other screens keep their own styles.
        </p>
      </section>

      <section id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing every paragraph, an ID selector targets one
          specific element. This paragraph has a red background and white text.
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel: a yellow background and black text.
        </p>
        <p id="wd-id-selector-3">
          My third ID example has a dark green background and white text.
        </p>
        <p id="wd-ai-id-selector">
          This additional ID sample has an orange background and black text.
        </p>
      </section>

      <section id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          A class can give several elements the same appearance.
        </p>
        <h4 className="wd-class-selector">
          This heading shares the paragraph&apos;s yellow background and blue text.
        </h4>
        <p className="wd-your-class">
          My shared class uses a dark blue background and white text.
        </p>
        <h4 className="wd-your-class">My heading uses that same class.</h4>
        <p className="wd-ai-class-selector">
          This additional shared class uses a lavender background and black text.
        </p>
        <h4 className="wd-ai-class-selector">
          This sample heading shares the lavender class.
        </h4>
      </section>

      <section id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            <p className="wd-selector-3">
              This red paragraph matches .wd-selector-1 .wd-selector-3, even
              though its ancestor is more than one level away.
              <br />
              <span className="wd-selector-4">
                This direct child matches .wd-selector-2 &gt; .wd-selector-3 &gt;
                .wd-selector-4 and has a yellow background with blue text.
              </span>
              <br />
              <span>
                <span className="wd-selector-4" id="wd-child-selector-control">
                  This deeper span has the same class, but does not match that
                  direct-child rule. It inherits the paragraph&apos;s white text.
                </span>
              </span>
              <br />
              <span className="wd-your-selector-5">
                My additional direct child has a light green background and
                black text.
              </span>
              <br />
              <span>
                <span className="wd-ai-selector-5">
                  This additional descendant has a navy background and white
                  text, even when nested another level down.
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="wd-css-cascade">
        <h3>Specificity, source order, and inheritance</h3>
        <p id="wd-your-cascade" className="wd-your-cascade">
          My specificity experiment matches tag, class, and ID rules. The ID
          wins, giving this paragraph a navy background.
          <span id="wd-inherited-color"> This span inherits its white text.</span>
        </p>
        <p id="wd-source-order" className="wd-source-order">
          Two rules target this same class with equal specificity. The later
          rule wins, so the background is light green instead of light blue.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Additional specificity sample: the tag rule says green, the class rule
          says yellow, and the ID rule says red. The ID rule wins.
        </p>
      </section>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
    </div>
  );
}
