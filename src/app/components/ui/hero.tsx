"use client";

import FaqAccordion from "../elements/faqAccordion";
import Waitlist from "../elements/waitlist";
import Waves from './waves';

export default function Hero() {
  return (
   <div className="hero bg-base-200 items-center py-0 my-0">
	
<Waves
  lineColor="#444466"
  backgroundColor="#191e24" 
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
  <div className="hero-content text-center items-start my-0 py-0">
    <div className="max-w-xl py-0 mx-0">
      <img height="320" width="320" className="text-center py-0 m-auto" src="/logo-dark-mode.svg" />
      <p className="py-6 text-lg font-light uppercase">
      Trust, Transparency and Efficiency on the Chain.
      </p>
      <FaqAccordion />
      <div className="flex items-center justify-center py-6 gap-4">
        <button className="btn btn-primary rounded shadow-sm font-bold uppercase"  onClick={() => {
            const modal = document.getElementById('waitlist');
            // Type assertion: Check if the element exists AND assert it is an HTMLDialogElement
            if (modal instanceof HTMLDialogElement) {
                modal.showModal();
            }
          }}>Join the Waitlist</button>
	<dialog id="waitlist" className="modal">
  <div className="modal-box min-h-[80vh]">
    <div className="modal-action">
      <form method="dialog">
          <Waitlist />
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    </div>
  </div>
</div>
  );
}