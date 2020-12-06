function openNav(){
    document.querySelector(".menu").style.display = "block";
    document.body.style.overflow = "hidden"; 
}
function closeNav(){
    document.querySelector(".menu").style.display = "none";
    document.body.style.overflow = "scroll"; 
}

function openInNewTab() {
    window.open("less.html");
}

function return_top() {
    scroll(0, $('#header').position().top)
}


function popup2(){
    var btn = document.getElementById("bt2").innerHTML;
    if(btn == "LOG IN"){
        document.querySelector(".popup2").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    else{
        logout();
    }
}
function close_popup2(){
    document.querySelector(".popup2").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username2").value = "";
    document.getElementById("pass").value = "";
}

function login(name){
    document.querySelector(".user_profile").style.display = "inline";
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("bt2").innerHTML = "LOG OUT";
    close_popup2();
}

function logout(){
    document.querySelector(".user_profile").style.display = "none";
    document.getElementById("bt2").innerHTML = "LOG IN";
}


function popup(){
    document.querySelector(".popup").style.display = "flex";
    $(".popup").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
}
function close_popup(){
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
}
var modal = document.getElementById("popup");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
  }
}



function big(element){
    element.style.fontSize = "25px";
}
function small(element){
    element.style.fontSize = "20px";
}
function change1(){
    document.querySelector(".container1").style.display = "block";
    document.querySelector(".container2").style.display = "none"; 
    document.querySelector(".container3").style.display = "none";
    document.querySelector(".container4").style.display = "none";
    document.querySelector(".container5").style.display = "none";
    document.getElementById("btn1").style.color = "#ff0000";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn3").style.color = "black";    
    document.getElementById("btn4").style.color = "black";
    document.getElementById("btn5").style.color = "black";
}
function change2(){
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container1").style.display = "none"; 
    document.querySelector(".container3").style.display = "none";
    document.querySelector(".container4").style.display = "none";
    document.querySelector(".container5").style.display = "none";
    document.getElementById("btn2").style.color = "#ff0000";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn3").style.color = "black";    
    document.getElementById("btn4").style.color = "black";
    document.getElementById("btn5").style.color = "black";
}
function change3(){
    document.querySelector(".container3").style.display = "block";
    document.querySelector(".container1").style.display = "none"; 
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container4").style.display = "none";
    document.querySelector(".container5").style.display = "none";
    document.getElementById("btn3").style.color = "#ff0000";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "black";    
    document.getElementById("btn4").style.color = "black";
    document.getElementById("btn5").style.color = "black";
}

function change4(){
    document.querySelector(".container4").style.display = "block";
    document.querySelector(".container1").style.display = "none"; 
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container3").style.display = "none";
    document.querySelector(".container5").style.display = "none";
    document.getElementById("btn4").style.color = "#ff0000";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "black";    
    document.getElementById("btn3").style.color = "black";
    document.getElementById("btn5").style.color = "black";
}
function change5(){
    document.querySelector(".container5").style.display = "block";
    document.querySelector(".container1").style.display = "none"; 
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container4").style.display = "none";
    document.querySelector(".container3").style.display = "none";
    document.getElementById("btn5").style.color = "#ff0000";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "black";    
    document.getElementById("btn4").style.color = "black";
    document.getElementById("btn3").style.color = "black";
}

