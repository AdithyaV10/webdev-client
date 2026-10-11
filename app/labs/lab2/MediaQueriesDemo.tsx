import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div id="wd-css-media-queries" className="wd-media-queries-demo">
      <h2>Media Query Demo</h2>
      <p>Resize the viewport. The last matching range controls the color and the bold, underlined checklist item, including shared boundaries.</p>
      <ul>
        <li className="wd-mq-rule-default">Default: white text on green, when no range overrides it.</li>
        <li className="wd-mq-rule-750">750px to below 1000px: black text on yellow.</li>
        <li className="wd-mq-rule-1000">1000px to below 1250px: white text on blue.</li>
        <li className="wd-mq-rule-1250">1250px to below 1500px: white text on red.</li>
        <li className="wd-mq-rule-your">On your own: 1500px and above, black text on orange.</li>
        <li className="wd-mq-rule-ai">With AI: 749px and below, white text on purple.</li>
      </ul>
    </div>
  );
}
