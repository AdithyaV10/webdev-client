export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        The background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          this text has a green background and white foreground
        </span>.
      </p>
      <p id="wd-your-bg" className="wd-bg-color-green wd-fg-color-white">
        Personal example: white text keeps my green block readable.
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        AI sample: black text contrasts with this yellow background.
      </p>
    </div>
  );
}
