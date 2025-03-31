import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101443253_comp3133_assig2';

// Your web app's Firebase configuration
  firebaseConfig = {
  apiKey: "AIzaSyCVJ80p3Qa7xJ2pA4XhH0IpWho1GbXv014",
  authDomain: "gbc-employee-management.firebaseapp.com",
  projectId: "gbc-employee-management",
  storageBucket: "gbc-employee-management.firebasestorage.app",
  messagingSenderId: "375822159516",
  appId: "1:375822159516:web:6ac39c252f8d103ee1a759"
};

// Initialize Firebase
  app = initializeApp(this.firebaseConfig);
}
