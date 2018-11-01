const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    
    let div = document.createElement('div');
    let li = document.createElement('li');
    let namecourse = document.createElement('span');


div.setAttribute('data-id', doc.id);
    
    li.setAttribute('data-id', doc.id);
    namecourse.textContent = 'รหัสนักศึกษา : '+doc.data().student;

   
   

    li.appendChild(namecourse);

    

  
    cafeList.appendChild(li);
    cafeList.appendChild(div);
}

// getting data
db.collection('teacher').doc('teacher1').collection('subject').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
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