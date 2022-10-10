const firebaseConfig = {
    apiKey: "AIzaSyB6qSw2-Pj_os86cJ_r7gQQE-QwIWN6WTM",

    authDomain: "project-kwitter-15013.firebaseapp.com",

    databaseURL: "https://project-kwitter-15013-default-rtdb.firebaseio.com",

    projectId: "project-kwitter-15013",

    storageBucket: "project-kwitter-15013.appspot.com",

    messagingSenderId: "560463086023",

    appId: "1:560463086023:web:3c382947d1808a4acc59e2",

    measurementId: "G-04RL4RZM1F"
    
  };
  
  firebase. initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name"); 

  function send()
  {
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push(
     {
       name:user_name,
       message:msg,
       like:0
     })
     document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       
    } });  }); }
getData();

function logout() 
{
window.location="kwitter_room.html";
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}