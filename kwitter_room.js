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
document.getElementById("user_name").innerHTML="WELCOME...."+user_name+"!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update(
    {
      purpose:"adding room name"
    }
  )
  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location("kwitter_page.html")
}

function logout() 
{
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}