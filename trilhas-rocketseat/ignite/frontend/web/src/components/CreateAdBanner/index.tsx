import {MagnifyingGlassPlus} from 'phosphor-react';

import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
	return (
    <div className="overflow-hidden bg-nlw-gradient mt-8 rounded-lg pt-1 box-border self-stretch">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center ">
        <div>
          <strong className="block text-white text-2xl font-black"> Não encontrou seu duo? </strong>
          <span className="text-zinc-400"> Publique um anúncio para encontrar novos players! </span>
        </div>

        <Dialog.Trigger className="bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 text-white flex items-center gap-3">
          <MagnifyingGlassPlus size={24} /> Publicar anúncio
        </Dialog.Trigger >
      </div>
    </div>
	);
}
