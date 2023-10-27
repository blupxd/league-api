import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className='z-index-100 fixed right-12 bottom-12'
      id="scrollToTopButton"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FontAwesomeIcon className='bg-blue-600 p-3 rounded-full text-3xl text-gray-200' icon={faAnglesUp} />
    </button>
  );
}

export default ScrollToTopButton;