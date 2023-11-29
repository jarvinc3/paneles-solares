import "../css/nav.css";

export default function Nav() {
  return (
    <nav>
      <section className="section-up">
        <ul className="section-links">
          <li>Servicio al cliente</li>
          <li>Localizador de tiendas</li>
          <li>Boletin</li>
        </ul>
        <section className="list">
          <img src="/list.svg" alt="" />
        </section>
        <section className="section-logo">
          <img src="/logo.png" alt="" />
        </section>
        <section className="section-icons">
          <div className="heart-container">
            <img src="/heart.png" alt="" />
            <p> Favoritos</p>
          </div>
          <div className="icons">
            <img src="/search.svg" alt="" />
            <input className="search" type="text" placeholder="Search products" />
            <div className="line"></div>
          </div>
        </section>
      </section>
      <section className="section-down">
        <ul className="great-list">
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
          <li>productos</li>
        </ul>
        <p>
          Recursividad
        </p>
      </section>
    </nav>
  );
}
