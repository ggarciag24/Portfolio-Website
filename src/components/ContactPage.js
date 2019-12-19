import React from 'react'
import { List, Divider } from 'semantic-ui-react'


class ContactPage extends React.Component {

  render(){
    return(
      <div>
      <h2> Contact Information</h2>
      <br></br>
      <List>
        <List.Item icon='users' content='Semantic UI' />
        <Divider />
        <List.Item icon='marker' content='Laurel, MD' />
        <Divider />
        <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
        <Divider />
        <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
      </List>
      </div>
    )
  }
}
export default ContactPage
