import "../css/main.css"
import Cards from "./Cards";
import Nav from "./Nav";
import Novedades from "./Novedades";

export default function Home() {
  return (
    
    <section className="principal">
      <header>
        <Nav />
      </header>
      <main>
        <Novedades />
        <Cards />
      </main>
    </section>
    
  );
}
