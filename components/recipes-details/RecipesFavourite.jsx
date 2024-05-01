"use client";

import { addFavourites } from "@/app/action";
import { AuthConetxt } from "@/contexts";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function RecipesFavourite({ recipeDetails }) {
  const { auth } = useContext(AuthConetxt);
  const params = useParams();
  const isFavourite = recipeDetails?.favourites?.find((id) => id === auth?._id.toString());
  const handleFavourite = async () => {
    try {
      if (auth?.email) {
        // addFvourite server action
        const response = await addFavourites(params?.recipesId, auth?._id.toString());
        if (response?.isFavourite) {
          toast.success("Fvourite successfully", {
            position: "top-right",
          });
        } else {
          toast.success("Unfvourite successfully", {
            position: "top-right",
          });
        }
      } else {
        toast.warn("Please login first", {
          position: "top-right",
        });
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div
      onClick={handleFavourite}
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isFavourite ? "red" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </div>
  );
}
