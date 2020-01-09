import React from 'react'
import { Image, Item, Divider, Card, Icon, Grid } from 'semantic-ui-react'


class LibraryPage extends React.Component {

  render(){
    return(
      <div>
      <h2> Library</h2>
      <Divider />
      <h3> Applications </h3>
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={require('../appimgs/communitylinkimg.png')} />

          <Item.Content>
            <Item.Header as='a'>Community-Link</Item.Header>
            <Item.Meta> I created this app so that people could manage their community service activity in a more efficient and visual way. The Community-Link Application allows for login/sign-up and consists of three main pages. One of the three is the Host page which contains a form that would allow you to host/post an event. The second page is the volunteer page which allows you to sign-up to volunteer at some of the listed events. Lastly the main feature is the profile page. The profile page consists of an activity log and a calendar. As a user hosts events or volunteers for an event their activity log will update and so will their calendar. </Item.Meta>
            <Item.Description>

            </Item.Description>
            <Item.Extra>Backend: Rails | Frontend: React</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='small' src='https://www.fillmurray.com/200/300' />

          <Item.Content>
            <Item.Header as='a'>Joust</Item.Header>
            <Item.Meta>The Joust game allows a user to select a weapon, armor, and a horse and battle against a randomly generated computer player to see who wins.</Item.Meta>
            <Item.Description>

            </Item.Description>
            <Item.Extra>Backend: Rails | Frontend: React</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Divider />
      <h3> Blogs </h3>
      <br></br>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image src={require('../blogimgs/firstblog.png')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>What are Enumerables ?</Card.Header>
                <Card.Meta>
                  <span className='date'>Published on Aug 15, 2019</span>
                </Card.Meta>
                <Card.Description>
                  This blog explains what enumerables are in a basic and easy to understand way.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item content={<a href='https://medium.com/@ggermanji24/what-are-enumerables-546e8d2509cf'><Icon name='linkify' /> Blog Link</a>} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={require('../blogimgs/secondblog.png')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Ruby on Rails Forms: #collection_select</Card.Header>
                <Card.Meta>
                  <span className='date'>Published on Sep 6, 2019</span>
                </Card.Meta>
                <Card.Description>
                  This blog explains how collection_select works and when it can be used.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item content={<a href='https://medium.com/@ggermanji24/ruby-on-rails-forms-collection-select-7ba92ce09a61'><Icon name='linkify' /> Blog Link</a>} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={require('../blogimgs/thirdblog.png')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Hand & Wrist Exercises for keyboard users</Card.Header>
                <Card.Meta>
                  <span className='date'>Published on Sep 27, 2019 </span>
                </Card.Meta>
                <Card.Description>
                  Here are some helpful exrcises for all day computer users.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item content={<a href='https://medium.com/@ggermanji24/hand-wrist-exercises-for-keyboard-users-e4d353dc20ec'><Icon name='linkify' /> Blog Link</a>} />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image src={require('../blogimgs/fourthblog.png')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Class components vs Functional components</Card.Header>
                <Card.Meta>
                  <span className='date'>Published on Oct 10, 2019 </span>
                </Card.Meta>
                <Card.Description>
                  This blog explains the similarities and differences between functional and class components.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item content={<a href='https://medium.com/@ggermanji24/class-components-vs-functional-components-cd37f9d0ca66'><Icon name='linkify' /> Blog Link</a>} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={require('../blogimgs/fifthblog.png')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>What problem React.Fragments solves and it’s syntax</Card.Header>
                <Card.Meta>
                  <span className='date'>Published on Oct 31, 2019 </span>
                </Card.Meta>
                <Card.Description>
                  This blog explains why and how React Fragments are useful and helpful.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Item content={<a href='https://medium.com/@ggermanji24/what-problem-react-fragments-solves-and-its-syntax-561fcc47d2ef'><Icon name='linkify' /> Blog Link</a>} />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}
export default LibraryPage
