import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <div className="bg-white drop-shadow-sm rounded-md p-4 mx-6 my-10 border border-[#EAECF0]">
      <div className="flex justify-between items-center py-4">
        <p className="text-[18px] font-semibold text-[#101828]">Featured Items</p>
        <button className="flex flex-row gap-2 p-2 border rounded-lg drop-shadow-sm bg-white">
          <p className="text-[#344054] font-semibold">View Auction</p>
        </button>
      </div>
      <div className="border-t border-[#EAECF0] py-4"></div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Features;
