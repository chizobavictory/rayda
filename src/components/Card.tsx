import React from "react";

const Card = () => {
  return (
    <div className="border p-4 inline-block rounded-lg space-y-4 w-[300px]">
      <div>
        <img src="/images/laptop.png" alt="laptop" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src="/images/Avatar.png" alt="avatar" />
        <p className="font-semibold text-[#344054]">
          Koray Okumus <span className="font-normal text-[#98A2B3]">Highest Bidder</span>
        </p>
      </div>
      <div>
        <p className="font-semibold text-[#344054]">Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold</p>
        <p>
          Current Bid: <span>₦795,000</span>
        </p>
      </div>
      <div className="border-t border-[#EAECF0] "></div>
      <button className="bg-[#004CCC] text-white px-6 py-4 w-full rounded-lg">Add to Wishlist</button>
    </div>
  );
};

export default Card;
