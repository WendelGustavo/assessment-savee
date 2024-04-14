import Image from "next/image";
import Navbar from "app/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black color-black dark:color-white">
      <header>
        <Navbar />
      </header>
    </main>
  );
}
