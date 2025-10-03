const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <div className="relative w-[70px] h-[70px]">
        <div className="absolute w-[70px] h-[70px] rounded-full border-t-[3px] border-r-[2px] border-t-[#3758f9] border-r-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
