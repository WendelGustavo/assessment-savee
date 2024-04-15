import HomeContent from "app/app/components/HomeContent";
import Navbar from "app/app/components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <section>
        <header>
          <Navbar />
        </header>
      </section>
      <section>
        <HomeContent />
      </section>
      <section>
        <footer>
          <Footer />
        </footer>
      </section>
    </main>
  );
}
