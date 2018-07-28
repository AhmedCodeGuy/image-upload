import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

var config = {
  apiKey: 'AIzaSyA4-8jvx5CKtrZDSTpD6-rVaLkzso19I1I',
  authDomain: 'image-upload-6dc61.firebaseapp.com',
  databaseURL: 'https://image-upload-6dc61.firebaseio.com',
  projectId: 'image-upload-6dc61',
  storageBucket: 'image-upload-6dc61.appspot.com',
  messagingSenderId: '556489519256'
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
