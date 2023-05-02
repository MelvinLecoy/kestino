"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
    words: string[],
    cursorCol: string,
};

function TypeWriter({words, cursorCol}: Props) {
  const [text, _] = useTypewriter({words: words, loop: true, delaySpeed: 2000,});
  return (
    <>
      <span className="mr1">{text}</span>
      <Cursor cursorColor={cursorCol}/>
    </>
  )
}

export default TypeWriter;