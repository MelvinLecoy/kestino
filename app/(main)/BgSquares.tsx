type Props = {
    sqStyle: string,
};

function BgSquares({ sqStyle }: Props) {
  return (
    <>
      <div className={`${sqStyle} w200 animate-ping`}/>
      <div className={`${sqStyle} w300 opac30`}/>
      <div className={`${sqStyle} w500 opac70`}/>
      <div className={`${sqStyle} w650 opac20 animate-pulse border-[#F7AB0A]`}/>
      <div className={`${sqStyle} w800 opac60`}/>
    </>
  )
}

export default BgSquares;