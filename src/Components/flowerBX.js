import React from 'react'

export function Flowerbx() {
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
       < a href="https://github.com/Sitt1Aung10/flowerbx">Go To Direct Github Link</a>
      </div>
      <div style={{
        display :'flex',
        gap : '50px'
      }}>
        <div>
        <img style={imgStyle} src='/images/flowerbx(1).png' />
        <img style={imgStyle} src='/images/flowerbx(2).png' />
        <img style={imgStyle} src='/images/flowerbx(3).png' />
        <img style={imgStyle} src='/images/flowerbx(4).png' />
        </div>
      </div>
    </div>
  )
}