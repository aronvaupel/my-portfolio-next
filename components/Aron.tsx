import React from 'react'

type AronProps = {
  style: React.CSSProperties
}

const Aron = ({ style }: AronProps) => {
  return (
    <div id="aron" className="image-container" style={style}>
      <img className="img" src="/ARON.svg" alt="Aron" />
    </div>
  )
}
export default Aron
