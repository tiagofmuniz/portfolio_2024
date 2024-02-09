import { useEffect, useState } from 'react';

const useSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  console.log(activeSection)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); 

    // Observe todas as seções com a classe "section"
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); 
  }, []);

  return { activeSection };
};

export default useSection;