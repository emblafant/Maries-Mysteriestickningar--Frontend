import React, { useState, useEffect } from 'react';

import { RxChevronUp } from "react-icons/rx";

const ToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    });
}, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <button id="scrollToTopBtn" onClick={handleScroll} className={!showBtn ? "hidden" : ""}>
      <RxChevronUp/>
    </button>
  )
}

export default ToTopBtn;