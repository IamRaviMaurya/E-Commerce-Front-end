import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive offer on your mail</h1>
      <p>Subscribe to our news letter and stay daily update</p>
      <div>
        <input type="email"  placeholder='Your email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
