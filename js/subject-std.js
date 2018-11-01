var config = {
    apiKey: "AIzaSyDp27nzyKjhTwzdHol9FYOV8e9CvT3_3s4",
    authDomain: "checkin-class-itkmitl.firebaseapp.com",
    databaseURL: "https://checkin-class-itkmitl.firebaseio.com",
    projectId: "checkin-class-itkmitl",
    storageBucket: "checkin-class-itkmitl.appspot.com",
    messagingSenderId: "56110941267"
  };
  firebase.initializeApp(config)
  var subject = firebase.firestore();

subject.collection('students').doc(localStorage.getItem('id')).collection('subject')
.onSnapshot(function (doc) {
  doc.docs
    .forEach(data => {
      if (data.data().namecourse != 'วิชา4') {
        $('#subject-std').append(createSubject(data.data().namecourse, data.data().nameteacher, data.data().room, data.data().time,data.data().passcourse,data.data().day)
        )
      }
    })
})

function createSubject(namecourse, nameteacher, room, time,passcourse,day) {

html = ''
html += '<div>'
html += '<div class="description">'
html += '<div class="wrapper">'
html += '<div class="information"><span class="label">ชื่อวิชา : </span>'
html += '<p class="text" id="fullname">' + namecourse +' '+passcourse+ '</p>'
html += '</div><hr>'
html += '<div class="information"><span class="label">ชื่ออาจาน: </span>'
html += '<p class="text" id="std_id">' + nameteacher + '</p>    </div> <hr>'
html += '<div class="information"><span class="label">เวลาสอน : </span>'
html += '<p class="text">' + day +' '+time+ '</p>'
html += '</div>   <hr>'
html += '<div class="information status"><span class="label">ห้องสอน : </span>'
html += '<p class="text">' + room + '</p>'
html += '</div>'
html += '<hr> <input type="hidden" id="namecourse" value="' + namecourse + '">'
html += '<input type="hidden"  id="nameteacher" value="' + nameteacher + '">'
html += '<input type="hidden"  id="room" value="' + room + '">'
html += '<input type="hidden"  id="time" value="' + time + '">'
html += 'เลือกสัปดาห์ที่ทำการเช็ค    <label>    <select name="select2" id="week">'
html += '<option value="01">1</option>       <option value="02">2</option>        <option value="03">3 </option>       <option value="04">4</option>'
html += '<option value="05">5</option> <option value="06">6</option><option value="07">7</option>'
html += '<option value="08">8</option><option value="09">9</option><option value="10">10</option>'
html += '<option value="11">11</option><option value="12">12</option><option value="13">13</option>'
html += '<option value="14">14</option><option value="15">15</option><option value="16">16</option>'
html += '</select></label><a href="check2.html"><div class="information information_btn" name="post" value="2">ทำการเช็คชื่อ</div>'
html += '</div></div></div>'

return html
}
