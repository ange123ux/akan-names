function akanNames(){
    var DD=document.getElementById('date').value;
    var MM=document.getElementById('month').value;
    var YY=document.getElementById('year').value;
    var genders=document.getElementById('gender').value;
    var CC=Math.ceil(YY/100);
    
    var birthdayDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var boysNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var girlsNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    var day=parseFloat(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)+1;
    var dayOfTheWeek= day.toFixed(0);

 if (genders="Female" & dayOfTheWeek==0){
    var akan=girlsNames[0];
    var days=birthdayDay[0];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
 }
else if (genders="Female" & dayOfTheWeek==1){
    var akan=girlsNames[1];
    var days=birthdayDay[1];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="Female" & dayOfTheWeek==2){
    var akan=girlsNames[2];
    var days=birthdayDay[2];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="Female" & dayOfTheWeek==3) {
    var akan=girlsNames[3];
    var days=birthdayDay[3];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="Female" & dayOfTheWeek==4) {
    var akan=girlsNames[4];
    var days=birthdayDay[4];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="Female" & dayOfTheWeek==5) {
    var akan=girlsNames[5];
    var days=birthdayDay[5];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else (genders="Female" & dayOfTheWeek==6) {
    var akan=girlsNames[6];
    var days=birthdayDay[6];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}

if (genders="male" & dayOfTheWeek==0){
    var akan=boysNames[0];
    var days=birthdayDay[0];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;

else if (genders="male" & dayOfTheWeek==1){
    var akan=boysNames[1];
    var days=birthdayDay[1];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="male" & dayOfTheWeek==2){
    var akan=boysNames[2];
    var days=birthdayDay[2];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="male" & dayOfTheWeek==3){
    var akan=boysNames[3];
    var days=birthdayDay[3];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="male" & dayOfTheWeek==4){
    var akan=boysNames[4];
    var days=birthdayDay[4];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else if (genders="male" & dayOfTheWeek==5){
    var akan=boysNames[5];
    var days=birthdayDay[5];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
else (genders="male" & dayOfTheWeek==6){
    var akan=boysNames[6];
    var days=birthdayDay[6];
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;}
}
