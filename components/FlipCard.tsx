import React from 'react'

type FlipCardProps = {
  outer: React.CSSProperties
  inner: React.CSSProperties
  front: React.CSSProperties
  back: React.CSSProperties
  text: React.CSSProperties
  picture: React.CSSProperties
  mouseenter: () => void
  mouseleave: () => void
}

const FlipCard = ({
  outer,
  inner,
  front,
  back,
  text,
  picture,
  mouseenter,
  mouseleave,
}: FlipCardProps) => {
  return (
    <div className="flip-card-wrapper">
      <div
        className="flip-card"
        id="flip-card"
        style={outer}
        onMouseEnter={mouseenter}
        onMouseLeave={mouseleave}
      >
        <div className="flip-card-inner" style={inner} id="flip-card-inner">
          <div className="flip-card-front" style={front} id="flip-card-front">
            <p id="flip-card-text" style={text}>
              #aron:hire &#123; <br />
              &nbsp;&nbsp;&nbsp; position: junior;
              <br />
              &nbsp;&nbsp;&nbsp; motivation: 100% solid #
              <span className="green">green</span>;<br />
              &nbsp;&nbsp;&nbsp; workflow-behavior: smooth;
              <br />
              &nbsp;&nbsp;&nbsp; border: none;
              <br />
              &nbsp;&nbsp;&nbsp; flex:100%; <br />
              &nbsp;&nbsp;&nbsp; style: cool; <br />
              &nbsp;&nbsp;&nbsp; team-align: true; <br />
              &nbsp;&nbsp;&nbsp; salary: calc(commitment*performance);
              <br />
              &nbsp;&nbsp;&nbsp; background: sales; <br />
              &nbsp;&nbsp;&nbsp; future: now !important <br />
              &#125;
            </p>
          </div>
          <div className="flip-card-back" style={back} id="flip-card-back">
            <img
              style={picture}
              id="profile-picture"
              src="foto_portfolio.webp"
              alt="a photo of me"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
