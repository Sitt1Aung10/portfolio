import React from 'react'

export function Sisburma()  {
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
          <img style={imgStyle} src='/images/sisburma1.png' />
          <img style={imgStyle} src='/images/sisburma2.png' />
          <img style={imgStyle} src='/images/sisburma3.png' />
          <img style={imgStyle} src='/images/sisburma4.png' />
          <img style={imgStyle} src='/images/sisburma5.png' />
          <img style={imgStyle} src='/images/sisburma6.png' />
          </div>
        </div>
      </div>
  )
}

