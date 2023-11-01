import React, { use, useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";



interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const variants = {
  visible: { opacity: 1, x: 0, transition: {duration: 1 } }, 
  hidden: {opacity: 0, x: 100}
}

export const Reveal = ({children, width = 'fit-content'}: Props) => {
  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref, {once: true})
  useEffect(() => {
    if(inView) {
      controls.start("visible")
    }
  }, [controls, inView]);
  return (
   <motion.div 
   ref={ref}
   animate={controls}
   initial="hidden"
   variants={variants}
   style={{width, position: 'relative', overflow: "hidden"}}>
    {children}
   </motion.div>
  );
};