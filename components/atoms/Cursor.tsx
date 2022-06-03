import { useContext, useEffect, useRef, useState } from "react"
import styled, { useTheme } from "styled-components"
import gsap from 'gsap';
import { CursorContext } from "context/cursorContext";
// import { CursorContext } from "context/cursorContext";
// import IconCollection from "./IconCollection";
// import { CursorText } from "context/interface/cursor.interface";

const Root = styled('div')<{isClickable: boolean}>(({theme, isClickable}) => `
  .Cursor-dot {
    position: fixed;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #fff;
    pointer-events: none;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: difference;
  }
  .Cursor-circle_root {
    position: fixed;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    border-radius: 60px;
    transition: top 0.1s, left 0.1s, width .4s ease-in-out, height .4s ease-in-out;
    z-index: 1000;
    pointer-events: none;
    .Cursor-circle {
      mix-blend-mode: difference;
      fill: transparent;
      stroke-dasharray: 1 15;
      stroke-width: 3;
      stroke-linecap: round;
      transform-origin: center;
      stroke: ${theme.colors.white.opacity[1]};
      animation: circle-rotate 15s linear infinite;
    }
  }
  .Cursor-text {
    position: fixed;
    width: 60px;
    height: 60px;
    color: red;
    transform: translate(-50%, -50%);
    transition: top 0.1s, left 0.1s, width .4s ease-in-out, height .4s ease-in-out;
    z-index: 1000;
    pointer-events: none;
  }
  @keyframes circle-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`)

const Cursor = () => {
  const cursorCtx = useContext(CursorContext);
  const dotRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)
  
  const growCursor = () => {
    gsap.to(dotRef.current, {
      duration: .1,
      ease: "power2",
      css: {
        width: 30,
        height: 30
      }
    })
  }
  const shrinkCursor = () => {
    gsap.to(dotRef.current, {
      duration: .1,
      ease: "power2",
      css: {
        width: 20,
        height: 20
      }
    })
  }
  const hideCircle = () => {
    gsap.to(circleRef.current, {
      duration: .4,
      ease: "power2",
      css: {
        transform: 'translate(-50%, -50%) scale(1.5)',
        opacity: 0
      }
    })
  }
  const showCircle = () => {
    gsap.to(circleRef.current, {
      duration: .4,
      ease: "power2",
      css: {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1
      }
    })
  }
  
  const handleMouseMove = (e: MouseEvent) => {
    gsap.to(dotRef.current, {
      duration: 1,
      css: {
        left: e.clientX,
        top: e.clientY
      }
    });
    gsap.to(circleRef.current, {
      duration: 1,
      css: {
        left: e.clientX,
        top: e.clientY
      }
    });
    gsap.to(textRef.current, {
      duration: 1,
      css: {
        left: e.clientX,
        top: e.clientY
      }
    });
  }

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => growCursor()
    const handlePointerUp = (e: MouseEvent) => shrinkCursor()
    // handle movement
    window.addEventListener('pointermove', handleMouseMove)
    // handle pointer shadow
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
  }, [])

  useEffect(() => {
    if (cursorCtx.text !== null) {
      hideCircle()
      growCursor()
    } else {
      showCircle()
      shrinkCursor()
    }
  }, [cursorCtx.text])

  return (
    <Root className='Cursor-root' isClickable={cursorCtx.text !== null}>
      <div ref={dotRef} className="Cursor-dot" />
      <svg viewBox="0 0 60 60" ref={circleRef} id={'Cursor-circle'} className="Cursor-circle_root">
        <circle id="Cursor_circle" className="Cursor-circle" r='30px' cx='50%' cy="50%" />
      </svg>
      {/* <div ref={textRef} className="Cursor-text">
        {cursorCtx.text}
      </div> */}
    </Root>
  )
}

export default Cursor;