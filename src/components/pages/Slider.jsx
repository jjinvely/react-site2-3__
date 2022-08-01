import React from 'react';
import SliderCont from '../includes/SliderCont';
import axios from "axios";


class Slider extends React.Component {
  state = {
    sliderInfo:[],
  };

  getSliderInfo = async () => {
    const {
      data: {
        data: { sliderInfo },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3__/main/src/assets/json/Slider.json"
    );
    
    this.setState({ sliderInfo });
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { sliderInfo } = this.state;
    return (
      <>
       
 
          <SliderCont sliderInfo={sliderInfo} />

     
      </>
    );
  }
}

export default Slider;

