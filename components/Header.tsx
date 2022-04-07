import React from 'react'

type HeaderProps = {
  style: React.CSSProperties
}

const Header = ({ style }: HeaderProps) => {
  return (
    <>
      <img className="img" src="/HEADER.svg" alt="Header" id="header" />
    </>
  )
}
export default Header
