"use client";

import Waitlist from "../elements/waitlist";

export default function Hero() {
  return (
   <div className="hero bg-base-200 min-h-[70vh] items-center py-0 my-0">
  <div className="hero-content text-center items-start my-0 py-0">
    <div className="max-w-md py-0 mx-0">
      <img height="320" width="320" className="text-center py-0 m-auto" src="/logo-dark-mode.svg" />
      <p className="py-6 text-lg font-light uppercase">
      Trust, Transparency and Efficiency on the Chain.
      </p>
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