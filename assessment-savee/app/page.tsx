import HomeContent from "app/app/components/HomeContent";
import Navbar from "app/app/components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white relative min-h-screen">
      <Navbar />
      <section>
        <HomeContent />
      </section>
      <Footer />
    </main>
  );
}
