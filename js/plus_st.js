const form = document.querySelector('#add');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    var namecourse =localStorage.getItem('namecourse').value
    var std = document.getElementById("std").value
    db.collection('students').doc(std).collection('subject').add({
        std: form.std.value,
        namecourse: form.namecourse.value


        
    });
    form.std.value = '';
    form.namecourse.value = '';

});