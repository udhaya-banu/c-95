var firebaseConfig = {
      apiKey: "AIzaSyDw5ih8YtTfglrukcUagug6ua4ngYsGxtE",
      authDomain: "kwitter-dee01.firebaseapp.com",
      databaseURL: "https://kwitter-dee01-default-rtdb.firebaseio.com",
      projectId: "kwitter-dee01",
      storageBucket: "kwitter-dee01.appspot.com",
      messagingSenderId: "576509435176",
      appId: "1:576509435176:web:d6f5c94309c6865d10c41d"
    };
    firebase.initializeApp(firebaseConfig) ;
    user_name=localstorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME "+user_name;
   
    function addRoom(){
          room_name=document.getElementById("room_name").value ;
          localStorage.setItem("room_name", room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          window.location="kwitter_page.html";
         }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
