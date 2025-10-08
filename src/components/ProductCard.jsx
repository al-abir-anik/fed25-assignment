import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full space-y-4 group">
      <div className="w-full pb-[105%] flex items-center justify-center bg-[#f6f7fb] rounded-lg overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full p-5 object-contain absolute top-0 left-0"
          width={800}
          height={100}
        />
        <button className="w-11 h-11 absolute top-4 right-4 flex lg:hidden lg:group-hover:flex justify-center items-center bg-white border border-[#D1D5DB] rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8227 4.77124L12 4.94862L12.1773 4.77135C14.4244 2.52427 18.0676 2.52427 20.3147 4.77134C22.5618 7.01842 22.5618 10.6616 20.3147 12.9087L13.591 19.6324C12.7123 20.5111 11.2877 20.5111 10.409 19.6324L3.6853 12.9086C1.43823 10.6615 1.43823 7.01831 3.6853 4.77124C5.93237 2.52417 9.5756 2.52417 11.8227 4.77124ZM10.762 5.8319C9.10073 4.17062 6.40725 4.17062 4.74596 5.8319C3.08468 7.49319 3.08468 10.1867 4.74596 11.848L11.4697 18.5718C11.7625 18.8647 12.2374 18.8647 12.5303 18.5718L19.254 11.8481C20.9153 10.1868 20.9153 7.49329 19.254 5.83201C17.5927 4.17072 14.8993 4.17072 13.238 5.83201L12.5304 6.53961C12.3897 6.68026 12.199 6.75928 12 6.75928C11.8011 6.75928 11.6104 6.68026 11.4697 6.53961L10.762 5.8319Z"
              fill="#1F2937"
            />
          </svg>
        </button>
        <p
          className={`py-1 px-3 absolute top-[18px] left-[18px] rounded-full text-sm font-medium text-[#B91C1C] bg-[#FEF2F2] ${
            product.hotItem ? "block" : "hidden"
          }`}
        >
          Hot Item
        </p>
      </div>

      <div className="text-customBlack space-y-4">
        <div className="flex justify-between">
          <div className="w-4/6 space-y-1">
            <p className="font-semibold hover:text-primary/90 transition-colors truncate">
              {product.name}
            </p>
            <p className="text-sm text-[#6b7280] truncate">
              {product.category}
            </p>
          </div>
          <p className="font-medium transition-colors whitespace-nowrap">
            $ {product.price}.00
          </p>
        </div>

        <button
          type="button"
          className="w-full py-2 px-4 font-medium border border-[#d1d5db] rounded-lg flex justify-center gap-2.5 items-center bg-transparent group-hover:bg-primary/90 hover:bg-primary group-hover:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4ZM5.99714 7.12161L6.9791 14.1044C7.03116 14.4747 7.34793 14.75 7.72179 14.75L17.0833 14.75C17.3818 14.75 17.6519 14.573 17.771 14.2993L20.4383 8.17092C20.6539 7.67556 20.2909 7.12161 19.7507 7.12161H5.99714Z"
              className="fill-[#1f2937] group-hover:fill-white"
            />
            <path
              d="M6.03418 19.5C6.03418 18.5335 6.81768 17.75 7.78418 17.75C8.75068 17.75 9.53428 18.5335 9.53428 19.5C9.53428 20.4665 8.75078 21.25 7.78428 21.25C6.81778 21.25 6.03418 20.4665 6.03418 19.5Z"
              className="fill-[#1f2937] group-hover:fill-white"
            />
            <path
              d="M16.3203 17.75C15.3538 17.75 14.5703 18.5335 14.5703 19.5C14.5703 20.4665 15.3538 21.25 16.3203 21.25C17.2868 21.25 18.0704 20.4665 18.0704 19.5C18.0704 18.5335 17.2868 17.75 16.3203 17.75Z"
              className="fill-[#1f2937] group-hover:fill-white"
            />
          </svg>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
