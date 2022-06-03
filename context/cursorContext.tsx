import React, { createContext, FC, useState } from "react"

const defaultValue: CursorContext.Value = {
  image: {
    reset: () => null,
    set: () => '',
    value: null,
  },
  text: {
    reset: () => null,
    set: () => '',
    value: null,
  }
}

const CursorContext = createContext(defaultValue)

const CursorProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [image, setImage] = useState<CursorContext.Image>(null)
  const [text, setText] = useState<CursorContext.Text>(null)
  
  const handleText = (e: string) => setText(e)
  const handleImage = (e: string) => setImage(e)

  const resetText = () => setText(null)
  const resetImage = () => setImage(null)
  
  return (
    <CursorContext.Provider value={{
      image: {
        set: handleImage,
        reset: resetImage,
        value: image,
      },
      text: {
        set: handleText,
        reset: resetText,
        value: text,
      }
    }}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider;
export {CursorContext};