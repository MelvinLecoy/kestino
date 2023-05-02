import S from "./styles.module.css";

type Props = {
  title: string;
}

const R = {
  top: "top-[55px] 640:top-[60px] 768:top-[76px]",
  tsize: "t18 640:t22 768:t25 1024:t30",
}

function SpreadEffect({ title }: Props) {
  return (
    <div className={`abso ${R.top} sbcx20 tupper text-gray-500 ${R.tsize} ${S.title}`}>
      {title.split("").map((char, idx) => <p key={idx} className={`ilb ${S.letter}`}>{char}</p>)}
    </div>
  )
}

export default SpreadEffect;