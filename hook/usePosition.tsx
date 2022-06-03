import { useEffect, useState } from "react"

const usePosition = () => {
  const [posY, setPosY] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosY(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [])
  
  return posY;
}

export default usePosition;