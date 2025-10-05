import Link from "next/link";

const NotFound404Page = () => {
  return (
    <div className="min-h-[75vh] px-5 md:pb-10 flex flex-col items-center justify-center text-sm max-md:px-4 text-[#1F2937]">
      <h1 className="text-8xl md:text-9xl font-medium">404</h1>
      <div className="h-1 w-16 rounded bg-primary my-5 md:my-7"></div>
      <p className="text-2xl md:text-3xl font-semibold">Page Not Found</p>
      <p className="text-sm md:text-base mt-4 max-w-md text-center text-[#6B7280]">
        Don't worry, you can head back to the homepage or use the navigation
        menu to find what you need
      </p>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <Link
          href="/"
          className="w-full md:w-fit px-4 py-3 font-medium rounded-md flex items-center justify-center gap-2 border border-[#D1D5DB] bg-transparent"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M15.2335 5.21967C15.5263 5.51256 15.5263 5.98744 15.2335 6.28033L9.51379 12L15.2335 17.7197C15.5263 18.0126 15.5263 18.4874 15.2335 18.7803C14.9406 19.0732 14.4657 19.0732 14.1728 18.7803L7.92279 12.5303C7.6299 12.2374 7.6299 11.7626 7.92279 11.4697L14.1728 5.21967C14.4657 4.92678 14.9406 4.92678 15.2335 5.21967Z"
              fill="#1F2937"
            />
          </svg>
          Return Home
        </Link>
        <Link
          href="/"
          className="w-full md:w-fit px-5 py-3 font-medium text-white bg-primary rounded-md text-center" 
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound404Page;
