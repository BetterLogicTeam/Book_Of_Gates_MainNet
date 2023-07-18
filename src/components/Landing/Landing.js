import { CssBaseline } from '@mui/material'
import React from 'react'
import NewCompFour from '../new-comp-four/new-comp-four'
import New from '../new/new'
import NewCompThree from '../new-comp-three/new-comp-three'
import NewComp from '../new-comp/new-comp'
import Rodmaap from '../RoadMap/Rodmaap'
import Secone from '../secone/Secone'
import Secthree from '../secthree/Secthree'
import ContinousSlider from '../SliderImages/ContinousSlider'


function Landing() {
  return (
    <div>
        <CssBaseline />
      {/* <Header /> */}
      <Secone />
      <Secthree />
      <div className="ok">
        <NewComp />
      </div>

      <div className="new">
        <New />
      </div>

      <div className="ok">
        <NewCompThree />
      </div>

      <div className="newbg">
        <NewCompFour />
      </div>

      <ContinousSlider />

      <div className="MainApp">
        <Rodmaap />
      </div>
    </div>
  )
}

export default Landing