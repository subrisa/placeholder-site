import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Index = ({ children }) => (
  <div style={{height: '100%'}}>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
      html {
        height: 100%;
      }
      body {
        margin: 0;
        background-image: url('/static/bg.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 100%;
      }
      #__next {
        height: 100%;
      }
    `}</style>
    { children }
  </div>
)

Index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Index
