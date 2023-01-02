import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RotateProps from "./RotateProps";
import styles from "./Rotate.module.scss";
import useRotateEffect from "./hooks/useRotateEffect";

const Rotate = (props: RotateProps) => {
  const { children, isEffectActive } = props;
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rotate = useRotateEffect(ref);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={styles.rotate_wrapper}
      ref={ref}
      style={{ rotate: rotate }}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;
