import React from "react";
import { Drawer } from "vaul";
import BookDrawer from "../ui/BookDrawer";

const CTA = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div className="absolute -right-8 bottom-0 -left-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        </div>
        <div className="absolute bottom-0 left-20 flex h-8 items-end overflow-hidden">
          <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-32 text-center flex flex-col items-center group">
        <button className="mt-8 text-lg md:text-2xl font-semibold text-white bg-black relative border border-neutral-200 py-2 md:py-4 px-6 md:px-8 rounded-full transition-all shadow-2xl shadow-neutral-500 hover:shadow-orange-200 duration-500 hover:scale-[102%]">
          <span>Book a call</span>
          <span className="absolute inset-x-0 w-2/3 mx-auto bottom-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px]" />
        </button>
        {/* <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            
          </Drawer.Trigger>
          <BookDrawer />
        </Drawer.Root> */}
        <span className="text-black text-sm md:text-base font-normal rounded-md px-4 mt-6 group-hover:animate-pulse">
          and get started on your project
        </span>
      </div>
    </div>
  );
};

export default CTA;
