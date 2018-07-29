import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from './components/Card'
import Input from './components/Input'
import Uploader from './components/Uploader'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import firebase from 'firebase'

const theme = createMuiTheme()

const styles = {
  container: {
    display: 'flex',
    margin: '0 auto',
    paddingTop: 50,
    paddingBottom: 50,
    justfiyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '1000px'
  },
  inputs: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50
  },
  list: {
    flex: 1
  },
  button: {
    marginRight: 20
  }
}
class App extends Component {
  state = {
    data: [],
    name: '',
    image: ''
  }
  componentWillMount = () => {
    const db = firebase.firestore()
    let data = []
    db.collection('Posts').get().then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        data.push(doc.data())
        // this.setState({ name: doc.data().Name, image: doc.data().Image })
        // console.log(`${doc.data().Name} => ${doc.data().Image}`)
        console.log('data', data)
      })
      this.setState({ data })
    })
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={styles.container}>
          {/* <div style={styles.inputs}>
            <Input />
            <Button variant='contained' color='primary' style={styles.button}>
              upload image
            </Button>
          </div> */}
          <Uploader />
          <div style={styles.list}>
            {this.state.data.map(post => {
              return <Card name={post.Name} image={post.Image} />
            })}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
