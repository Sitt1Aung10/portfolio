import React from 'react'

export function Gucci () {
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
            <a style={{textDecoration : 'underline'}} href="https://github.com/Sitt1Aung10/Gucci">Go To Direct Github Link</a>
          </div>
          <div style={{
            display :'flex',
            gap : '50px'
          }}>
            <div>
            <img style={imgStyle} src='/images/gucci1.png' />
            <img style={imgStyle} src='/images/gucci2.png' />
            <img style={imgStyle} src='/images/gucci3.png' />
            <img style={imgStyle} src='/images/gucci4.png' />
            <img style={imgStyle} src='/images/gucci5.png' />
            <img style={imgStyle} src='/images/gucci6.png' />
            </div>
          </div>
        </div>
  )
}

