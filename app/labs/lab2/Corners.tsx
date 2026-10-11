export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Rounded corners</h2>
      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners on the top
      </p>
      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners at the bottom
      </p>
      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners all around
      </p>
      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different rounded corners
      </p>
      <p id="wd-your-corners" className="wd-rounded-corners-top wd-rounded-corners-bottom wd-border-thin wd-border-red wd-border-solid wd-padding-fat">
        Personal example: combine top and bottom classes for four 40px corners.
      </p>
      <p id="wd-ai-corners" className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        AI sample: only the left corners have a 40px radius.
      </p>
    </div>
  );
}
