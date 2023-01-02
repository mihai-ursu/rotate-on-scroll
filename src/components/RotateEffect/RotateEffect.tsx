import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RotateEffectProps from "./RotateEffectProps";
import styles from "./RotateEffect.module.scss";
import useRotateEffect from "./hooks/useRotateEffect";

const RotateEffect = (props: RotateEffectProps) => {
  const { children, isEffectActive, degrees } = props;
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rotate = useRotateEffect(ref, degrees);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={styles.rotate_wrapper}
      ref={ref}
      initial={{ rotate: 0 }}
      style={{ rotate: rotate }}
    >
      {children}
    </motion.div>
  );
};

export default RotateEffect;
