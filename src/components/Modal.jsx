import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded-md backdrop:bg-stone-900/90 shadow-sm"
    >
      {children}

      <form method="dialog" className="mt-4 text-right">
        <button className="px-3 py-2 bg-stone-700 text-stone-400 rounded-md text-xs md:text-base hover:bg-stone-500 hover:text-stone-200">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
