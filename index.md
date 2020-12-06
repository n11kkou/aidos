
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WE GYM</title>

    <link rel="shortcut icon" href="https://w7.pngwing.com/pngs/150/327/png-transparent-dumbbell-weight-training-exercise-physical-fitness-olympic-weightlifting-dumbbell-angle-text-rectangle.png">

    
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@300;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=d44ea879-ea71-4220-a834-255f867bcb3d&lang=en_US" type="text/javascript"></script>
    
</head>

<body>


    <div class="header" id="header">


        <div class="a">
            <div class="adver">
                <button id="adver_btn" class="btn btn-danger">CLICK ME!!!</button>
                <div class = "panel">
                    <div class="prod">
                     <div class="inst">
                        <div class="tog">
                            <p>@zhanysbayev</p>
                         </div>
                         <button id="inst_btn">instagram</button>
                         <button id="stop">stop</button>
                     </div>
     
                        <div class="text">
                           <h3 id="prod_h">Protein.</h3>
                           <p id="prod_p">The best way to be stronger.</p>
                         </div>
     
                         <div class="prod_img">
                           <img id="prod" src="prod.png" alt="" >
                         </div>
     

                         <div class="s">
                        <button id="slide_btn" class="btn btn-success">Buy now</button>
                        </div>

     
                        <div class="slide">
                            <p>If u have qs call this num<br> 8-776-161-05-12</p>
                        </div>

                          </div>
     
                     </div>
     
                 </div>
                 
            </div>
        </div>

        <span style="font-size:50px;cursor:pointer" onclick="openNav()" id="open">&#9776;</span>

       <div class="bg-image"></div>

       <div class="user_profile">
        <img id="profile_img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg" alt="">
        <p id="user_name">John</p>
    </div>

           <div class="menu"> 

         <span style="font-size:30px;cursor:pointer" onclick="closeNav()" id="clo">X</span>

           <a href="#header" id="home">Home</a>
           <a href="#mid" id="about" >About</a>
           <a href="#page3" id="class">Classes</a>
           <a href="#page4" id="schedule">Schedule</a>
           <a href="#location_page" id="contact">Location</a>
           
           <a href="#" id="less" onclick= "openInNewTab()"> Online </a>
           <button id="but" onclick="popup()">SIGN UP</button>
           </div> 



    </div> 

    <div class="text_on_img">

        <p id="p1">Work harder, get stronger</p>
        <h1 id="h11">EASY WITH OUR <span style="color: #f63; font-weight:bold">GYM</span></h1>

            <div class="button">
               <a href="#mid" class="bt" id="bt">READ MORE</a>
               <button class="bt" id="bt2" onclick="popup2()">LOG IN</button>
            </div>

            <div class="popup2">
                <div class="popup-content2">
                    <img onclick="close_popup2()" class="closed2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg==" alt="" width="7%">
                    <img src="sh.png" alt="" width="17%">
                    <input id="username2" type="text" name="username" placeholder="Username" >
                    <input type="password" id="pass" name="pass" placeholder="Password" >
                    <button onclick="login(username2.value)" class="btn btn-outline-dark">Log In</button>
                </div>
            </div>
    </div>

    <div class="popup" id="popup">
        <div class="popup-content">
            <img onclick= "close_popup()" class="closed" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg==" alt="" width="7%">
            <img src="sh.png" alt="" width="15%">
            <h3 id="registr_h">Register</h3>
            <p id="registr_p">Create your account. It's free and takes a minute</p>

                    
            <div class="inputs">
            <form class="needs-validation">

                <div class="name">
                    <input id="first_name" type="text" name="name" placeholder="First Name" required >
                    <input id="last_name" type="text" name="name" placeholder="Last Name" required >
                 </div>

                <div class="birth_date">
                    <input type="date" id="birthday" name="birthday" min="2000-01-02" required >
                </div>

                <div class="age">
                    <input type="number" id="age" name="age" min="15" max="99"placeholder="Age" required >
                </div>

                <div class="city">
                    <select id="cities" name="city">
                        <option value="kz" selected>Kazakhstan</option>
                        <option value="ru">Russia</option>
                        <option value="usa">USA</option>
                    </select>  
                </div>

                <div class="sex">
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label><br>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label><br>
                </div>

                <div class="email">
                    <input type="email" id="email" name="email" placeholder="Email" required >
                </div>

                <div class="pass">
                    <input type="password" id="pwd" name="pwd" placeholder="Password" required >
                </div>

                <div class="check">
                    <input type="checkbox" id="accept" name="" value="" checked>
                    <label for="accept"> I accept the <span style="color: green;">Terms of Use</span> & <span style="color: green;">Privacy Policy</span>.</label>
                </div>

                <div class="reg_now_btn">
                    <button id="btn_suc" class="btn btn-success" onclick="login(email.value)">Register Now</button>
                </div>
            </form>
            </div>

        </div>
        
    </div>

    
        
   


    <div class="page2">

        <div class="mid" id="mid">
        <h2 id="mid_h2">ABOUT <span style="color: #f63">US</span></h2>
        <p id="mid_p">Training studio is free CSS template for gyms amd fitness centers. U r <br> allowed to use
        this layout for ur business website<br></p>
        </div>

        <div class="row1">

        <div class="card1">

            <div class="img1">
                <img id="img1" src="ic.jpg" alt="">
            </div>

            <div class="info">
                <h1>Basic Fitness</h1>
                <p id="info_p">You’ll train all major bodyparts in each workout (as opposed to “splitting up” your training). Train three days this first week, performing just one exercise per bodypart in each session.
                    <br><a class="discover1" href="https://www.muscleandfitness.com/workout-plan/workouts/workout-routines/complete-mf-beginners-training-guide-plan/">Discover more</a></br>
                </p>
            </div>

        </div>


        <div class="card2">

            <div class="img2">
                <img id="img2" src="ic.jpg" alt="">
            </div>

            <div class="info">
                <h1>Basic Muscle Course</h1>
                <p id="info_p">Each goal involves lifting heavy things and eating the right foods, but the details are a little bit different. Here’s a primer to maximize your desired results.
                    <br><a class="discover2" href="https://www.mensjournal.com/health-fitness/how-build-muscle-basic-guide-beginners-0/">Discover more</a></br>
                </p>
            </div>

        </div>
        
        </div>

        <div class="row2">

        <div class="card3">

            <div class="img3">
                <img id="img3"src="ic.jpg" alt="">
            </div>

            <div class="info">
                <h1>New Gym Training</h1>
                <p id="info_p">This workout isn’t too difficult; though, for those new to health and fitness, it will certainly prove challenging. First of all you should pass Basic Fitness Course.
                    <br><a class="discover3" href="https://www.lifehack.org/688549/the-ultimate-workout-routines-for-men">Discover more</a></br>  
                </p>
            </div>

        </div>


        <div class="card4">

            <div class="img4">
                <img id="img4" src="ic.jpg" alt="">
            </div>

            <div class="info">
                <h1>Yoga Training</h1>
                <p id="info_p">So, you’re practicing yoga and feeling the amazing changes that it brings.  You’re part of an great community of people and feeling stronger, more flexible and centered.
                    <br><a class="discover4" href="https://feelbetteryoga.com/blog/yoga-teacher-training-guide">Discover more</a></br>  
                </p>
            </div>

        </div>
        
        </div>

        <div class="row3">

            <div class="card5">
    
                <div class="img5">
                    <img id="img5"src="ic.jpg" alt="">
                </div>
    
                <div class="info">
                    <h1>New Gym Training</h1>
                    <p id="info_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt accusantium perspiciatis, voluptas explicabo unde praesentium 
                        <br><a class="discover4" href="https://feelbetteryoga.com/blog/yoga-teacher-training-guide">Discover more</a></br> </p>
                        
                </div>
    
            </div>
    
    
            <div class="card6">
    
                <div class="img6">
                    <img id="img6" src="ic.jpg" alt="">
                </div>
    
                <div class="info">
                    <h1>Yoga Training</h1>
                    <p id="info_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt accusantium perspiciatis, voluptas explicabo unde praesentium 
                        <br><a class="discover4" href="https://feelbetteryoga.com/blog/yoga-teacher-training-guide">Discover more</a></br></p>
                     
                </div>
    
            </div>
            
            </div>

            <div class="top" >
                <img id="top" onclick= "return_top()" src="arrow.png"   alt="" >
            </div>


    </div>    


    <div class="page3" id="page3">

        <div class="head">

            <div class="head_img"></div>

            <div class="text_on_3rd">
                <h1 id="third_h">DON'T <span style="color:  #f63">THINK</span>,
                BEGIN <span id="third_span" style="color: #f63">TODAY</span>!</h1>
                <p id="third_p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div> 

        <div class="page3_part2">

            <div class="group_btn">

                <div class="btn1" id="btn1" onclick="change1()" onmouseover="big(this)" onmouseout="small(this)"> &#9758; First Training Class </div>

                <div class="btn2" id="btn2" onclick="change2()" onmouseover="big(this)" onmouseout="small(this)"> &#9758; Second Training Class </div>

                <div class="btn3" id="btn3" onclick="change3()" onmouseover="big(this)" onmouseout="small(this)"> &#9758; Third Training Class </div>

                <div class="btn4" id="btn4" onclick="change4()" onmouseover="big(this)" onmouseout="small(this)"> &#9758; Fourth Training Class </div>

                <div class="btn5" id="btn5" onclick="change5()" onmouseover="big(this)" onmouseout="small(this)"> &#9758; Fifth Training Class </div>

            </div>

            <div class="container1" id="container1">
                <div class="image_card">
                    <img id="image_card" src=" https://static01.nyt.com/images/2020/01/06/well/04run-gym/04run-gym-superJumbo.jpg" alt="">
                </div>
               
                <div class="title">
                    <h4 id="title">First Training Class</h4>
                </div>
                <div class="content">
                    <p id="content">Group training(Stretching, Aerobic Training, Mixed Training, Dancing)</p>
                </div>
                <div class="card_btn">
                    <a href="#page4" class="w3-btn w3-black" id="card_btn">VIEW SCHEDULE</a>
                </div>
            </div>

            <div class="container2" id="container2">
                <div class="image_card">
                    <img id="image_card" src="https://previews.123rf.com/images/4pmproduction/4pmproduction1710/4pmproduction171000427/89666143-young-couple-is-working-out-at-gym-with-weight-attractive-woman-and-handsome-muscular-man-are-traini.jpg" alt="">
                </div>
                <div class="title">
                    <h4 id="title">Second Training Class</h4>
                </div>
                <div class="content">
                    <p id="content">Arm Day(Exercises For Biceps, Triceps, Shoulders, Chest)</p>
                </div>
                <div class="card_btn">
                    <a href="#page4" class="w3-btn w3-black" id="card_btn">VIEW SCHEDULE</a>
                </div>
            </div>




            <div class="container3" id="container3">
                <div class="image_card">
                    <img id="image_card" src="https://previews.123rf.com/images/4pmproduction/4pmproduction1710/4pmproduction171000421/89666125-young-couple-is-working-out-at-gym-attractive-woman-and-handsome-muscular-man-trainer-are-training-i.jpg" alt="">
                </div>
                <div class="title">
                    <h4 id="title">Third Training Class</h4>
                </div>
                <div class="content">
                    <p id="content">Leg Day(Lunges, Squats, Deadlifts, Jumping Rope, Calf Raises)</p>
                </div>
                <div class="card_btn">
                    <a href="#page4" class="w3-btn w3-black" id="card_btn">VIEW SCHEDULE</a>
                </div>
            </div>

            <div class="container4" id="container4">
                <div class="image_card">
                    <img id="image_card" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/difficult-doesnt-mean-impossible-royalty-free-image-615883260-1537286061.jpg" alt="">
                </div>
                <div class="title">
                    <h4 id="title">Fourth Training Class</h4>
                </div>
                <div class="content">
                    <p id="content">Exercise With A Lot Of Weight(Bench Press, Deadlift, Squats)</p>
                </div>
                <div class="card_btn">
                    <a href="#page4" class="w3-btn w3-black" id="card_btn">VIEW SCHEDULE</a>
                </div>
            </div>

            <div class="container5" id="container5">
                <div class="image_card">
                    <img id="image_card" src="https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2018/02/people-at-the-gym-treadmill.jpeg" alt="">
                </div>
                <div class="title">
                    <h4 id="title">Fifth Training Class</h4>
                </div>
                <div class="content">
                    <p id="content">Cardio Training(Treadmill, Stepper, Exercise Bike, Ellipsoid, Rowing Msachines</p>
                </div>
                <div class="card_btn">
                    <a href="#page4" class="w3-btn w3-black" id="card_btn">VIEW SCHEDULE</a>
                </div>
            </div>

   
           



        </div>

    </div>

    <div class="page4" id="page4">
        <div class="p4_text">
            <h1>CLASSES <span style="color: #f63;">SCHEDULE </span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>
                Nesciunt excepturi quia corporis architecto iusto porro sint cupiditate iure consequuntur</p>
        </div>
        <div class="dates">
            <a href="#page4" id="m" onclick="change_content(this)">Monday</a> 
            <a href="#page4" id="tu" onclick="change_content(this)">Tuesday</a> 
            <a href="#page4" id="w" onclick="change_content(this)">Wednesday</a>
            <a href="#page4" id="th" onclick="change_content(this)">Thursday</a>
            <a href="#page4" id="fr" onclick="change_content(this)">Friday</a>
        </div>
        <div class="table">
            <table border="5">
                <tr>
                    <td class="td"  id="td">First Class</td>
                    <td class="td"  id="td1">10:00AM - 11:30AM</td>
                    <td class="td"  id="td2"></td>
                    <td class="td"  id="td3">N.Ergaliyev</td>
                </tr>
                <tr>
                    <td class="td"  id="td">Second Class</td>
                    <td class="td"  id="td4"></td>
                    <td class="td"  id="td5"></td>
                    <td class="td"  id="td6">E.Kim</td>
                </tr>
                <tr>
                    <td class="td"  id="td">Third Class</td>
                    <td class="td"  id="td7"></td>
                    <td class="td"  id="td8">2:00AM - 3:30AM</td>
                    <td class="td"  id="td9">A.Abdykerov</td>
                </tr>
                <tr>
                    <td class="td"  id="td">Fourth Class</td>
                    <td class="td"  id="td10"></td>
                    <td class="td"  id="td11"></td>
                    <td class="td"  id="td12">N.Imashev</td>
                </tr>
                <tr>
                    <td class="td"  id="td">Fifth Class</td>
                    <td class="td"  id="td13"></td>
                    <td class="td"  id="td14"></td>
                    <td class="td"  id="td15">A.Batyrov</td>
                </tr>
                
            </table>
        </div>

    </div>

    <div class="page5">

    </div>
    <div class="location_page" id="location_page">

        <div class="all">
            <h3>LOCATIONS</h3>
        </div>
    
        <div class="location1_row">
        <div class="location1">
            <div class="loc_image">
                <img id="loc_image1" src="https://zyroassets.s3.us-east-2.amazonaws.com/_SITE-ASSETS/m65grNl4zKSEEQrb/WeGym.png" alt="">
            </div>
            <div class="loc_txt">
                <h6>WeGym, Kutuzovski</h6> <br>
                <p class="fa"> <spann style="color: rgb(155, 155, 155);"> &#xf08d;</spann> <span id="all_loc">Russia, Moscow, Davydkovskaya Street, 3c1</span> </p><br>
                <p class="fa" id="p"> <spann style="color: rgb(155, 155, 155);"> &#xf017;</spann> <span id = "all_loc"> Opens at <b>06.30 AM - 00.00 AM</b></span></p><br>
                <a href="https://yandex.kz/maps/213/moscow/?filter=alternate_vertical%3ARequestWindow&ll=37.687324%2C55.755087&mode=search&oid=1367518322&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfGQUp6zxEJAETNTGGP530tAEhIJRPRIfeduiD8R7f4uEyuccD8oCkC3ngFIAVXNzMw%2BWABiTXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUGVyc29uYWxTY29yZS9TY29yZUZlYXR1cmVOYW1lPWZpbmFsX3Njb3JlX3JhdGVfaXNfeDIwYjRyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlYXJyYW5nZVJ1YnJpY0J5L1R5cGU9UFNjb3JlYjByZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlYXJyYW5nZVJ1YnJpY0J5L0Vhcmx5PTBiLnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUGVyc29uYWxTY29yZS9FbmFibGVkPTFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUmVhcnJhbmdlUnVicmljQnkvRHNzbVRocmVzaG9sZD0wLjdqAmt6cACdAc3MTD2gAQCoAQC9AR%2FpuIPCAYoB8tiKjAW%2F0rPqA4qNrKGpBMn8pZQEoc2C2AT4u%2Bf%2B9QWv%2FaqE8gLGna%2BGfZ2RucG3AsizqY8E2qviwAbpn9bD3AOj2ZGFB6n7uKKaAbP%2B5IgEhLSqv5IEpPqu184EkMOLg5cFlr6WkASqmZibrgHejoOaoAKn7d6l0Qadi4DQygPL25y%2FBtL4v7IE&sll=37.687324%2C55.755087&sspn=0.742659%2C0.252401&text=gym&z=10.96" id="map_btn">GET DIRECTION</a>
            </div>
        </div>
    
        <div class="location2">
            <div class="loc_image">
                <img id="loc_image2" src="https://zyroassets.s3.us-east-2.amazonaws.com/_SITE-ASSETS/m65grNl4zKSEEQrb/WeGym.png" alt="">
            </div>
            <div class="loc_txt">
                <h6>WeGym, Green</h6> <br>
                <p class="fa"> <spann style="color: rgb(155, 155, 155);"> &#xf08d;</spann> <span id = "all_loc"> Russia, Moscow, 1st Perova Polya Drive, 9c2</span></p><br>
                <p class="fa" id="p"> <spann style="color: rgb(155, 155, 155);"> &#xf017;</spann>  <span id = "all_loc">Opens at <b>06.30 AM - 00.00 AM</b></span></p> <br>
                <a href="https://yandex.kz/maps/213/moscow/?filter=alternate_vertical%3ARequestWindow&ll=37.687324%2C55.755087&mode=search&oid=1028450623&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfGQUp6zxEJAETNTGGP530tAEhIJRPRIfeduiD8R7f4uEyuccD8oCkC3ngFIAVXNzMw%2BWABiTXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUGVyc29uYWxTY29yZS9TY29yZUZlYXR1cmVOYW1lPWZpbmFsX3Njb3JlX3JhdGVfaXNfeDIwYjRyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlYXJyYW5nZVJ1YnJpY0J5L1R5cGU9UFNjb3JlYjByZWFycj1zY2hlbWVfTG9jYWwvR2VvL1JlYXJyYW5nZVJ1YnJpY0J5L0Vhcmx5PTBiLnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUGVyc29uYWxTY29yZS9FbmFibGVkPTFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUmVhcnJhbmdlUnVicmljQnkvRHNzbVRocmVzaG9sZD0wLjdqAmt6cACdAc3MTD2gAQCoAQC9AR%2FpuIPCAYoB8tiKjAW%2F0rPqA4qNrKGpBMn8pZQEoc2C2AT4u%2Bf%2B9QWv%2FaqE8gLGna%2BGfZ2RucG3AsizqY8E2qviwAbpn9bD3AOj2ZGFB6n7uKKaAbP%2B5IgEhLSqv5IEpPqu184EkMOLg5cFlr6WkASqmZibrgHejoOaoAKn7d6l0Qadi4DQygPL25y%2FBtL4v7IE&sll=37.687324%2C55.755087&sspn=0.742659%2C0.252401&text=gym&z=10.96" id="map_btn">GET DIRECTION</a>
            </div>
        </div>
        </div>
        <div id="map" style="width: 100%; height: 400px;"></div>
    </div>



    <div class="footer">

        
        <div class="footer_text">

       
            <img id="foot_img" width="12%" src="pngwing.com.png" alt="" >


            <div class="links">
                <div class="title1">
                    <h5>LINKS</h5>
                </div>
                <div class="title1_content">
                    <a href="#header">Homepage</a>
                    <a href="#mid">About us</a>
                    <a href="#page3">Classes</a>
                    <a href="#page4">Scedule</a>
                    <a href="#location_page">Location</a>
                    <a href="#" onclick="openInNewTab()">Online</a>
                </div>
            </div>

            <div class="contacts">
                <div class="title2">
                    <h5>CONTACTS</h5>
                </div>
                <div class="title2_content">
                    <p class="fa" id="ad">&#xf015; Addressssss</p>
                    <p class="fa">&#xf003; Hello@couvee.co.id</p>
                    <p class="fa">&#xf095; Phone num</p>
                </div>
            </div>

            <div class="socials">
                <div class="title3">
                    <h5>SOCIALS</h5>
                </div>
                <div class="title3_content">
                    <a href="https://www.instagram.com/couvee.idn/" class="fa">&#xf16d; couvee.idn</a>
                </div>
            </div>





        </div>
    </div>

    <div class="last_line">

        <div class="last_line_cont">
            <p>© 2019 Couvee</p>
        </div>
        
    </div>

    
    

     

<script src="script.js"></script>

</body>
</html>
