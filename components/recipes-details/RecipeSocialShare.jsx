"use client";

import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function RecipeSocialShare({ recipeDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        onClick={closeModal}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-gray-600 rounded-lg max-w-md w-full">
              <div className="p-8">
                <h2 className="text-lg font-semibold mb-4">Share on Social Media</h2>
                <div className="flex justify-center mb-4 gap-5">
                  {/* Facebook share button */}
                  <FacebookShareButton url={currentUrl} quote={recipeDetails?.name}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  {/* Twitter share button */}
                  <TwitterShareButton url={currentUrl} title={recipeDetails?.name}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={currentUrl} title={recipeDetails?.name}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton url={currentUrl} title={recipeDetails?.name}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
