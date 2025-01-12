const Loader = () => {
  return (
    <div className="flex fixed w-full top-0 h-screen space-x-2 justify-center items-center bg-gray-500/75 z-50">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black/90 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-black/75 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-black/50 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
