import React, { Component } from 'react'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'
// import Input from '../components/Input'
// import Button from '@material-ui/core/Button'

class ProfilePage extends Component {
  state = {
    username: '',
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: ''
  }
  handleChangeUsername = event =>
    this.setState({ username: event.target.value })
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    const db = firebase.firestore()
    this.setState({ avatar: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url =>
        db
          .collection('Posts')
          .add({
            Name: this.state.username,
            Image: url
          })
          .then(() => {
            console.log('Document successfully written!')
            this.setState({ avatarURL: url })
          })
          .catch(error => {
            console.error('Error writing document: ', error)
          })
      )
  }

  render () {
    console.log('Image', this.state.avatarURL)
    return (
      <div>
        <form>
          <label style={{ margin: 10 }}>Username:</label>
          <input
            type='text'
            value={this.state.username}
            name='username'
            onChange={this.handleChangeUsername}
          />
          <label style={{ margin: 10 }}>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          <FileUploader
            accept='image/*'
            name='avatar'
            filename={file => this.state.username + file.name.split('.')[1]}
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <div style={{ margin: 30 }}>
            {this.state.avatarURL &&
              <img
                style={{ margin: '30', width: 500, borderRadius: 20 }}
                src={this.state.avatarURL}
              />}
          </div>
        </form>
      </div>
    )
  }
}

export default ProfilePage
