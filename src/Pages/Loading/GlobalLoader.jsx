import { useLoading } from "../Loading/LoadingContext";

const GlobalLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <div className="w-14 h-14 border-4 border-t-[#632EE3] border-gray-300 rounded-full animate-spin"></div>
      <p className="mt-3 text-lg text-gray-700 font-medium">Loading...</p>
    </div>
  );
};

export default GlobalLoader;
