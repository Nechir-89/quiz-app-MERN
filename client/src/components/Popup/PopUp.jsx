import React from 'react'
import './popup.css'
import templateText from './popup-texts';

export default function PopUp(props) {
  return props.time === "start" ? (<div>PopUp</div>): (<></>)
}
