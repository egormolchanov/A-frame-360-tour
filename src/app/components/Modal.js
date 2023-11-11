import React from 'react'

const Modal = props => {
  return (
    <>
      <a-rounded
        position='-0.8 -0.3 -1.5'
        width='1.5'
        height='0.5'
        color='#fff'
        radius='0.07'
        onClick={() => props.openModal()}
        class='clickable'>
        <a-text
          align='left'
          position='0.1 0.3 0.007'
          width='0.7'
          wrap-count='40'
          scale='2 2 1'
          value={props.text}
          font='assets/fonts/Regular.fnt'
          color='black'
        />
      </a-rounded>
    </>
  )
}

export default Modal
