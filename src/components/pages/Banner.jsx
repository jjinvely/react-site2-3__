import React from 'react';
import BannerCont from '../includes/BannerCont';
import axios from "axios";

class Banner extends React.Component {
  state = {
    bannerInfo: []
    
  };

  getNews = async () => {
    const {
        data:{bannerInfo},
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3__/main/src/assets/json/Banner.json"
    );

    this.setState({bannerInfo})

  }

  componentDidMount() {
    this.getNews()
  }


  render() {
    const {bannerInfo} = this.state;

    return (
      <BannerCont bannerInfo={bannerInfo}/>
    )
  }
}


export default Banner;
