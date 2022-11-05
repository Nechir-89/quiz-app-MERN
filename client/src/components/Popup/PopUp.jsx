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
      <div className={className}>
        <article className='popup'>
          <h3>{templateText.end.title}</h3>
          <section>
            {
              React.Children.toArray(
                templateText.end.par.map((p) => (<p>{p}</p>))
              )
            }
            <p>{props.result}</p>
          </section>
          <button
            onClick={() => window.location.reload(true)}
          // reload(false) method takes an optional parameter which by default is set to false. 
          // If set to true, the browser will do a complete page refresh from the server and 
          // not from the cached version of the page.
          >{templateText.end.btnText}</button>
        </article>
      </div>
    )
}
