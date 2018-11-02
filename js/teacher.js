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
  window.location.href="login2.html";
}
var stref2 = firebase.firestore();
var subject = firebase.firestore();


stref2.collection('teacher').doc(localStorage.getItem('id')).get()
  .then(function (doc) {
    var name1 = doc.data().name
    localStorage.setItem('nameteacher', name1)
    document.getElementById("fullname").innerHTML = doc.data().name
    document.getElementById("std_id").innerHTML = doc.data().id
  }

  )

subject.collection('teacher').doc(localStorage.getItem('id')).collection('subject')
  .onSnapshot(function (doc) {
    var num = 0;
    doc.docs
      .forEach(data => {
        if (data.data().namecourse != 'วิชา4') {
          num = num+1;
          $('#list-subject').append(createSubject(data.data().namecourse, data.data().nameteacher, data.data().room, data.data().time,data.data().passcourse,data.data().day, num)
          )
        }
      })
  })
 
function createSubject(namecourse, nameteacher, room, time,passcourse,day, num) {

  html = ''
  html += '<div>'
  html += '<div class="description">'
  html += '<div class="wrapper">'
  html += '<div class="information"><span class="label">รหัสวิชา : </span>'
  html += '<p class="text" id="passcourse_'+num+'">' + passcourse+ '</p>'
  html += '</div><hr>'
  html += '<div class="information"><span class="label">ชื่อวิชา : </span>'
  html += '<p class="text" id="namecourse_'+num+'">' + namecourse +'</p>'
  html += '</div><hr>'
  html += '<div class="information"><span class="label">ชื่ออาจาน: </span>'
  html += '<p class="text" id="nameteacher_'+num+'">' + nameteacher + '</p>    </div> <hr>'
  html += '<div class="information"><span class="label">วันที่สอน : </span>'
  html += '<p class="text" id="day_'+num+'">' + day +'</p>'
  html += '</div>   <hr>'
  html += '<div class="information"><span class="label">เวลาสอน : </span>'
  html += '<p class="text" id="time_'+num+'">' +time+ '</p>'
  html += '</div>   <hr>'
  html += '<div class="information status"><span class="label">ห้องสอน : </span>'
  html += '<p class="text" id="room_'+num+'">' + room + '</p>'
  html += '</div>'
  html += '<hr> '

  html += '<a onclick="ChooseFunction(1,'+num+')"><div class="information information_btn" name="post" value="1">เพิ่มนักศึกษาเข้าวิชา </div></a> '
  html += 'เลือกสัปดาห์ที่ทำการเช็ค       <select name="week" id="week'+num+'">'
  html += '<option value="week01">1</option>       <option value="week02">2</option>        <option value="week03">3 </option>       <option value="week04">4</option>'
  html += '<option value="week05">5</option> <option value="week06">6</option><option value="week07">7</option>'
  html += '<option value="week08">8</option><option value="week09">9</option><option value="week10">10</option>'
  html += '<option value="week11">11</option><option value="week12">12</option><option value="week13">13</option>'
  html += '<option value="week14">14</option><option value="week15">15</option><option value="week16">16</option>'
  html += '</select>  <a onclick="ChooseFunction(2,'+(num)+')"><div class="information information_btn" name="post" value="2">ทำการเช็คชื่อ</div></a>'
  html += '<a onclick="ChooseFunction(3,'+num+')"><div class="information information_btn" name="post" value="3">ดูรายชื่อนักศึกษา</div></a>'
  html += '</div></div></div>'

  return html
}


function ChooseFunction(num, id){
  localStorage.setItem("passcourse", document.getElementById("passcourse_"+id).innerHTML)
  localStorage.setItem("namecourse", document.getElementById("namecourse_"+id).innerHTML)
  localStorage.setItem("nameteacher", document.getElementById("nameteacher_"+id).innerHTML)
  localStorage.setItem("day", document.getElementById("day_"+id).innerHTML)
  localStorage.setItem("time", document.getElementById("time_"+id).innerHTML)
  localStorage.setItem("room", document.getElementById("room_"+id).innerHTML)
  localStorage.setItem("week", document.getElementById("week"+id).value)

  if(num == 1){
    window.location.href="blog1.html";
  }
  if(num == 2){
    window.location.href="blog2.html";
  }
  if(num == 3){
    window.location.href="blog3.html";
  }
}