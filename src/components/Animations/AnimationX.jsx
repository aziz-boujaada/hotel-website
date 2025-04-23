import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function AnimationX({ children }) {
  const {ref ,inView} = useInView({
    triggerOnce:true,
    threshold:0.5,
  })
    return (
      <motion.div
      ref={ref}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: inView?1 :0, x:inView?0 :-300 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }
  