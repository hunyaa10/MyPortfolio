import { useEffect, useRef, useState } from "react";

const useObserver = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // 제목 애니메이션효과
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    // 클린업
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return { lineRef, titleRef, isInView };
};

export default useObserver;
