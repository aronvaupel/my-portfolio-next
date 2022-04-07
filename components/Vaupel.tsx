import React from 'react'

type VaupelProps = {
  style: React.CSSProperties
}

const Vaupel = ({ style }: VaupelProps) => {
  return (
    <div id="vaupel" className="image-container" style={style}>
      <img className="img" src="/VAUPEL.svg" alt="Vaupel" />
    </div>
  )
}
export default Vaupel
