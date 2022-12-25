import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
  <HomeContainer className='HomeContainer'>
    <NoticeBarContainer className='NoticeBar' >
      <NoticeBarVersion textColor='#ddc852'> ATFE Early Access Program </NoticeBarVersion>
      <NoticeBarText textColor='white'> 
        is here! Be the first to experience Fifth Encore before it is released to the public. 
      </NoticeBarText>
    </NoticeBarContainer>
    <SignUpContainer>
      <SignUpText>Interested?</SignUpText>
      <SignUpText>Sign up for updates!</SignUpText>
    </SignUpContainer>
  </HomeContainer>
  )
}

const NoticeBarContainer = styled.div`
  display: flex; flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 35px;
  background-color: #141414;
`
const NoticeBarVersion = styled.a`
  all: unset;
  display: inline-block;
  color: ${props => props.textColor};
  font-size: 13px;
  margin-right: 3px;
  user-select: none;

  transition: 500ms;
  &:hover {
    text-decoration: underline solid;
  }
`

const NoticeBarText = styled.p`
  display: inline-block;
  color: ${props => props.textColor};
  font-size: 13px;
  user-select: none;
`

const HomeContainer = styled.div`
  height: 100%;
  background-color: #ffffff;
`

const SignUpContainer = styled.div`
  margin: 30px;
  padding-bottom: 40px;
  background-color: lightgray;
  justify-content:center;
  border-radius: 15px 50px 30px;
`

const SignUpText = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom: 10px;
`
class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ' '};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value:event.target.value});
  }
  handleSubmit(event) {
    alert(this.state.value + ' has been submitted');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="youremail@email.com" type="email" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Home;
