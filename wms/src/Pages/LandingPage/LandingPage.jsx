import {useState, useEffect} from 'react';

const text = [
  'keeps constipation away',
  'keeps dehydration at bay',
  'keeps digestion in play',
  'keeps joints in a fluid ballet',
  'keeps body toxins at bay',
  'keeps metabolism in full play'
]

function LandingPage() {
  const [currentText, setCurrentText] = useState(text[0])
  const [displayText, setDisplayText] = useState('')
  const [typing, setTyping] = useState(true)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    let typingTimeout;
    let clearingTimeout;
    let pauseTimeout;
    let currentIndex = 0;

    if(typing){
      typingTimeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
        if(displayText.length === currentText.length-1){
          setTyping(false);
          setPausing(true);
        }
      }, 25)
    } else if (pausing){
      pauseTimeout = setTimeout(() => {
        setPausing(false)
      }, 1000)
    } else{
      clearingTimeout = setTimeout(() => {
        if(displayText.length > 0){
          setDisplayText(displayText.slice(0, -1))
        } else {
          currentIndex = (text.indexOf(currentText) + 1) % text.length;
          setCurrentText(text[currentIndex]);
          setTyping(true)
        }
      }, 20)
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(clearingTimeout);
      clearTimeout(pauseTimeout)
    }
  }, [displayText, typing, pausing, currentText])

  return (
    <div className="relative bg-landing-page bg-cover bg-center h-screen flex items-center justify-start overflow-hidden" style={{backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>

      <img src='/assets/logo.png' alt='Logo' className='absolute top-4 left-4 w-[200px]'/>

      <div className="flex flex-col items-start ml-10">
        <h1 className="text-black text-6xl mb-4 font-bold">A glass a day</h1>
        <h1 className="text-[#72B8EF] text-6xl font-bold">{displayText}</h1>
      </div>

      <img src='/assets/water.png' alt='Glass of water' className='absolute top-[300px] right-10 transform -translate-y-1/2 w-[650px]'/>

      <div className="absolute bottom-20 left-10 flex gap-7">
        <button className="bg-[#1499D2] text-white text-xl font-bold py-4 px-12 rounded-2xl shadow-lg hover:bg-[#24619D] transition duration-300">
          Dive In
        </button>
        <button className="bg-[#24619D] text-white text-xl font-bold py-4 px-12 rounded-2xl shadow-lg hover:bg-[#1499D2] transition duration-300">
          Sign Up
        </button>
      </div>

    </div>
  );
}

export default LandingPage;