function change_content(element){
    var a = element.innerHTML;
    switch(a){
        case "Monday":
            document.getElementById("td1").innerHTML = "10:00AM - 11:30AM";
            document.getElementById("td2").innerHTML = "";

            document.getElementById("td4").innerHTML = "";
            document.getElementById("td5").innerHTML = "";

            document.getElementById("td7").innerHTML = "";
            document.getElementById("td8").innerHTML = "2:00AM - 3:30AM";

            document.getElementById("td10").innerHTML = "";
            document.getElementById("td11").innerHTML = "";

            document.getElementById("td13").innerHTML = "";
            document.getElementById("td14").innerHTML = "";
            break;
        case "Tuesday":
            document.getElementById("td1").innerHTML = "";
            document.getElementById("td2").innerHTML = "";

            document.getElementById("td4").innerHTML = "";
            document.getElementById("td5").innerHTML = "10:00AM - 11:30AM";

            document.getElementById("td7").innerHTML = "";
            document.getElementById("td8").innerHTML = "";

            document.getElementById("td10").innerHTML = "2:00AM - 3:30AM";
            document.getElementById("td11").innerHTML = "";

            document.getElementById("td13").innerHTML = "";
            document.getElementById("td14").innerHTML = "";
            break;
        case "Wednesday":
            document.getElementById("td1").innerHTML = "";
            document.getElementById("td2").innerHTML = "";

            document.getElementById("td4").innerHTML = "12:00AM - 1:00AM";
            document.getElementById("td5").innerHTML = "";

            document.getElementById("td7").innerHTML = "7:00PM - 8:30PM";
            document.getElementById("td8").innerHTML = "";

            document.getElementById("td10").innerHTML = "";
            document.getElementById("td11").innerHTML = "";

            document.getElementById("td13").innerHTML = "";
            document.getElementById("td14").innerHTML = "6:00AM - 7:30AM";
            break;
        case "Thursday":
            document.getElementById("td1").innerHTML = "8:00PM - 21:30PM";
            document.getElementById("td2").innerHTML = "";

            document.getElementById("td4").innerHTML = "";
            document.getElementById("td5").innerHTML = "";

            document.getElementById("td7").innerHTML = "";
            document.getElementById("td8").innerHTML = "3:00PM - 4:30PM";

            document.getElementById("td10").innerHTML = "";
            document.getElementById("td11").innerHTML = "";

            document.getElementById("td13").innerHTML = "11:00AM - 12:30AM";
            document.getElementById("td14").innerHTML = "";
            break;
        case "Friday":
            document.getElementById("td1").innerHTML = "";
            document.getElementById("td2").innerHTML = "7:00AM - 8:30AM";

            document.getElementById("td4").innerHTML = "10:00AM - 11:30AM";
            document.getElementById("td5").innerHTML = "";

            document.getElementById("td7").innerHTML = "";
            document.getElementById("td8").innerHTML = "1:30PM - 3:00PM";

            document.getElementById("td10").innerHTML = "4:00PM - 5:30PM";
            document.getElementById("td11").innerHTML = "";

            document.getElementById("td13").innerHTML = "5:30PM - 7:00PM";
            document.getElementById("td14").innerHTML = "";
            break;
    }
}

 
/*
function regist_now(){
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";

    document.getElementById("birthday").value = "";
    document.getElementById("age").value = "";
    
    document.getElementById("cities").value = "";

    document.getElementById("male").value = "";
    document.getElementById("female").value = "";

    document.getElementById("email").value = "";
    document.getElementById("pwd").value = "";

    alert("Succes")
}
*/

 $("#adver_btn").click(function(){
     $(".panel").fadeToggle();
     $("#prod").animate({left: '38%'});
     $("#prod").animate({top: '150px'});
   });

$("#slide_btn").click(function(){
    $(".slide").slideToggle(4000);
    $(".text").fadeTo("slow", 0.15);
})

$("#inst_btn").click(function(){
     $(".tog").toggle();
})

$("#stop").click(function(){
     $(".slide").stop();
});






  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        mark1 = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'lol',
            balloonContent: 'I'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'marker.png',
            iconImageSize: [40, 60],
            iconImageOffset: [-5, -38]
        }),

        mark2 = new ymaps.Placemark([55.727232, 37.480876], {
            hintContent: 'lold',
            balloonContent: 'I',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'marker.png',
            iconImageSize: [40, 60],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        });


          mark3 = new ymaps.Placemark([55.750414, 37.771230], {
            hintContent: 'lolc',
            balloonContent: 'I',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'marker.png',
            iconImageSize: [40, 60],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        });
            var polyline = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [55.80, 37.55], 
            [55.70, 37.40], 
            [55.70, 37.60],
            [55.50, 37.40],

        ], {
            balloonContent: "hey!"
        }, {
            // Цвет линии.
            draggable: true,
            strokeColor: "#2d00f7",
            // Ширина линии.
            strokeWidth: 5,
            // Коэффициент прозрачности.
            strokeOpacity: 0.3
        });


    rectangle = new ymaps.Rectangle([
        [55.70, 37.60],
        [55.85, 38.00]
    ], {
        hintContent: 'dont touch!!',
        balloonContent: 'rec'
    }, {
        fillColor: '#0b6cdb',
        fillOpacity: 0.2,
        strokeColor: '#470d8a',
        strokeOpacity: 1,
        strokeWidth: 2,
        borderRadius: 6
    });
    myMap.geoObjects
        .add(mark1)
        .add(mark2)
        .add(mark3)
        .add(polyline)
        .add(rectangle);
});