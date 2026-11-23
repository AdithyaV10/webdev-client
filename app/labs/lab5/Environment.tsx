export default function Environment() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return <section id="wd-lab5-environment">
    <h3>Environment</h3>
    <p><code>NEXT_PUBLIC_HTTP_SERVER</code> = <code>{HTTP_SERVER || "Not configured"}</code></p>
    <a id="wd-welcome-link" href={`${HTTP_SERVER}/lab5/welcome`}>Welcome</a>
  </section>;
}
