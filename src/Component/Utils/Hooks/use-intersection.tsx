import { useEffect, useState, useRef } from 'react';
interface objectOptions  {
  root:Element | null,
  threshold:number | number[],
  rootMargin:string
}
function useIntersection(options: objectOptions) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      options
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
}

export default useIntersection;
