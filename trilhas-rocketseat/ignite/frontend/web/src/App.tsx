import "./styles/main.css";
import logoImg from './assets/logo_nlw_esports.svg';

import {MagnifyingGlassPlus} from 'phosphor-react'

function App() {
  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
    <img src={logoImg} alt="logo esports" />

    <h1 className="text-6xl text-white font-black mt-20">
       Seu <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span> está aqui.
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image1.png" alt="imagem" />
        <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> League of Legends </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image2.png" alt="imagem" />
         <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> Dota 2  </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image3.png" alt="imagem" />
         <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> Counter Strike </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image4.png" alt="imagem" />
         <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> Apex Legends </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image5.png" alt="imagem" />
         <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> Fortnite  </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/image6.png" alt="imagem" />
         <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
          <strong className="block font-bold text-white"> World of Warcraft </strong>
          <span className="block text-zinc-300 text-sm"> 4 anúncios </span>
        </div>
      </a>
    </div>

    <div className="overflow-hidden bg-nlw-gradient mt-8 rounded-lg pt-1 box-border self-stretch">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center ">
        <div>
          <strong className="block text-white text-2xl font-black"> Não encontrou seu duo? </strong>
          <span className="text-zinc-400"> Publique um anúncio para encontrar novos players! </span>
        </div>

        <button className="bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 text-white flex items-center gap-3">
          <MagnifyingGlassPlus size={24} /> Publicar anúncio
        </button>
      </div>
    </div>

   </div>
  )
}

export default App
