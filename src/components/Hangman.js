import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Hangman.css'
import {connect} from 'react-redux'
import img0 from '../images/img0.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img10.jpg'
import {wrongGuesses} from '../functions'


class Hangman extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired
  }

  render() {
    const images = [
      img0,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
    ]

    const {word, guesses} = this.props
    		return (
    			<img alt='Hangman' src={images[wrongGuesses(word, guesses)]} />
    		)
      }
}


const mapStateToProps = (state) => {
    return {
    word: state.word,
    guesses: state.guesses
  }
}
export default connect(mapStateToProps)(Hangman)
