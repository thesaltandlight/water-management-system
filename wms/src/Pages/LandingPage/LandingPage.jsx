import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//alternating text
const text = [
  'keeps constipation away',
  'keeps dehydration at bay',
  'keeps digestion in play',
  'keeps body toxins at bay',
  'keeps metabolism in full play',
  'keeps joints in a fluid ballet'
  
]

//alternating backgrounds
const backgrounds = [
  'bg-background1',
  'bg-background2',
  'bg-background3',
  'bg-background4',
  'bg-background5',
  'bg-background6',
]

function LandingPage() {
  const [currentText, setCurrentText] = useState(text[0])
  const [displayText, setDisplayText] = useState('')
  const [typing, setTyping] = useState(true)
  const [pausing, setPausing] = useState(false)
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0])
  const navigate = useNavigate();

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
          setCurrentBackground(backgrounds[currentIndex])
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
    <div className={`relative h-screen flex items-center justify-start overflow-hidden ${currentBackground}`} style={{backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', transition: 'background 0.5s ease-in-out'}}>

      <img src='/assets/logo.png' alt='Logo' className='absolute top-4 left-4 w-[170px]'/>

      <div className="flex flex-col items-start ml-10">
        <h1 className="text-[#1E1E1E] text-6xl mb-4 font-bold">A glass a day</h1>
        
        {/* displays alternating text */}
        <div style={{height: '72px'}}>
        <h1 className="text-[#165A9A] text-6xl font-bold"> {displayText}</h1>
        </div>
      </div>

      {/* arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className='cursor-pointer animate-bounce' onClick={() => navigate('/signUp')}>
          <img src='/assets/arrow.png' alt='arrow' className='h-12 w-auto'></img>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
