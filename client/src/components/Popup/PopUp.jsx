import React from 'react'
import './popup.css'
import templateText from './popup-texts';
import { useState } from 'react';

export default function PopUp(props) {
  const [className, setClassName] = useState('popup-container')
  return props.time === "start" ? (
    <div className={className}>
      <article className='popup'>
        <h3>{templateText.start.title}</h3>
        <section>
          {
            React.Children.toArray(
              templateText.start.par.map((p) => (<p>{p}</p>))
            )
          }
        </section>
        <button onClick={() => setClassName("hide-popup-component")}>{templateText.start.btnText}</button>
      </article>
    </div>
  )
    :
    (
      <div className='popup-container'>
        <article>
          <h3>{templateText.end.title}</h3>
          <section>
            {
              React.Children.toArray(
                templateText.end.par.map((p) => (<p>{p}</p>))
              )
            }
            <p>{props.result}</p>
          </section>
          <button>{templateText.end.btnText}</button>
        </article>
      </div>
    )
}
