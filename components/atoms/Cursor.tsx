import { useContext, useEffect, useRef, useState } from "react"
import styled, { css, keyframes, useTheme } from "styled-components"
import gsap from 'gsap';
import { CursorContext } from "context/cursorContext";
import { isNull } from 'lodash'

const rotateCircle = keyframes({
  'from': {
    transform: 'rotate(0deg)',
  },
  'to': {
    transform: 'rotate(360deg)',
  }
})

const Root = styled('div')<{isClickable: boolean}>(({theme}) => ({
  '.cursor-dot': {
    position: 'fixed',
    width: '2vw',
    height: '2vw',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    backgroundColor: '#fff',
    pointerEvents: 'none',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'difference',
  },
  '.cursor-circle_root': {
    position: 'fixed',
    width: '4vw',
    height: '4vw',
    transform: 'translate(-50%, -50%)',
    borderRadius: '60px',
    transition: 'top 0.1s, left 0.1s, width .4s ease-in-out, height .4s ease-in-out',
    zIndex: '1000',
    pointerEvents: 'none',
    fill: 'transparent',
    mixBlendMode: 'difference',
    '.cursor-circle': {
      fill: 'transparent',
      strokeDasharray: '1 15',
      strokeWidth: 3,
      strokeLinecap: 'round',
      transformOrigin: 'center',
      stroke: theme.colors.white.opacity[1],
    },
  }
}), css`
  .cursor-circle {
    animation: ${rotateCircle} 15s linear infinite
  }
`)

const Cursor = () => {
  const cursorCtx = useContext(CursorContext);
  const dotRef = useRef(null)
  const circleRef = useRef(null)
  
  const growCursor = () => {
    gsap.to(dotRef.current, {
      duration: .4,
      ease: "power2",
      css: {
        width: '3vw',
        height: '3vw'
      }
    })
  }
  const shrinkCursor = () => {
    gsap.to(dotRef.current, {
      duration: .4,
      ease: "power2",
      css: {
        width: '2vw',
        height: '2vw'
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
      duration: .4,
      css: {
        left: e.clientX,
        top: e.clientY
      }
    });
    gsap.to(circleRef.current, {
      duration: .5,
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
    // handle on hover link
    const growElements = Array.from(document.querySelectorAll("[data-cursor='grow']"));
    
    growElements.map(item => {
      item.addEventListener('mouseenter', function(){
        growCursor()
        hideCircle()
      })
      item.addEventListener('mouseleave', function(){
        shrinkCursor()
        showCircle()
      })
    })
  }, [])

  return (
    <Root className='cursor-root' isClickable={cursorCtx.text !== null}>
      <div ref={dotRef} className="cursor-dot" />
      <svg viewBox="0 0 60 60" ref={circleRef} className="cursor-circle_root">
        <circle id="cursor_circle" className="cursor-circle" r='30px' cx='50%' cy="50%" />
      </svg>
    </Root>
  )
}

export default Cursor;