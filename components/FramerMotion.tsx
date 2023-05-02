"use client";
import { motion } from "framer-motion";

interface Animation {
  scale?: number[];
  opacity?: number[];
  borderRadius?: string[];
}

type Props = {
  children: React.ReactNode;
  animate?: Animation | null;

  x?: [number, number];
  opac?: [number, number];
  scale?: [number, number];

  wiv?: boolean;
  transdur?: number;
  vponce?: boolean;
  styles?: string;
};

function FramerMotion({ children, animate=null, x, opac=[0, 1], scale, wiv=false, transdur, vponce, styles }: Props) {
  const init = {x: x?.[0], opacity: opac[0], scale: scale?.[0]},
        end = {x: x?.[1], opacity: opac[1], scale: scale?.[1]}
  return (
    animate ?
    (<motion.div initial={init} animate={animate} transition={{duration: transdur}} viewport={{once: vponce}} className={styles}>
      {children}
    </motion.div>)
    :
    wiv ?
    (<motion.div initial={init} whileInView={end} transition={{duration: transdur}} viewport={{once: vponce}} className={styles}>
      {children}
    </motion.div>)
    :
    (<motion.div initial={init} animate={end} transition={{duration: transdur}} viewport={{once: vponce}} className={styles}>
      {children}
    </motion.div>)
  );
}

export default FramerMotion;