import React from "react";

export const Gallery = () => {
  return (
    <>
    <div className="w-full h-24 bg-sky-500 bg-gradient-to-b from-[#000f1e] to-[#451952]" />
    <div
      className="w-100vw flex flex-col items-center justify-center max-h-full bg-gradient-to-b from-[#451952] to-[#2b124c] "
      id="Gallery"
    >
      <div className="w-5/6 flex flex-col items-center justify-center max-h-full mb-[4rem]">
        <div className="mt-[5rem] mb-[5rem]">
          <h1 className="text-7xl font-bold text-[#efc36a] ">Gallery</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2 ">
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_purple]"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
