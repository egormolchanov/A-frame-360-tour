import React from 'react'

const Info = props => {
  return (
    <a-image
      class='clickable'
      onClick={() => props.openModal(props.text)}
      src='#info'
      position={props.position}
      rotation={props.rotation}
      width='0.75'
      height='0.5'
    />
  )
}

export default Info
