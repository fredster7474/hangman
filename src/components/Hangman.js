import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Hangman.css'
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


class Hangman extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="Hangman">
      img src={'img0.jpg'}
      </div>
    )
  }

export default connect(mapStateToProps)(Hangman)
