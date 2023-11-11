import React from 'react'

const Arrow = props => {
  return (
    <a-image
      class='clickable'
      onClick={() => props.eventHandler(props.next)}
      src='#arrow'
      position={props.position}
      rotation={props.rotation}
      width='0.8'
      height='0.65'
      scale='1 1 1'
    />
  )
}

export default Arrow
