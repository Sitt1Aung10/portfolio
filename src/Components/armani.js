import React from 'react'

export function Armani() {
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
        <a style={{textDecoration : 'underline'}} href="https://github.com/Sitt1Aung10/Armani-Exchange">Go To Direct GitHub Link</a>
      </div>
      <div style={{
        display :'flex',
        gap : '50px'
      }}>
       
        <div>
        <img style={imgStyle} src='/images/armani-showcase.png' />
        <img style={imgStyle} src='/images/armani1.png' />
        <img style={imgStyle} src='/images/armani2.png' />
        <img style={imgStyle} src='/images/armani3.png' />
        <img style={imgStyle} src='/images/armani4.png' />
        </div>
      </div>
    </div>
  )
}

