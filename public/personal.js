function openTab(personal){
    var i;
    var x = document.getElementsByClassName("personalPage");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(personal).style.display = "block";
}

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-z98Nc4j11cPpC6eRqB3iQOSlQrfe7aA",
    authDomain: "comp430-764fa.firebaseapp.com",
    databaseURL: "https://comp430-764fa-default-rtdb.firebaseio.com",
    projectId: "comp430-764fa",
    storageBucket: "comp430-764fa.appspot.com",
    messagingSenderId: "774865356524",
    appId: "1:774865356524:web:63328ef09e7142cdf907c9",
    measurementId: "G-NDEX7JKYRL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);