import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = ({ targetId }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const { offsetTop, scrollHeight, clientHeight } = targetElement;

        if (currentScrollY > offsetTop && currentScrollY < offsetTop + scrollHeight - clientHeight) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetId]);

  const scrollUp = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const { offsetTop } = targetElement;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const { offsetTop, scrollHeight, clientHeight } = targetElement;
      window.scrollTo({ top: offsetTop + scrollHeight - clientHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      {showScroll && (
        <>
          <button className="scroll-button scroll-up" onClick={scrollUp}>
            Scroll Up
          </button>
          <button className="scroll-button scroll-down" onClick={scrollDown}>
            Scroll Down
          </button>
        </>
      )}
    </>
  );
};

export default ScrollButton;
