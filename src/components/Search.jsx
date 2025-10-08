"use client";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const { search, setSearch } = useAppContext();

  useEffect(() => {
    if (search.length > 0) {
      router.push("/shop");
    }
  }, [search, router]);

  return (
    <div className="h-10 pl-3 flex items-center text-sm bg-white border border-gray-300 rounded-full overflow-hidden">
      <input
        type="search"
        placeholder="Search products"
        onKeyUp={(e) => setSearch(e.target.value)}
        className="px-2 w-full h-full outline-none text-black placeholder-gray-400"
      />
      <button className="h-full px-4 flex items-center justify-center text-white bg-primary/90 hover:bg-primary cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 2.75C6.14154 2.75 2 6.89029 2 11.998C2 17.1056 6.14154 21.2459 11.25 21.2459C13.5335 21.2459 15.6238 20.4187 17.2373 19.0475L20.7182 22.5287C21.011 22.8216 21.4859 22.8217 21.7788 22.5288C22.0717 22.2359 22.0718 21.761 21.7789 21.4681L18.2983 17.9872C19.6714 16.3736 20.5 14.2826 20.5 11.998C20.5 6.89029 16.3585 2.75 11.25 2.75ZM3.5 11.998C3.5 7.71905 6.96962 4.25 11.25 4.25C15.5304 4.25 19 7.71905 19 11.998C19 16.2769 15.5304 19.7459 11.25 19.7459C6.96962 19.7459 3.5 16.2769 3.5 11.998Z"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
