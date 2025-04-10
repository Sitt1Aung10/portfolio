import React from 'react'

export function Art()  {
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
          <a style={{textDecoration:'underline'}} href="https://github.com/Sitt1Aung10/SisBurma">Go To Direct Github Link</a>
        </div>
        <div style={{
          display :'flex',
          gap : '50px'
        }}>
          <div>
          <img style={imgStyle} src='/images/art-showcase.png' />
          <img style={imgStyle} src='/images/art(2).png' />
          <img style={imgStyle} src='/images/art(3).png' />
          <img style={imgStyle} src='/images/art(4).png' />
          </div>
        </div>
      </div>
  )
}

