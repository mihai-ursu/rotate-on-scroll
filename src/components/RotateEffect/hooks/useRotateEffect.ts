import { useScroll, useSpring, useTransform } from "framer-motion";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { RefObject, useState } from "react";

const useParallaxEffect = (ref: RefObject<HTMLElement>, degrees: number) => {
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  const initial = Math.max(elementTop - clientHeight, 0);
  const final = elementTop + elementHeight;

  const rotateRange = useTransform(scrollY, [initial, final], [0, degrees]);
  const rotate = useSpring(rotateRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (!element) return;
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY
      );
      setElementHeight(element.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return rotate;
};

export default useParallaxEffect;
