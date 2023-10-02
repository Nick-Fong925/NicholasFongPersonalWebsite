import { useState, useEffect } from 'react';

const TypewriterText = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [showBlinkingI, setShowBlinkingI] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArray = [
    'Hi, my name is',
    'Nicholas Fong.',
    'Aspiring Software Engineer.',
  ];

  useEffect(() => {
    if (currentIndex < textArray.length) {
      const text = textArray[currentIndex];
    
      const setTextFunction =
        currentIndex === 0 ? setLine1 : currentIndex === 1 ? setLine2 : setLine3;

      let charIndex = 0;
      setTextFunction(' '.repeat(text.length)); // Initialize with spaces

      const intervalId = setInterval(() => {
        charIndex++;
        if (charIndex <= text.length) {
          setTextFunction((prevText) => {
            const newText = prevText.split('');
            newText[charIndex - 1] = text.charAt(charIndex - 1);
            return newText.join('');
          });
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
          }, 1000); // Pause before moving to the next line
        }
      }, 70); // Typing speed

      return () => clearInterval(intervalId);
    } else {
      // After the three lines are typed, show the blinking "I"
      setShowBlinkingI(true);
    }
  }, [currentIndex]);

  // Create a separate useEffect for the blinking "I"
  useEffect(() => {
    if (showBlinkingI) {
      const intervalId = setInterval(() => {
        // Toggle the "I" on and off
        setLine3((prevText) =>
          prevText.endsWith('I') ? prevText.slice(0, -1) : prevText + 'I'
        );
      }, 400); // Adjust the blinking speed as needed

      return () => clearInterval(intervalId);
    }
  }, [showBlinkingI]);

  return (
    <div className="md:ml-10">
    <h2 className="mb-5 font-semibold text-lg md:text-xl">{line1}</h2>
<p className="text-3xl mb-5 font-bold text-violet-800 md:text-5xl">{line2}</p>
<p className="text-2xl font-bold md:text-4xl w-full">
  {line3}
</p>
    </div>
  );
};

export default TypewriterText;
