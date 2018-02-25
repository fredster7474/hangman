import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Hangman.css'
import img from './img0'

class Hangman extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="Hangman">
      img src={'img0.jpg'}
      <div/>
    )
  }
}
//const mapStateToProps = ({ hangman }) => ({ hangman })
export default Hangman
