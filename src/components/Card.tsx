import React from "react";
import { useGetProductsQuery } from "../services/apiSlice";

const Card = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }
  return (
    <>
      {data?.data?.map((item) => (
        <div className="border p-4 inline-block rounded-lg space-y-4 w-[300px] m-2">
          <div>
            <img src={item.image} alt="laptop" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src="/images/Avatar.png" alt="avatar" />
            <p className="font-semibold text-[#344054]">
              {item.name} <span className="font-normal text-[#98A2B3]">Highest Bidder</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[#344054]">{item.title}</p>
            <p className="font-normal text-[#344054]">
              Current Bid: <span className="font-bold text-[#344054]">{item.bid}</span>
            </p>
          </div>
          <div className="border-t border-[#EAECF0] "></div>
          <button className="bg-[#004CCC] text-white py-2 w-full rounded-lg">Add to Wishlist</button>
        </div>
      ))}
    </>
  );
};

export default Card;
