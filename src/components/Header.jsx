import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
    
      {/* Навигация */}
      <nav className="hidden md:flex gap-6 text-sm uppercase font-medium tracking-wider">
        <Link href="#courses">Corsi</Link>
        <Link href="#products">Prodotti</Link>
        <Link href="#contacts">Contatti</Link>
      </nav>

      {/* Поиск / Иконка */}
      <div>
        <button className="text-pink-400 hover:text-pink-300">🔍</button>
      </div>
    </header>
  );
}
