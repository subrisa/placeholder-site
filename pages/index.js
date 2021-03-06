import React from 'react'
import Router from 'next/router'
import Body from '~/components/base/Body'
import Logo from '~/components/base/Logo'

const logoStyle = {
  height: 100,
  width: 100,
  position: 'fixed',
  top: 20,
  left: 20
}

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: 32,
  height: '100%'
}

const textStyle = {
  textAlign: 'center',
  width: '100%',
  padding: 40,
  backgroundColor: 'rgba(0,0,0,0.4)'
}

const Index = () => (
  <Body>
    <Logo style={logoStyle} color='white' />
    <div style={wrapperStyle}>
      <div style={textStyle}>Estamos enrolando el sitio</div>
    </div>
  </Body>
)

Index.getInitialProps = ({ req, res }) => {
  console.log(req.headers)
  if (res && req.headers.host === 'www.subrisa.com') {
    res.writeHead(302, {
      Location: 'https://subrisa.com'
    })
    res.end()
    res.finished = true
  }
  return {}
}

export default Index
