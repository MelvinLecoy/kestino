import FramerMotion from "@/components/FramerMotion";
import { SocialIcon } from "react-social-icons";
import { HiOutlineHome } from 'react-icons/hi';

const R = {
  pad: "p2 640:p10 768:p20",
};

function NavHeader() {
  const Github: string = "https://github.com/MelvinLecoy";
  const Linkedin: string = "https://www.linkedin.com/in/kestinoktlau/";
  const Spotify: string = "https://open.spotify.com/user/uncledrewchrislau";
  return (
    <header className={`fixed l0 r16 ${R.pad} maxw1050 mxauto f z50`}>
      <FramerMotion x={[-500, 0]} scale={[0.5, 1]} transdur={1.5} vponce={true}>
        <SocialIcon url={Github} target="_blank" fgColor="gray" bgColor="transparent" />
        <SocialIcon url={Linkedin} target="_blank" fgColor="gray" bgColor="transparent" />
        <SocialIcon url={Spotify} target="_blank" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="email" url="/#contact" fgColor="gray" bgColor="transparent" />
      </FramerMotion>
      <FramerMotion x={[500, 0]} scale={[0.5, 1]} transdur={1.5} vponce={true} styles="mlauto">
        <a href="/#main" className="text-icon w50 h50 fjcic"><HiOutlineHome className="w30 h30"/></a>
      </FramerMotion>
    </header>
  )
}

export default NavHeader;