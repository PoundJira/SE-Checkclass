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


var stref2 = firebase.firestore();
var week = localStorage.getItem("week")
stref2.collection('teacher').doc(localStorage.getItem('id')).collection('subject').doc(localStorage.getItem("namecourse")).get()
    .then(function (doc) {
        if (week == "week01") {
            document.getElementById("code").innerHTML = doc.data().week01[0]
        }
        if (week == "week02") {
            document.getElementById("code").innerHTML = doc.data().week02[0]
        }
        if (week == "week03") {
            document.getElementById("code").innerHTML = doc.data().week03[0]
        }
        if (week == "week04") {
            document.getElementById("code").innerHTML = doc.data().week04[0]
        }
        if (week == "week05") {
            document.getElementById("code").innerHTML = doc.data().week05[0]
        }
        if (week == "week06") {
            document.getElementById("code").innerHTML = doc.data().week06[0]
        }
        if (week == "week07") {
            document.getElementById("code").innerHTML = doc.data().week07[0]
        }
        if (week == "week08") {
            document.getElementById("code").innerHTML = doc.data().week08[0]
        }
        if (week == "week09") {
            document.getElementById("code").innerHTML = doc.data().week09[0]
        }
        if (week == "week10") {
            document.getElementById("code").innerHTML = doc.data().week10[0]
        }
        if (week == "week11") {
            document.getElementById("code").innerHTML = doc.data().week11[0]
        }
        if (week == "week12") {
            document.getElementById("code").innerHTML = doc.data().week12[0]
        }
        if (week == "week13") {
            document.getElementById("code").innerHTML = doc.data().week13[0]
        }
        if (week == "week14") {
            document.getElementById("code").innerHTML = doc.data().week14[0]
        }
        if (week == "week15") {
            document.getElementById("code").innerHTML = doc.data().week15[0]
        }
        if (week == "week16") {
            document.getElementById("code").innerHTML = doc.data().week16[0]
        }

    }

    )

