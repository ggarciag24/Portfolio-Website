import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

class AboutPage extends React.Component {

  render(){
    return(
      <div>
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
export default AboutPage
