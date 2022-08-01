import React from 'react';
import CardCont from '../includes/CardCont'
import axios from "axios";


class Card extends React.Component {
  state = {
    CardInfo: []
    
  };

  getNews = async () => {
    const {
        data:{data:{CardInfo}},
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3__/main/src/assets/json/Card.json"
    );

    this.setState({CardInfo})

  }

  componentDidMount() {
    this.getNews()
  }


  render() {
    const {CardInfo} = this.state;

    return (
      <CardCont CardInfo={CardInfo}/>
    )
  }
}



export default Card;
