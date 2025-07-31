import "../assets/AboutScene.css";

export default function AboutScene() {
  return (
    <section className="aboutSection">
      <header className="header">
        <span className="aboutLabel">(About)</span>
      </header>
      <div className="content">
        <p>
          We craft innovative digital experiences, brand identities, and art direction that drive results, spark connections, and inspire loyalty through creative vision and strategic insight.
        </p>
        <div className="bottom-text">
          <p>
            <strong>Naoto Studio</strong> crafts compelling brand identities that resonate. We use distinctive logos, typography, and visual narratives to capture essence and fuel connection.
          </p>
          <p>
            These foundations support cutting-edge digital experiences that are intuitive, seamless, and engaging—elevating brands and driving meaningful connections and measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}