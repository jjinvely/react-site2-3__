import TextCont from '../includes/TextCont'
import React from 'react';
import axios from "axios";


class Text extends React.Component {
  state = {
    TextInfo: [],
    TextInfor: []
  };

  getNews = async () => {
    const {
        data:{TextInfo}, data:{TextInfor}
    } = await axios.get(
      "https://raw.githubusercontent.com/jjinvely/react-site2-3_/main/src/assets/json/Text.json"
    );
    //console.log(data.Story);
    this.setState({TextInfo})
    this.setState({TextInfor})
  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {TextInfo} = this.state;
    const {TextInfor} = this.state;
    return (
      <Text TextInfo={TextInfo} TextInfor={TextInfor}/>
    )
  }
}

export default Text
