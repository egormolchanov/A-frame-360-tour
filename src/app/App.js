import 'aframe'
import 'aframe-rounded'

import React, { useState, useRef, useEffect } from 'react'
import Arrow from './components/Arrow'
import Info from './components/Info'
import Modal from './components/Modal'

import data from './data/data'

const App = () => {
  const [isOpenInfo, setOpenInfo] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [event, setEvent] = useState(data.room_1)
  const [isVrMode, setVrMode] = useState(false)

  const scenesRef = useRef(null)

  const eventHandler = event => {
    setEvent(data[event])
  }

  const openModal = textModal => {
    setTextModal(textModal)
  }

  useEffect(() => {
    setOpenInfo(!!textModal)
  }, [textModal])

  const getArrow = () => {
    return event.nextScense.map(e => {
      return (
        <Arrow position={e.position} rotation={e.rotation} next={e.next} eventHandler={eventHandler} key={e.position} />
      )
    })
  }

  const getInfo = () => {
    return event?.info?.map(e => {
      return (
        <Info position={e.position} rotation={e.rotation} openModal={openModal} text={e.textModal} key={e.position} />
      )
    })
  }

  useEffect(() => {
    isVrMode ? scenesRef?.current.enterVR() : scenesRef?.current.exitVR()
  }, [isVrMode])

  return (
    <a-scene ref={scenesRef} cursor='rayOrigin: mouse;' raycaster='objects: .clickable'>
      <a-light type='ambient' />

      <a-assets timeout='5000'>
        <img id='info' src='assets/img/info.png' />
        <img id='vr' src='assets/img/vr.png' />
        <img id='arrow' src='assets/img/arrow.svg' />
      </a-assets>

      {getInfo()}
      {getArrow()}

      <a-camera position='0 1 -1' rotation='0 0 0'>
        {isOpenInfo ? <Modal text={textModal} openModal={openModal} /> : <a-cursor />}

        <a-image
          class='clickable'
          onClick={() => setVrMode(!isVrMode)}
          src='#vr'
          position='-1.5 2.7 -4'
          rotation='0 0 0'
          width='1'
          height='1'
        />
      </a-camera>

      <a-sky position='0 1 -10' rotation='0 0 0' src={`assets/img/${event.nameScense}.jpg`} radius='50' />
    </a-scene>
  )
}

export default App
