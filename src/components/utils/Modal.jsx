import React, { useEffect } from "react";

const Modal = ({ toggleModal, form }) => {
  return (
    <div
      id="authentication-modal"
      // tabIndex="2"
      class="   fixed h-full w-full top-0 left-0 right-0 z-[20000]   overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className=" h-full w-full rounded-lg bg-black opacity-80"></div>
      <div class=" bg-gray-200 rounded-lg absolute w-full h-full max-w-md md:h-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={toggleModal}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* <div>{children}</div> */}
            {/* <span class="sr-only">Close modal</span> */}
          </button>
          <div className="px-[2rem] py-[2rem]">{form}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
