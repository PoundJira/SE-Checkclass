
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#course2');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

   
}

// getting data
db.collection('teacher').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var text = "";
    db.collection('teacher').doc(localStorage.getItem('id')).collection('subject').add({
        namecourse: form.namecourse.value,
        passcourse: form.passcourse.value,
        nameteacher: localStorage.getItem('nameteacher'),
        day: form.day.value,
        time: form.time.value,
        room: form.room.value,
        count: {
            week01:[makeid(text)],
            week02:[makeid(text)],
            week03:[makeid(text)],
            week04:[makeid(text)],
            week05:[makeid(text)],
            week06:[makeid(text)],
            week07:[makeid(text)],
            week08:[makeid(text)],
            week09:[makeid(text)],
            week10:[makeid(text)],
            week11:[makeid(text)],
            week12:[makeid(text)],
            week13:[makeid(text)],
            week14:[makeid(text)],
            week15:[makeid(text)],
            week16:[makeid(text)]
           
        },
        student:[]
    });
    form.namecourse.value = '';
    
    form.passcourse.value = '';
    form.day.value = '';
    form.time.value = '';
    form.room.value = '';
});
function makeid(text) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());