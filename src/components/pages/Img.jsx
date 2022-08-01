import React from 'react';
import ImgCont from '../includes/ImgCont';
import axios from "axios";

class Img extends React.Component {
  state = {
    ImgInfo: []
    
  };

  getNews = async () => {
    const {
        data:{ImgInfo},
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3__/main/src/assets/json/Img.json"
    );

    this.setState({ImgInfo})

  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {ImgInfo} = this.state;

    return (
      <ImgCont ImgInfo={ImgInfo}/>
    )
  }
}

export default Img
