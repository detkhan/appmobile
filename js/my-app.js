var username;
$( document ).ready(function() {
init();
});


function init(){
  checklogin();
  $('#re-password').css('display', 'none');//not show
  $('#comfirm-regis').css('display', 'none');//not show
  $('#check_agree1').css('display', 'none');//not show
  $('#gender').css('display', 'none');//not show
  $('#age').css('display', 'none');//not show

}
//$.mobile.changePage("#homepage");//when success login


function checklogin() {
if (localStorage.user_name) {
username = localStorage.user_name;
$.mobile.changePage("#homepage");
var content='welcome ! '+username;
$("#appview").append(content);
  }
}

$(document).on("click", "#profile", function() {
  $("#appview").html("");
  var content='<ul data-role="listview" class="ui-listview"> \
  <li class="ui-first-child"><a href="#" id="logout" class="ui-btn ui-btn-icon-right ui-icon-carat-r">logout</a></li>   \
  </ul>';
  $("#appview").append(content);//apend to add content
});//event click logout

$(document).on("click", "#logout", function() {
localStorage.removeItem("user_name");
$.mobile.changePage("#home");
});//event click logout

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
    var url='http://127.0.0.1/testmobile/api/regis.php?jsoncallback=?';
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
  var url='http://127.0.0.1/testmobile/api/login.php?jsoncallback=?';
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
localStorage.user_name = username;
var content='welcome ! '+username;
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
var content='<ul data-role="listview" class="ui-listview"> \
<li class="ui-first-child"><a href="#" id="li1" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Work</a></li>   \
<li><a href="#" id="li2" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Study</a></li>  \
<li><a href="#" id="li3" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Rest</a></li>   \
<li><a href="#" id="li4" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Media</a></li> \
<li class="ui-last-child"><a href="#" id="li5" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Focus</a></li>  \
</ul>';
$("#appview").append(content);//apend to add content
});//event click  agenda

$(document).on("click", "#li1", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda

$(document).on("click", "#li2", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda

$(document).on("click", "#li3", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda

$(document).on("click", "#li4", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda

$(document).on("click", "#li5", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda











$(document).on("click", "#btn_check", function() {
$("#appview").html("");
var content=$(this).attr('car_id');
$("#appview").append(content);
});//event click  btn_check


$(document).on("click", "#process", function() {
$("#appview").html("");
var content='<img src="http://www.gbspaloke.be/images/beelden/construction1.gif" style="width:100%;">';
$("#appview").append(content);
});//event click  agenda




$(document).on("click", "#result", function() {
  var pack_data={username:username};
  var url='http://127.0.0.1/putitapp/api/getchart.php?jsoncallback=?';
  $.getJSON( url, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
  chart(data);
});
});//event click  result

function chart(data) {
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '100%',
    dataSource: {
    "chart": {
        "caption": "Summary",
        "bgcolor": "FFFFFF",
        "showvalues": "1",
        "showpercentvalues": "1",
        "showborder": "0",
        "showplotborder": "0",
        "showlegend": "1",
        "legendborder": "0",
        "legendposition": "bottom",
        "enablesmartlabels": "1",
        "use3dlighting": "0",
        "showshadow": "0",
        "legendbgcolor": "#CCCCCC",
        "legendbgalpha": "20",
        "legendborderalpha": "0",
        "legendshadow": "0",
        "legendnumcolumns": "3",
        "palettecolors": "#57A202,#F04C09,#20BDEF,#F9D107,#E909F0"
    },
    "data": data
}
}
);
    fusioncharts.render();
});

$("#appview").html("");
var content='<div id="chart-container"></div>';
$("#appview").append(content);
}
