"use client";
import S from "./styles.module.css";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

function BlurryBg({ children }: Props) {
  const blob = useRef<HTMLDivElement>(null);
  const trailing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    blob.current?.animate({left: `${e.clientX}px`, top: `${e.clientY}px`},
                          {duration: 3000, fill: "forwards"});
  };
  return (
    <div onMouseMove={trailing} className="rela bg-bg">
      <div className='fixed h-[5000px] w-[10000px] backdrop-blur-[50px] z10 penone max-[1024px]:hidden'></div>
      <div ref={blob} className={`fixed h30 ar1w1h ofh z0 ${S.mouseTrailer} max-[1024px]:hidden`}></div>
      {children}
    </div>
  )
}

export default BlurryBg;