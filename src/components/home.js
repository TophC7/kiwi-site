import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex h-full place-items-center justify-center bg-kiwi-500 p-8 text-center text-slate-600">
      <div id="hero" className=" flex max-w-xl flex-col gap-4">
        <div className="spin kiwi-hero">🥝</div>
        <div className="rainbow text-5xl font-bold">Kiwis!</div>
        <p className="text-xl font-thin">
          Kiwis are great! They're so good I made this whole page about them.
          Kiwis are in fact so good you should always eat them whole; skin and
          all! If you love kiwis as much as I do keep browsing to learn more.
        </p>
        <div className="flex justify-center gap-2 text-center text-xl">
          <Link to="/info">
            <button className="btn-primary">Kiwi Info</button>
          </Link>
          <Link to="/about">
            <button class="btn-outline">About</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
