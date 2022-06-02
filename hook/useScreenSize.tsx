import { useEffect, useState } from "react"

type ScreenSize = {
  width: number;
  height: number;
}

const defaultValue = {
  width: 0,
  height: 0
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(defaultValue);

  useEffect(() => {
    function updateSize(){
      setScreenSize({width: screen.width, height: screen.height})
    }
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  
  return screenSize;
}

export default useScreenSize;