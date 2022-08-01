import React from 'react';
import ReviewCont from '../includes/ReviewCont';
import axios from "axios";


class Review extends React.Component {
  state = {
    ReviewTitle: []
    
  };

  getNews = async () => {
    const {
        data:{ReviewTitle},
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3__/main/src/assets/json/Banner.json"
    );

    this.setState({ReviewTitle})

  }

  componentDidMount() {
    this.getNews()
  }


  render() {
    const {ReviewTitle} = this.state;

    return (
      <ReviewCont ReviewTitle={ReviewTitle}/>
    )
  }
}


export default Review;