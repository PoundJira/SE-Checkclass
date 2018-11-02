var config = {
  apiKey: "AIzaSyDp27nzyKjhTwzdHol9FYOV8e9CvT3_3s4",
  authDomain: "checkin-class-itkmitl.firebaseapp.com",
  databaseURL: "https://checkin-class-itkmitl.firebaseio.com",
  projectId: "checkin-class-itkmitl",
  storageBucket: "checkin-class-itkmitl.appspot.com",
  messagingSenderId: "56110941267"
};
firebase.initializeApp(config)
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

if(localStorage.getItem('id')==""){
  window.location.href="login.html";
}
var stref2 = firebase.firestore();


  stref2.collection('students').doc(localStorage.getItem('id')).get()
  .then(function (doc) {
    
    document.getElementById("fullname").innerHTML = doc.data().name
    document.getElementById("std_id").innerHTML = doc.data().id
  }

  )

 