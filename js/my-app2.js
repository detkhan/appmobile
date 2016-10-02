function init(){
  $('#re-password').css('display', 'none');//not show
  $('#comfirm-regis').css('display', 'none');//not show
  $('#check_agree1').css('display', 'none');//not show
  $('#gender').css('display', 'none');//not show
  $('#age').css('display', 'none');//not show

}
init();
$(document).on("click", "#regis", function() {
  $('#re-password').css('display', 'block');//show
  $('#comfirm-regis').css('display', 'block');//show
  $('#gender').css('display', 'block');//show
  $('#age').css('display', 'block');//show
  $('#check_agree1').css('display', 'block');//show
  $('#login').css('display', 'none');//not show
  $('#regis').css('display', 'none');//not show

});//event click
$(document).on("click", "#comfirm-regis", function() {
    var username=$("#username").val();//get value username
    var password=$("#password").val();//get value password
    var re_password=$("#re-password").val();//get value re password
    var gender=$('input[name=radio1]:checked').val();//get value radio button of gender
    var age=$("#age").val();//get value age
    var check_agree=$('#check_agree').is(':checked');
if(password==re_password && check_agree==true){
    var pack_data={username:username,password:password,gender:gender,age:age};
    var url='http://127.0.0.1/putitapp/api/regis.php?jsoncallback=?';
    $.getJSON( url, {
      pack_data:pack_data,
      format: 'json'
      })
        .done(function( data ) {
    $.each(data, function(i, field){
    //sent Complete any thing
var msg=data[i].msg;
var username=data[i].username;
if(msg=="yes"){
init(); //hide comfirm-regis go to login
$('#login').css('display', 'block');//show when success regis
$('#regis').css('display', 'block');//not show
alert("success")
}else{
alert("have username");
}
  });//each
});//Complete sent data
}//if check data
else{
alert('Please Complete the fields');
}//if check data
});//event click regis
$(document).on("click", "#login", function() {
  var username=$("#username").val();//get value username
  var password=$("#password").val();//get value password
  var gender=$("#gender").val();//get value gender
  var age=$("#age").val();//get value age
  var pack_data={username:username,password:password,gender:gender,age:age};
  var url='http://127.0.0.1/putitapp/api/login.php?jsoncallback=?';
  $.getJSON( url, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
  $.each(data, function(i, field){
  //sent Complete any thing
  var msg=data[i].msg;
  if(msg=="yes"){
$.mobile.changePage("#homepage");//when success login
var content='welcome'+username;
$("#appview").append(content);
  }else{
  alert("Error! the username or password doesnt match.");
  }
  });//each
  });//Complete sent data
});//event click  login




// navbar page

$("#configbtn").click(function() {
  var timer=$('input[name=radioName]:checked', '#formsetting').val();
  $("#CountDownTimer").TimeCircles().end().fadeOut();
  $("#CountDownTimer").TimeCircles().destroy();
  init(timer);
  $.mobile.changePage("#homepage");

  });


//end of seting navbar

$(document).on("click", "#agenda", function() {
$("#appview").html("");
var listmenu="test1";
var content='<ul data-role="listview" class="ui-listview"> \
<li class="ui-first-child"><a id="btn_check" car_id="1" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Acura</a></li> \
<li><a  id="btn_check" car_id="2" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Audi</a></li> \
<li><a id="btn_check" car_id="3" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">BMW</a></li> \
<li><a id="btn_check" car_id="4" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Cadillac</a></li> \
<li class="ui-last-child"><a id="btn_check" car_id="5" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Ferrari</a></li> \
</ul>';
$("#appview").append(content);
});//event click  agenda


$(document).on("click", "#btn_check", function() {
$("#appview").html("");
var content=$(this).attr('car_id');
$("#appview").append(content);
});//event click  btn_check



//timer
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
