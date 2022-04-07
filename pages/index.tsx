import React, { useEffect, useState } from 'react'
import Aron from '../components/Aron'
import FlipCard from '../components/FlipCard'
import Header from '../components/Header'
import Vaupel from '../components/Vaupel'

type MainPageProps = {}

const MainPage = () => {
  const [state, setState] = useState<number>(0)

  const moveUp = `translateY(-${state <= 10 ? state * 5 : 50}vh)`
  const moveDown = `translateY(${state <= 10 ? state * 5 : 50}vh)`
  const slide = `translateX(calc(${state <= 5 ? state * 10 : 50}vw - 12.5vw))`
  const roll = `rotateZ(${state <= 5 ? state * 72 : 360}deg)`
  const grow = `${state <= 5 ? state * 10 : 50}vh`
  const growText = `${state <= 5 ? state * 0.2 : 1}rem`
  const headerAppear = `translateY(${state <= 14 ? 0 : 11}vh)`
  const opacityIncrease = `${state <= 10 ? state / 10 : 1}`
  const opacityDecrease = `${state <= 10 ? 1 - state / 10 : 0}`
  const flip180 = 'rotateY(180deg)'
  const flip360 = 'rotateY(360deg)'

  const [flipState, setFlipState] = useState<string>(roll)

  useEffect(() => {
    window.addEventListener('wheel', scroll)
    window.addEventListener('wheel', flipPic)
    //window.addEventListener("wheel", flipOnHover);
    console.log(state)
    return () => {
      window.removeEventListener('wheel', scroll)
      window.removeEventListener('wheel', flipPic)
    }
  }, [state])

  function scroll(event: WheelEvent): void {
    if (state > 0 && event.deltaY < 0) {
      setState(state - 1)
    } else if (state < 20 && event.deltaY > 0) {
      setState(state + 1)
    }
  }

  function flipPic(event: WheelEvent): void {
    if (state >= 14) {
      setFlipState(flip180)
    }
    if (flipState === flip180 && state < 14) {
      setFlipState(flip360)
    }
    if (flipState === flip360 && state >= 10) {
      setFlipState(roll)
    }
  }

  const aronStyle = {
    transform: moveUp,
    opacity: opacityDecrease,
  }

  const vaupelStyle = {
    transform: moveDown,
    opacity: opacityDecrease,
  }

  const flipcardStyle = {
    transform: slide,
    width: grow,
    height: grow,
  }

  const flipcardInnerStyle = {
    transform: `${flipState}`,
    width: grow,
    height: grow,
  }

  const flipcardFrontStyle = {
    width: grow,
    height: grow,
  }

  const flipcardBackStyle = {
    width: grow,
    height: grow,
  }

  const flipcardPictureStyle = {
    width: grow,
    height: grow,
  }

  const flipcardTextStyle = {
    fontSize: growText,
  }

  const headerStyle = {
    transform: headerAppear,
    opacity: opacityIncrease,
  }

  return (
    <div className="wrapper-main bg-4x relative h-[100vh] w-[100vw] overflow-hidden">
      <Aron style={aronStyle} />
      <Vaupel style={vaupelStyle} />
      <Header style={headerStyle} />
      <FlipCard
        mouseenter={() =>
          state >= 14 && state <= 20 ? setFlipState(flip360) : null
        }
        mouseleave={() =>
          state >= 14 && flipState === flip360 ? setFlipState(flip180) : null
        }
        outer={flipcardStyle}
        inner={flipcardInnerStyle}
        front={flipcardFrontStyle}
        back={flipcardBackStyle}
        text={flipcardTextStyle}
        picture={flipcardPictureStyle}
      />
    </div>
  )
}

export default MainPage
