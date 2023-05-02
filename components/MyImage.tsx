import Image, { StaticImageData } from "next/image";

type Props = {
    img: StaticImageData;
    alt: string;
    divStyle: string;
    priority?: boolean;
};

function MyImage({ img, alt, divStyle, priority=false }: Props) {
  return (
    <div className={`rela ${divStyle}`}>
      {priority ? <Image src={img} fill style={{objectFit:"cover"}} alt={alt} priority/>:
                  <Image src={img} fill style={{objectFit:"cover"}} alt={alt}/>}
    </div>
  )
}

export default MyImage;