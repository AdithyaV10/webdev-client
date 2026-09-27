export default function AnchorTag() {
  return (
    <div id="wd-anchor-tags">
      <h4>Anchor tag</h4>

      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text.
      <br />

      <a
        href="https://github.com/AdithyaV10/webdev-client"
        id="wd-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Repository
      </a>

      <h5>My links</h5>

      <a
        href="https://www.premierleague.com/"
        id="wd-your-link"
      >
        Premier League
      </a>
      <br />

      <a
        href="https://github.com/AdithyaV10"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub
      </a>

      <h5>HTML documentation</h5>

      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
    </div>
  );
}