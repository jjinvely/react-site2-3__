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
      ""
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

