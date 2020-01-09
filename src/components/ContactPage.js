import React from 'react'
import { List, Divider } from 'semantic-ui-react'


class ContactPage extends React.Component {

  render(){
    return(
      <div>
      <h2> Contact Information</h2>
      <Divider />
      <br></br>
      <List>
        <List.Item icon='users' content='German Garcia-Gonzalez' />
        <Divider />
        <List.Item icon='marker' content='Laurel, MD' />
        <Divider />
        <List.Item icon='mail' content={<a href='mailto:ggarciag.business@outlook.com'>ggarciag.business@outlook.com</a>} />
        <Divider />
        <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'> Linked in goes here</a>} />
      </List>
      </div>
    )
  }
}
export default ContactPage
