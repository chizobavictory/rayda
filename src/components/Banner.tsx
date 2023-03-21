import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
const Banner = () => {
  return (
    <div className="bg-white drop-shadow-sm rounded-md p-4 mx-6 my-10 border border-[#EAECF0]">
      <div className="relative ">
        <img src="/images/banner.png" alt="banner" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[70%]">
          <img src="/images/profile.png" alt="profile" className="relative z-5" />
        </div>
      </div>
      <div className="flex justify-between items-center ml-[220px] p-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#101828] font-semibold text-[24px]">Starts in: 3 days : 2 hours : 24 minutes </p>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-[#FFFAEB] rounded-full px-3 py-1 inline-block">
              <div className="h-2 w-2 bg-[#B54708] rounded-full mr-2 inline-block"></div>
              <span className="text-[#B54708] font-medium">Not Live</span>
            </div>
            <p className="text-[#475467]">Layers Auction</p>
          </div>
        </div>
        <button className="flex flex-row gap-2 p-2 border rounded-lg drop-shadow-sm bg-white">
          <ThumbUpOffAltIcon />
          <p className="text-[#344054] font-semibold">Accept Invite</p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
