import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) {
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={false} whileInView={reduced?{}:{y:[14,0],opacity:[0.6,1]}} viewport={{once:true,amount:0.15}} transition={{duration:0.5}}>{children}</motion.div>;
}
