import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from './components/Card'
import Input from './components/Input'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

const styles = {
  container: {
    display: 'flex',
    width: '1000px',
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
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={styles.container}>
          <div style={styles.inputs}>
            <Button variant='contained' color='primary' style={styles.button}>
              image upload
            </Button>
            <Input />
          </div>
          <div style={styles.list}>
            <Card />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
