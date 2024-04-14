import HomeContent from "app/components/HomeContent";
import Navbar from "app/components/Navbar";

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
    </main>
  );
}
