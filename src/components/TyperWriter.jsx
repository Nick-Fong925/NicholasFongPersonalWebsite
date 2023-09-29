import { useState, useEffect } from 'react';

const TypewriterText = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArray = [
    'Hi, my name is,',
    'Nicholas Fong.',
    'I aim to address business needs with technology.',
  ];

  useEffect(() => {
    if (currentIndex < textArray.length) {
      const text = textArray[currentIndex];
      const delay = currentIndex === 0 ? 0 : currentIndex === 1 ? 1000 : 2000;
      const setTextFunction =
        currentIndex === 0 ? setLine1 : currentIndex === 1 ? setLine2 : setLine3;

      let charIndex = 0;
      setTextFunction(text.charAt(0)); // Initialize with the first character

      const intervalId = setInterval(() => {
        charIndex++;
        if (charIndex < text.length) {
          setTextFunction((prevText) => prevText + text.charAt(charIndex));
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
          }, 1000); // Pause before moving to the next line
        }
      }, 70); // Typing speed

      return () => clearInterval(intervalId);
    }
  }, [currentIndex]);

  return (
    <div className="md:ml-10">
      <h2 className="mb-5 font-semibold text-xl">{line1}</h2>
      <p className="text-5xl mb-5 font-bold">{line2}</p>
      <p className="text-3xl font-bold text-violet-500">
        {line3}
      </p>
    </div>
  );
};

export default TypewriterText;
