import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <div>
          <p className="text-[#101828] font-semibold text-[30px]">Welcome</p>
          <p className="text-[#475467]">Your current sales auction and activity.</p>
        </div>
        <div className="bg-white p-2 flex items-center rounded-md h-[44px] relative">
          <NotificationsNoneIcon />
          <div className="bg-red-600 text-white w-[18px] h-[18px] flex justify-center items-center rounded-full absolute bottom-0 right-0 text-xs">2</div>
        </div>
      </div>
      <div className="border-t border-[#EAECF0] mx-6"></div>
    </>
  );
};

export default Header;
