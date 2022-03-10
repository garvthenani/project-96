
const firebaseConfig = {
      apiKey: "AIzaSyDbE41QXzzd3h6y2UkdsrogRMEqFbXtgc8",
      authDomain: "classtest-9c166.firebaseapp.com",
      databaseURL: "https://classtest-9c166-default-rtdb.firebaseio.com",
      projectId: "classtest-9c166",
      storageBucket: "classtest-9c166.appspot.com",
      messagingSenderId: "690103384654",
      appId: "1:690103384654:web:2e23c2cfdf3c92fbdda11f"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"      
}
function send()
{
firebase.database().ref(room_name).push({
 name:user_name,
 messge:msg,
 like:0     
})
}
