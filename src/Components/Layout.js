import React from 'react'
import Header from './Header'

export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  )
}
