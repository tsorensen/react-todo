'use strict'

import React from 'react'

class ToggleButton extends React.Component {

  render() {
    let { label, onClick, active, styles } = this.props

    styles = Object.assign({
      backgroundColor: active ? 'white' : 'gray'
    }, styles)

    return (
      <button style={styles} onClick={onClick}>{label}</button>
    )
  }

}

export default ToggleButton
