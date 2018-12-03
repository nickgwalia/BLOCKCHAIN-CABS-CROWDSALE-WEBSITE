import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from './views/header/HeaderMain'
import StartScreen from './views/body/Home/StartScreen'
import RoadMapSection from './views/body/Home/RoadMap'
import Footer from './views/footer/footer'

export default class App extends PureComponent {
    render() {
      return (
        <div>
          <Header />
          <StartScreen tagLine="Ride Service And Social Transportation For London." />
          <RoadMapSection />
          <Footer />
        </div>
      )
    }
  }
  