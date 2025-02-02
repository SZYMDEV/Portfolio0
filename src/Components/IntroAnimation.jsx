import React, { useState, useEffect } from "react";
import "../styles/IntroAnimation.css";

const IntroAnimation = () => {
  const messages = ["Hi", "Witam", "你好","Salut!","Ciao!", "Hallo!","Ahoj!","¡hola!","歓迎","God dag"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 200);

    const visibilityTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000); 

    return () => {
      clearInterval(messageInterval);
      clearTimeout(visibilityTimeout);
    };
  }, [messages.length]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="intro-animation">
      <h1>{messages[currentMessageIndex]}</h1>
    </div>
  );
};

export default IntroAnimation;
