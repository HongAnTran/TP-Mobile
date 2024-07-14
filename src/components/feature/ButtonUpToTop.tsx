"use client"
import { ArrowUpIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function ButtonUpToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen to scroll event to determine when to show the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect runs only once after component mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Button
        variant="outline"
        className=' rounded-full w-10 h-10 p-0 hover:-translate-y-1 transition-transform'
        onClick={scrollToTop}
      >
        <ArrowUpIcon />
      </Button>
    </div>
  );
};

