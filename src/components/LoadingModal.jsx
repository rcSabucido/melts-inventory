import { useState, useEffect } from 'react';

const LoadingModal = ({show}) => {
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) {
      setMounted(true);
    } else {
      // Set mounted to false (clear modal from the DOM)
      // after 1 second to remove it from the DOM
      const timeout = setTimeout(() => {
        setMounted(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center
        bg-gray-800 bg-opacity-60
        transition-opacity duration-150 ease-in-out
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div className="flex flex-col items-center space-y-4 py-8 px-16 bg-white rounded-xl">
        <div className="w-32 h-32">
          <img src="/loading_icon.gif" alt="" />
        </div>

        <p className="text-black text-xl">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingModal;