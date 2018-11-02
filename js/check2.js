if(localStorage.getItem('id')==""){
    window.location.href="login2.html";
  }
const form = document.querySelector('#incode');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    var passcourse = localStorage.getItem("passcourse")
    var namecourse = localStorage.getItem("namecourse")
    var nameteacher = localStorage.getItem("nameteacher")
    var day = localStorage.getItem("day")
    var time = localStorage.getItem("time")
    var teacher = localStorage.getItem("teacher")
    var id = localStorage.getItem("id")
    var code = document.getElementById("code").value
    var week = localStorage.getItem("week")

    var subject = firebase.firestore();
    var num=0;
    subject.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).get()
        .then(function (doc) {
            if (week == "week01" && doc.data().week01[0] == code) {
                var dt = []
                dt = doc.data().week01
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week01: dt
                })
                num=1;
            }
            if (week == "week02" && doc.data().week02[0] == code) {
                var dt = []
                dt = doc.data().week02
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week02: dt
                })
                num=1;
            }
            if (week == "week03" && doc.data().week03[0] == code) {
                var dt = []
                dt = doc.data().week03
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week03: dt
                })
                num=1;
            }
            if (week == "week04" && doc.data().week04[0] == code) {
                var dt = []
                dt = doc.data().week04
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week04: dt
                })
                num=1;
            }
            if (week == "week05" && doc.data().week05[0] == code) {
                var dt = []
                dt = doc.data().week05
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week05: dt
                })
                num=1;
            }
            if (week == "week06" && doc.data().week06[0] == code) {
                var dt = []
                dt = doc.data().week06
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week06: dt
                })
                num=1;
            }
            if (week == "week07" && doc.data().week07[0] == code) {
                var dt = []
                dt = doc.data().week07
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week07: dt
                })
                num=1;
            }
            if (week == "week08" && doc.data().week08[0] == code) {
                var dt = []
                dt = doc.data().week08
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week08: dt
                })
                num=1;
            }
            if (week == "week09" && doc.data().week09[0] == code) {
                var dt = []
                dt = doc.data().week09
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week09: dt
                })
                num=1;
            }
            if (week == "week10" && doc.data().week10[0] == code) {
                var dt = []
                dt = doc.data().week10
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week10: dt
                })
                num=1;
            }
            if (week == "week11" && doc.data().week11[0] == code) {
                var dt = []
                dt = doc.data().week11
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week11: dt
                })
                num=1;
            }
            if (week == "week12" && doc.data().week12[0] == code) {
                var dt = []
                dt = doc.data().week12
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week12: dt
                })
                num=1;
            }
            if (week == "week13" && doc.data().week13[0] == code) {
                var dt = []
                dt = doc.data().week13
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week13: dt
                })
                num=1;
            }
            if (week == "week14" && doc.data().week14[0] == code) {
                var dt = []
                dt = doc.data().week14
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week14: dt
                })
                num=1;
            }
            if (week == "week15" && doc.data().week15[0] == code) {
                var dt = []
                dt = doc.data().week15
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week15: dt
                })
                num=1;
            }
            if (week == "week16" && doc.data().week16[0] == code) {
                var dt = []
                dt = doc.data().week16
                dt.push(id)

                db.collection('teacher').doc(teacher).collection('subject').doc(localStorage.getItem("namecourse")).update({
                    week16: dt
                }).catch(function (error){alert("Noooooooooooooooooooooooooooooooo")})
                num=1;
            }
            if(num==1){
                try {
                    adddlert("Welcome guest!");
                }
                catch(err) {
                    
                }
            }



        })
    })
