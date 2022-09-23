interface GameBannerProps {
	title: string,
	bannerUrl: string,
	adsCount: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="imagem" />
      <div className="absolute w-full left-0 bottom-0 right-0 pt-16 pb-4 px-4 bg-game-gradient ">
        <strong className="block font-bold text-white">
          {props.title}
        </strong>
        <span className="block text-zinc-300 text-sm"> {props.adsCount} anúncio(s) </span>
      </div>
    </a>
  );
}
