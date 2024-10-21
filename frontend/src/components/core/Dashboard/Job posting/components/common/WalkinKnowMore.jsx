import React from 'react';
import { IoMdInformationCircle } from "react-icons/io";

const WalkinKnowMore = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed mt-14 w-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleClickOutside}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[45%] mx-auto">
        <button onClick={onClose} className="flex justify-end w-full text-gray-500 hover:text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex justify-between items-center scale-105 p-3">
          <svg width="640" height="142" viewBox="0 0 640 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="640" height="142" rx="4" fill="#EAEDF2"></rect>
            <g filter="url(#filter0_d_813_24634)">
              <rect x="152" y="16" width="336.25" height="110" rx="11.9281" fill="white"></rect>
              <rect x="152.497" y="16.497" width="335.256" height="109.006" rx="11.4311" stroke="#E8E7EA" stroke-width="0.994008"></rect>
              <rect x="164.177" y="33.1469" width="31.3112" height="31.3112" rx="3.72753" fill="#F4F2F6" stroke="#E8E7EA" stroke-width="0.497004"></rect>
              <rect width="252.478" height="23.8562" transform="translate(203.688 27.9287)" fill="#F4F5F7"></rect>
              <rect width="94.4307" height="15.9041" transform="translate(203.688 53.7725)" fill="#F4F5F7"></rect>
              <path d="M171.524 98.625C171.862 98.625 172.187 98.4867 172.426 98.2406C172.665 97.9944 172.799 97.6606 
              172.799 97.3125C172.799 96.9644 172.665 96.6306 172.426 96.3844C172.187 96.1383 171.862 96 171.524 96C171.186 
              96 170.862 96.1383 170.623 96.3844C170.384 96.6306 170.249 96.9644 170.249 97.3125C170.249 97.6606 170.384 
              97.9944 170.623 98.2406C170.862 98.4867 171.186 98.625 171.524 98.625ZM169.285 101.482C169.312 101.471 169.336 
              101.461 169.362 101.45L168.913 103.186C168.764 103.763 168.911 104.378 169.304 104.818L171.182 106.927L171.766 
              109.336C171.88 109.803 172.342 110.09 172.797 109.973C173.251 109.855 173.53 109.379 173.416 108.912L172.805 
              106.393C172.754 106.18 172.651 105.986 172.507 105.825L171.192 104.348L171.705 102.557L171.96 103.186C172.077 103.476 
              172.292 103.714 172.566 103.856L173.275 104.22C173.694 104.436 174.204 104.261 174.414 103.829C174.624 103.396 174.454 
              102.871 174.034 102.655L173.463 102.363L173.057 101.357C172.6 100.233 171.532 99.5 170.348 99.5C169.742 99.5 169.144 
              99.6312 168.592 99.8828L168.379 99.9785C167.505 100.378 166.836 101.138 166.536 102.07L166.467 102.284C166.318 102.743 
              166.56 103.238 167.003 103.391C167.447 103.544 167.93 103.295 168.079 102.839L168.148 102.625C168.3 102.158 168.634 
              101.78 169.07 101.581L169.282 101.485L169.285 101.482ZM168.488 105.177L167.824 106.883L166.249 108.507C165.917 108.849 
              165.917 109.404 166.249 109.746C166.581 110.087 167.12 110.087 167.452 109.746L169.089 108.059C169.211 107.933 169.306 
              107.782 169.37 107.618L169.755 106.629L168.674 105.414C168.608 105.341 168.547 105.261 168.488 105.179V105.177ZM180.625 
              100.195C180.293 99.8527 179.753 99.8527 179.421 100.195C179.089 100.536 179.089 101.091 179.421 101.433L180.096 
              102.125H176.199C175.729 102.125 175.349 102.516 175.349 103C175.349 103.484 175.729 103.875 176.199 103.875H180.096L179.421 
              104.57C179.089 104.911 179.089 105.466 179.421 105.808C179.753 106.15 180.293 106.15 180.625 105.808L182.75 103.621C183.082 
              103.279 183.082 102.724 182.75 102.382L180.625 100.195Z" fill="#003C96"></path>
              <path d="M189.552 107.988L186.784 97.8675H188.03L190.145 106.11H190.244L192.398 97.8675H193.782L195.937 106.11H196.035L198.15 
              97.8675H199.396L196.628 107.988H195.363L193.13 99.9233H193.051L190.817 107.988H189.552ZM202.292 108.166C201.811 108.166 201.374 
              108.076 200.982 107.894C200.59 107.71 200.279 107.445 200.048 107.099C199.817 106.75 199.702 106.328 199.702 105.834C199.702 
              105.399 199.788 105.046 199.959 104.776C200.13 104.503 200.359 104.289 200.646 104.134C200.933 103.979 201.249 103.864 201.595 
              103.788C201.944 103.709 202.295 103.646 202.647 103.6C203.109 103.541 203.483 103.496 203.769 103.467C204.059 103.434 204.27 
              103.379 204.402 103.303C204.537 103.228 204.604 103.096 204.604 102.908V102.869C204.604 102.381 204.471 102.002 204.204 101.732C203.941 
              101.462 203.54 101.327 203.003 101.327C202.447 101.327 202.01 101.449 201.694 101.692C201.377 101.936 201.155 102.196 201.027 
              102.473L199.92 102.078C200.117 101.617 200.381 101.258 200.71 101.001C201.043 100.74 201.405 100.559 201.797 100.457C202.193 
              100.352 202.582 100.299 202.964 100.299C203.208 100.299 203.488 100.328 203.804 100.388C204.123 100.444 204.431 100.561 204.728 
              100.739C205.028 100.917 205.277 101.185 205.474 101.544C205.672 101.903 205.771 102.384 205.771 102.987V107.988H204.604V106.96H204.545C204.466 
              107.125 204.334 107.301 204.15 107.489C203.965 107.677 203.72 107.837 203.413 107.969C203.107 108.1 202.733 108.166 202.292 108.166ZM202.47 
              107.119C202.931 107.119 203.32 107.028 203.636 106.847C203.955 106.666 204.196 106.432 204.357 106.145C204.522 105.858 204.604 105.557 204.604 
              105.241V104.173C204.555 104.233 204.446 104.287 204.278 104.336C204.114 104.382 203.922 104.424 203.705 104.46C203.491 104.493 203.282 104.522 
              203.077 104.549C202.876 104.572 202.713 104.592 202.588 104.608C202.285 104.648 202.002 104.712 201.738 104.801C201.478 104.886 201.267 105.017 
              201.106 105.191C200.948 105.363 200.868 105.596 200.868 105.893C200.868 106.298 201.018 106.605 201.318 106.812C201.621 107.016 202.005 107.119 
              202.47 107.119ZM209.066 97.8675V107.988H207.899V97.8675H209.066ZM212.289 105.221L212.269 103.778H212.506L215.827 100.398H217.27L213.732 
              103.976H213.633L212.289 105.221ZM211.202 107.988V97.8675H212.368V107.988H211.202ZM216.025 107.988L213.06 104.233L213.89 103.422L217.507 
              107.988H216.025ZM222.481 103.106V104.193H218.054V103.106H222.481ZM224.533 107.988V100.398H225.7V107.988H224.533ZM225.126 99.1326C224.899 99.1326 
              224.703 99.0552 224.538 98.9003C224.377 98.7455 224.296 98.5593 224.296 98.3419C224.296 98.1244 224.377 97.9383 224.538 97.7835C224.703 97.6286 224.899 97.5512 225.126 97.5512C225.354 97.5512 225.548 97.6286 225.71 97.7835C225.874 97.9383 225.957 98.1244 225.957 98.3419C225.957 98.5593 225.874 98.7455 225.71 98.9003C225.548 99.0552 225.354 99.1326 225.126 99.1326ZM229.002 103.422V107.988H227.836V100.398H228.963V101.584H229.061C229.239 101.198 229.509 100.889 229.872 100.655C230.234 100.417 230.702 100.299 231.275 100.299C231.789 100.299 232.239 100.404 232.624 100.615C233.01 100.823 233.31 101.139 233.524 101.564C233.738 101.986 233.845 102.519 233.845 103.165V107.988H232.679V103.244C232.679 102.648 232.524 102.183 232.214 101.851C231.905 101.515 231.48 101.347 230.939 101.347C230.567 101.347 230.234 101.427 229.941 101.589C229.651 101.75 229.422 101.986 229.254 102.295C229.086 102.605 229.002 102.981 229.002 103.422ZM239.89 107.988V100.398H241.056V107.988H239.89ZM240.483 99.1326C240.256 99.1326 240.06 99.0552 239.895 98.9003C239.734 98.7455 239.653 98.5593 239.653 98.3419C239.653 98.1244 239.734 97.9383 239.895 97.7835C240.06 97.6286 240.256 97.5512 240.483 97.5512C240.71 97.5512 240.905 97.6286 241.066 97.7835C241.231 97.9383 241.313 98.1244 241.313 98.3419C241.313 98.5593 241.231 98.7455 241.066 98.9003C240.905 99.0552 240.71 99.1326 240.483 99.1326ZM244.359 103.422V107.988H243.192V100.398H244.319V101.584H244.418C244.596 101.198 244.866 100.889 245.229 100.655C245.591 100.417 246.059 100.299 246.632 100.299C247.146 100.299 247.596 100.404 247.981 100.615C248.367 100.823 248.666 101.139 248.88 101.564C249.095 101.986 249.202 102.519 249.202 103.165V107.988H248.035V103.244C248.035 102.648 247.881 102.183 247.571 101.851C247.261 101.515 246.836 101.347 246.296 101.347C245.924 101.347 245.591 101.427 245.298 101.589C245.008 101.75 244.779 101.986 244.611 102.295C244.443 102.605 244.359 102.981 244.359 103.422ZM254.634 100.398V101.386H250.7V100.398H254.634ZM251.847 98.5791H253.013V105.814C253.013 106.143 253.061 106.39 253.156 106.555C253.255 106.717 253.38 106.825 253.532 106.881C253.687 106.934 253.85 106.96 254.021 106.96C254.15 106.96 254.255 106.954 254.337 106.941C254.42 106.924 254.486 106.911 254.535 106.901L254.772 107.949C254.693 107.978 254.583 108.008 254.441 108.038C254.3 108.071 254.12 108.087 253.903 108.087C253.573 108.087 253.25 108.016 252.934 107.875C252.621 107.733 252.361 107.517 252.153 107.227C251.949 106.937 251.847 106.572 251.847 106.13V98.5791ZM259.489 108.146C258.758 108.146 258.127 107.985 257.597 107.662C257.069 107.336 256.663 106.881 256.376 106.298C256.093 105.712 255.951 105.03 255.951 104.252C255.951 103.475 256.093 102.79 256.376 102.196C256.663 101.6 257.061 101.136 257.572 100.803C258.086 100.467 258.685 100.299 259.371 100.299C259.766 100.299 260.156 100.365 260.542 100.497C260.927 100.628 261.278 100.842 261.595 101.139C261.911 101.432 262.163 101.821 262.351 102.305C262.538 102.79 262.632 103.386 262.632 104.094V104.588H256.781V103.58H261.446C261.446 103.152 261.361 102.77 261.189 102.434C261.021 102.098 260.781 101.832 260.468 101.638C260.158 101.444 259.792 101.347 259.371 101.347C258.906 101.347 258.504 101.462 258.165 101.692C257.829 101.92 257.57 102.216 257.389 102.582C257.208 102.948 257.117 103.34 257.117 103.758V104.43C257.117 105.003 257.216 105.489 257.414 105.888C257.615 106.283 257.893 106.585 258.249 106.792C258.605 106.997 259.018 107.099 259.489 107.099C259.796 107.099 260.072 107.056 260.32 106.97C260.57 106.881 260.786 106.75 260.967 106.575C261.148 106.397 261.288 106.176 261.387 105.913L262.514 106.229C262.395 106.611 262.196 106.947 261.916 107.237C261.636 107.524 261.29 107.748 260.878 107.909C260.466 108.067 260.003 108.146 259.489 108.146ZM264.406 107.988V100.398H265.533V101.544H265.612C265.751 101.169 266.001 100.864 266.363 100.63C266.726 100.396 267.134 100.279 267.589 100.279C267.675 100.279 267.782 100.281 267.91 100.284C268.039 100.287 268.136 100.292 268.202 100.299V101.485C268.162 101.475 268.072 101.46 267.93 101.44C267.792 101.417 267.645 101.406 267.49 101.406C267.121 101.406 266.792 101.483 266.502 101.638C266.215 101.79 265.988 102 265.82 102.271C265.655 102.537 265.573 102.842 265.573 103.185V107.988H264.406ZM276.022 100.398L273.215 107.988H272.029L269.222 100.398H270.487L272.583 106.446H272.662L274.757 100.398H276.022ZM277.561 107.988V100.398H278.728V107.988H277.561ZM278.154 99.1326C277.927 99.1326 277.731 99.0552 277.566 98.9003C277.405 98.7455 277.324 98.5593 277.324 98.3419C277.324 98.1244 277.405 97.9383 277.566 97.7835C277.731 97.6286 277.927 97.5512 278.154 97.5512C278.382 97.5512 278.576 97.6286 278.738 97.7835C278.902 97.9383 278.985 98.1244 278.985 98.3419C278.985 98.5593 278.902 98.7455 278.738 98.9003C278.576 99.0552 278.382 99.1326 278.154 99.1326ZM284.046 108.146C283.315 108.146 282.684 107.985 282.154 107.662C281.627 107.336 281.22 106.881 280.933 106.298C280.65 105.712 280.508 105.03 280.508 104.252C280.508 103.475 280.65 102.79 280.933 102.196C281.22 101.6 281.618 101.136 282.129 100.803C282.643 100.467 283.242 100.299 283.928 100.299C284.323 100.299 284.713 100.365 285.099 100.497C285.484 100.628 285.835 100.842 286.152 101.139C286.468 101.432 286.72 101.821 286.908 102.305C287.095 102.79 287.189 103.386 287.189 104.094V104.588H281.338V103.58H286.003C286.003 103.152 285.918 102.77 285.746 102.434C285.578 102.098 285.338 101.832 285.025 101.638C284.715 101.444 284.349 101.347 283.928 101.347C283.463 101.347 283.061 101.462 282.722 101.692C282.386 101.92 282.127 102.216 281.946 102.582C281.765 102.948 281.674 103.34 281.674 103.758V104.43C281.674 105.003 281.773 105.489 281.971 105.888C282.172 106.283 282.45 106.585 282.806 106.792C283.162 106.997 283.575 107.099 284.046 107.099C284.353 107.099 284.629 107.056 284.877 106.97C285.127 106.881 285.343 106.75 285.524 106.575C285.705 106.397 285.845 106.176 285.944 105.913L287.071 106.229C286.952 106.611 286.753 106.947 286.473 107.237C286.193 107.524 285.847 107.748 285.435 107.909C285.023 108.067 284.56 108.146 284.046 108.146ZM290.683 107.988L288.37 100.398H289.596L291.237 106.209H291.316L292.937 100.398H294.182L295.783 106.189H295.862L297.503 100.398H298.728L296.416 107.988H295.269L293.609 102.157H293.49L291.83 107.988H290.683Z" fill="#190A28"></path>
              </g><defs><filter id="filter0_d_813_24634" x="147.03" y="13.018" width="346.19" height="219.94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.98802"></feOffset><feGaussianBlur stdDeviation="2.48502"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_813_24634"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_813_24634" result="shape"></feBlend></filter></defs></svg>
        </div>
        <h2 className="text-xl font-semibold">Important note for Walk-in Interview jobs:</h2>
        <ul className="space-y-2 mt-3 ">
          <li className='list-decimal list-item list-inside'>Remember to call candidates for better results.</li>
          <li className='list-decimal list-item list-inside'>Jobs with walk-in interviews will be marked with a "Walk-in" tag.</li>
          <li className='list-decimal list-item list-inside'>
              Selecting walk-in doesn’t ensure more applications. It’s just an option for you to share
              walk-in interview details with candidates.
          </li>
          <li className='list-decimal list-item list-inside'>
              The "Walk-in" tag will be removed after the event, but candidates can still apply (until
              the job expires).
          </li>
        </ul>
        <div className="flex items-center gap-2 mt-3 border-[1px] border-blue-200 bg-blue-100 rounded text-sm py-2 text-center text-gray-600">
          <IoMdInformationCircle className='ml-2 text-xl text-[#1967d2]'/>
          <p>
            By choosing this, you adhere to Apna{" "}
            <a href="https://www.jobchaahiye.com/terms-of-service" target='_blank' className="text-blue-500 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" target='_blank' className="text-blue-500 underline">
              Code of Conduct
            </a>
          </p>
        </div>
        <div className="mt-7 w-[30%] mx-auto">
          <button
            onClick={onClose}
            className="w-full bg-[#1967d2] text-white py-2 rounded-lg hover:scale-95 transition-all duration-200"
          >
            Okay, got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalkinKnowMore;