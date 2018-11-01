var config = {
    apiKey: "AIzaSyDp27nzyKjhTwzdHol9FYOV8e9CvT3_3s4",
    authDomain: "checkin-class-itkmitl.firebaseapp.com",
    databaseURL: "https://checkin-class-itkmitl.firebaseio.com",
    projectId: "checkin-class-itkmitl",
    storageBucket: "checkin-class-itkmitl.appspot.com",
    messagingSenderId: "56110941267"
  };
  firebase.initializeApp(config)
  
  var stref = firebase.firestore();
  var stref2 = firebase.firestore();
  stref.collection('students').doc(localStorage.getItem('id')).collection('วิชาที่เรียน').doc("วิชา1").get()
    .then(function (doc) {
      
      document.getElementById("fullname").innerHTML = doc.data().name
    }
  
    )
  
    stref2.collection('students').doc(localStorage.getItem('id')).get()
    .then(function (doc) {
      
      document.getElementById("std_id").innerHTML = doc.data().id
    }
  
    )


    var stref = firebase.firestore();
stref.collection('teacher').doc(localStorage.getItem('id')).collection('วิชาที่สอน').doc('qnBcvHPwi9T3mMkSbbE3').get()
.then(function (doc) {
  document.getElementById("fullname").innerHTML = doc.data().count.week1[0]
}

)
  
   