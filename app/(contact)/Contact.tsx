import SparklingText from "@/components/SparklingText";
import SpreadEffect from "@/components/SpreadEffect";
import InfoItem from "./InfoItem";
import Form from "./Form";
import contact from "../../public/assets/contactInfo.json";
import R from "./responsive.tsx";
import { MdPhonelinkRing } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';

function Contact() {
  return (
    <section id='contact' className='snaps hs rela fjeic fc z20'>
      <SpreadEffect title="Contact" />
      <div className={`abso ${R.top} bot0 w100p fc f ${R.gap}`}>
        <p className={`${R.tsize} tb6 tc mtauto px15`}>I&apos;ve got just what you want. <SparklingText text="HMU @"/></p>
        <div className={`sbcy5 w-max mxauto ${R.negmt}`}>
          <InfoItem icon={<MdPhonelinkRing className="w100p h100p" />} info={contact.phone} />
          <InfoItem icon={<HiOutlineMail className="w100p h100p" />} info={contact.email} />
          <InfoItem icon={<HiOutlineMapPin className="w100p h100p" />} info={contact.address} />
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact;