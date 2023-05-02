import TypeWriter from "@/components/TypeWriter";
import pfp from "../../public/img/ProfilePic/3.0.png";
import MyImage from "@/components/MyImage";
import MenuBtns from "./MenuBtns";
import BgSquares from "./BgSquares";
import FramerMotion from "@/components/FramerMotion";
import MenuSlider from "./MenuSlider";

const S = {
  mobileBtn: "b1 brounded border-mainOran/40 transition-all\
              text-mainOran/40 tupper tracking-wide t12 px24 py8 w100p",
  tabletBtn: "b1 brounded border-mainOran/40 transition-all\
              text-mainOran/40 tupper tracking-wider t12 px26 py7 w130",
  bgSquare: "abso ar1w1h max-[1024px]:mb20 b1 border-[#333333] penone",
};

function Main() {
  const traits: string[] = ["Hi from Kestino!", "AvidSelfLearner.py", "<FullStackDev />", "ProudRustacean", "Blockchain.sol"];
  const animation = {scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"]};
  return (
    <section id='main' className='snaps hs rela fjcic fc z20'>
      <MyImage img={pfp} alt="pfp" priority={true} divStyle="w140 640:w165 ar1w1h brounded8 ofh mt135 640:mt125 min-[1025px]:mt85"/>
      <h1 className="tupper text-gray-500 tracking-[0.2em] 640:tracking-[0.3em] t20 640:t23 tc mt16 z10">Software Engineer</h1>
      <h2 className="t17 640:t21 tracking-wider mt4 z10"><TypeWriter words={traits} cursorCol="#F7AB0A"/></h2>
      <MenuBtns divStyle="640:hidden mt18 sbcy14" btnStyle={S.mobileBtn} col={true}/>  {/* Mobile btn col for <640 */}
      <MenuBtns divStyle="max-[639px]:hidden mt28 sbcx30 z10 min-[1025px]:hidden" btnStyle={S.tabletBtn} col={false}/>  {/* Tablet btn row for 640-1024 */}
      <FramerMotion animate={animation} transdur={2.5} styles="max-[639px]:hidden abso fjcic penone"><BgSquares sqStyle={S.bgSquare}/></FramerMotion>  {/* BgSquares for >640 */}
      <MenuSlider visibility="max-[1024px]:hidden"/>  {/* ColorSlider for >1024 */}
    </section>
  )
}

export default Main;