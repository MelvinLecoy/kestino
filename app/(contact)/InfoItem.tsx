import FramerMotion from "@/components/FramerMotion";
import R from "./responsive.tsx";

type Props = {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }>,
  info: string,
};

function InfoItem({ icon, info }: Props) {
  return (
    <FramerMotion wiv={true} transdur={6} vponce={true} styles="fic sbcx14">
      <div className={`text-mainOran ${R.iconhw} animate-pulse`}>{icon}</div>
      <p className={`tb6 ${R.ITtsize}`}>{info}</p>
    </FramerMotion>
  )
}

export default InfoItem;