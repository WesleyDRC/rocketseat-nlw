import "./styles/main.css";
import logoImg from "./assets/logo_nlw_esports.svg";

import { GameBanner } from "./components/GameBanner/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import * as Dialog from '@radix-ui/react-dialog';

import { useState, useEffect } from "react";
import { CreateAdModal } from "./components/CreateAdModal";

import axios from 'axios';

function App() {

  interface GamesProps {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<GamesProps[]>([])

  useEffect (() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="logo esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        }) }

      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  );
}

export default App;
