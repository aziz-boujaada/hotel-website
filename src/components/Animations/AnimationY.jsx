import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function AnimationY({ children }) {
    const {ref ,inView} =useInView({
        triggerOnce:true,
        threshold:0.2,
    });
    return (
      <motion.div
      ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity:inView?1 :0, y:inView?0 :-100 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }