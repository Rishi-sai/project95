const firebaseConfig = {
  apiKey: "AIzaSyDRnwXTCuWUHGhW3lKM_lcXAktICu2GR0Q",
  authDomain: "kwitternew-9ffd9.firebaseapp.com",
  databaseURL: "https://kwitternew-9ffd9-default-rtdb.firebaseio.com",
  projectId: "kwitternew-9ffd9",
  storageBucket: "kwitternew-9ffd9.appspot.com",
  messagingSenderId: "802723871387",
  appId: "1:802723871387:web:d0046bdad28f9ea57ea43e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("username");
  document.getElementById("wlcm").innerHTML ="Welcome" + user_name;


  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose:"addingRoomname"
    });
   localStorage.setItem("room_name",room_name);
   window.location = "kwitter_page.html";
     
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name is " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}