const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe

var namecourse = localStorage.getItem("namecourse")
var week = localStorage.getItem("week")
// getting data
db.collection('teacher').doc('teacher1').collection('subject').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        if (namecourse == doc.data().namecourse) {
            if (week == "week01") {
                var num = doc.data().week01.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week01[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week01[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week02") {
                var num = doc.data().week02.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week02[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week02[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week03") {
                var num = doc.data().week03.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week03[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week03[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week04") {
                var num = doc.data().week04.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week04[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week04[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week05") {
                var num = doc.data().week05.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week05[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week05[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week06") {
                var num = doc.data().week06.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week06[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week06[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week07") {
                var num = doc.data().week07.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week07[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week07[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week08") {
                var num = doc.data().week08.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week08[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week08[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week09") {
                var num = doc.data().week09.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week09[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week09[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week10") {
                var num = doc.data().week10.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week10[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week10[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week11") {
                var num = doc.data().week11.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week11[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week11[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week12") {
                var num = doc.data().week12.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week12[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week12[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week13") {
                var num = doc.data().week13.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week13[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week13[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week14") {
                var num = doc.data().week14.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week14[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week14[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week15") {
                var num = doc.data().week15.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week15[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week15[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }
            if (week == "week16") {
                var num = doc.data().week16.length
                for (i = 1; i < num; i++) {
                    let li = document.createElement('li');
                    let namecourse = document.createElement('span');
                    li.setAttribute('data-id', doc.id);
                    namecourse.textContent = doc.data().week16[i];
                    var subject = firebase.firestore();
                    subject.collection('students').doc(doc.data().week16[i]).get()
                    .then(function (doc) {
                        namecourse.textContent  += ' : '+doc.data().name
                        li.appendChild(namecourse);
                        cafeList.appendChild(li);
                    });
                }
            }

        }
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('teacher').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});