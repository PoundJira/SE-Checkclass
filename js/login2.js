var config = {
    apiKey: "AIzaSyDp27nzyKjhTwzdHol9FYOV8e9CvT3_3s4",
    authDomain: "checkin-class-itkmitl.firebaseapp.com",
    databaseURL: "https://checkin-class-itkmitl.firebaseio.com",
    projectId: "checkin-class-itkmitl",
    storageBucket: "checkin-class-itkmitl.appspot.com",
    messagingSenderId: "56110941267"
  };
  firebase.initializeApp(config)

  $("#formLogin").submit(function(e) {
    e.preventDefault();
});


  function login(event){
  	var email = document.getElementById("email").value
  	var password = document.getElementById("password").value
    console.log(email)
    localStorage.setItem('id', email.split('@')[0])
    
  	firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (resp) {
      	window.location.href="index2.html";

      })
      .catch(function (error){alert("Noooooooooooooooooooooooooooooooo");})
  }