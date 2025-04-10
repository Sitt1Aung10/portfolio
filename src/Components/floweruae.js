import React from 'react'

export function Floweruae() {
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
      <a style={{textDecoration:'underline'}} href="https://github.com/Sitt1Aung10/FlowerUAE">Go To Direct Github Link</a>
      </div>
      <div style={{
        display :'flex',
        gap : '50px'
      }}>
        <div>
        <img style={imgStyle} src='/images/uae1.png' />
        <img style={imgStyle} src='/images/uae2.png' />
        <img style={imgStyle} src='/images/uae3.png' />
        <img style={imgStyle} src='/images/uae4.png' />
        <img style={imgStyle} src='/images/uae5.png' />
        </div>
      </div>
    </div>
  )
}
