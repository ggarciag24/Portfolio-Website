import React from 'react'
import { Container, Divider, Image } from 'semantic-ui-react'


class MainPage extends React.Component {

  render(){
    return(
      <div>
      <h1>German Garcia-Gonzalez</h1>
      <Image
        src='../public/logo192.png'
        as='a'
        size='medium'
        href='http://google.com'
        target='_blank'
      />
      <br></br><br></br>
      <Container textAlign='justified'>
      <br></br>
      <b>About Me</b>
      <Divider />
      <p> This part of the page will contain a description about me and etc ...</p>
      </Container>
      </div>
    )
  }
}
export default MainPage
