import React from 'react'

export function Zaycho () {
  const imgStyle = {
    width: 'calc(100% - 15%)',
    border : '1px solid #fff',
    marginTop : '50px'
  }
  return (
    <div style={{
      marginTop: '100px',
      color: '#fff'
    }}>
      <div id='about_pj'>
       < a href="https://github.com/Sitt1Aung10/zaycho">Go To Direct Github Link</a>
      </div>
      <div style={{
        display :'flex',
        gap : '50px'
      }}>
        <div>
        <img style={imgStyle} src='/images/zaycho(1).png' />
        <img style={imgStyle} src='/images/zaycho6 (2).jpg' />
        <img style={imgStyle} src='/images/zaycho6 (3).jpg' />
        <img style={imgStyle} src='/images/zaycho6 (4).jpg' />
        <img style={imgStyle} src='/images/zaycho6 (5).jpg' />
        <img style={imgStyle} src='/images/zaycho6 (6).jpg' />
        </div>
      </div>
    </div>
  )
}
