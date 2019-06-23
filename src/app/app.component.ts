import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
constructor() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDGqdKgwgYg11TSGtfE2_8Fs9Ih5LeQuOQ",
    authDomain: "monagenceimmo-14834.firebaseapp.com",
    databaseURL: "https://monagenceimmo-14834.firebaseio.com",
    projectId: "monagenceimmo-14834",
    storageBucket: "monagenceimmo-14834.appspot.com",
    messagingSenderId: "630045906989",
    appId: "1:630045906989:web:01e6394975fe343f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

}
