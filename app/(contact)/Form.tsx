"use client";
import R from "./responsive.tsx";
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string,
  subject: string,
  message: string,
};

const C = {
  btn: "bg-mainOran text-black hover:text-white",
};

function Form() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = fData => {window.location.href = 
    `mailto:kestino@umich.edu?subject=${fData.subject}&body=Hi, this is ${fData.name}. Here is my message: ${fData.message}`;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`mbauto mxauto w80s ${R.maxW} ${R.sbcy}`}>
      <div className={`w100p f ${R.sbcx}`}>
        <input className="Cinputform w45p" type="text" placeholder="Name" {...register('name')} />
        <input className="Cinputform w55p" type="text" placeholder="Subject" {...register('subject')} />
      </div>
      <textarea className={`w100p ${R.msgH} Cinputform`} placeholder="Message" {...register('message')} />
      <button type="submit" className={`${C.btn} blk w100p brounded6 tb7 t18 ${R.btnH}`}>Send</button>
    </form>
  )
}

export default Form;