import Logo from "@/components/ui/Logo";

function Loading() {
  return (
    <div className=" flex h-screen w-full items-center justify-center overflow-hidden dark:bg-gray-800 opacity-100 duration-300">
      <div className="flex flex-col items-center pb-10 text-black">
        <Logo color={"text-black"} />
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div
              className="spinner-border mt-10 inline-block h-8 w-8 animate-spin rounded-full border-4"
              role="status"
            >
              <svg
                className="h-12 w-10 rotate-0 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
