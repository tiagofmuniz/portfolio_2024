import React, { useEffect, useRef } from 'react';
import { useSectionContext } from './useSectionContext';

const SectionObserver = ({ sectionId, children }) => {
  const sectionRef = useRef(null);
  const { setSection } = useSectionContext();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(sectionId);
            window.history.pushState(null, null, `${origin}/#${sectionId}`); //altera a url sem navegar
          }
        });
      },
      { threshold: .8 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionId]);

  return <div ref={sectionRef}>{children}</div>;
};

export default SectionObserver;
