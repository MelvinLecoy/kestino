"use client";
import { useRef } from 'react';
import sHook from "./styles.module.css";
import { Andika } from 'next/font/google';
const andika = Andika({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-andika",
});

type Props = {
  visibility: string;
};

const S = {
  linkRows: `abso t24 w100p tb8 titalic ${andika.variable} font-mainMenu`,
  link: "rela fic bt1 h70 px20 py5",
};

function MenuSlider({ visibility }: Props) {
  const colorSlider = useRef<HTMLDivElement>(null);
  const slide = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let top = 0, upper = 0, range = e.clientX;
    const target = e.target as HTMLAnchorElement;
    switch (target.getAttribute('href')) {
        case '/#contact': {upper = 1; break;}
        case '/#expskills': {range = window.innerWidth - e.clientX; top = 1; break;}
        case '/#projects': {range = window.innerWidth - e.clientX; top = 1; upper = 1;}
    }
    const link = colorSlider.current?.children[top]?.children[upper] as HTMLAnchorElement;
    link?.style.setProperty("--trans", `${70 + 30 * (range / link?.offsetWidth)}%`);
  };
  
  return (
    <div id={sHook.slider} className={`${visibility} abso w100p h100p`} ref={colorSlider}>
      <div id={sHook.topSlider} className={`top-[8%] ${S.linkRows}`}>
        <a href="/#about" className={S.link} onMouseMove={slide}>about</a>
        <a href="/#contact" className={`${S.link} bb1`} onMouseMove={slide}>contact</a>
      </div>
      <div id={sHook.botSlider} className={`bottom-[8%] ${S.linkRows}`}>
        <a href="/#expskills" className={`${S.link} je`} onMouseMove={slide}>experiences & skills</a>
        <a href="/#projects" className={`${S.link} je bb1`} onMouseMove={slide}>projects</a>
      </div>
    </div>
  )
}

export default MenuSlider;