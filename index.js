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

    var akan;
    var days;
 if (genders="Female" & dayOfTheWeek==0){
        akan=girlsNames[0];
        days=birthdayDay[0];
    
 }
else if (genders="Female" & dayOfTheWeek==1){
        akan=girlsNames[1];
        days=birthdayDay[1];
    
}
else if (genders="Female" & dayOfTheWeek==2){
        akan=girlsNames[2];
        days=birthdayDay[2];
   
}
else if (genders="Female" & dayOfTheWeek==3) {
        akan=girlsNames[3];
        days=birthdayDay[3];
    
}
else if (genders="Female" & dayOfTheWeek==4) {
        akan=girlsNames[4];
        days=birthdayDay[4];
   
}
else if (genders="Female" & dayOfTheWeek==5) {
        akan=girlsNames[5];
        days=birthdayDay[5];
    
}
else (genders="Female" & dayOfTheWeek==6) {
        akan=girlsNames[6];
        days=birthdayDay[6];
    
}

if (genders="male" & dayOfTheWeek==0){
        akan=boysNames[0];
        days=birthdayDay[0];
    
}
else if (genders="male" & dayOfTheWeek==1){
        akan=boysNames[1];
        days=birthdayDay[1];
    
}
else if (genders="male" & dayOfTheWeek==2){
        kan=boysNames[2];
        days=birthdayDay[2];
    
}
else if (genders="male" & dayOfTheWeek==3){
        akan=boysNames[3];
        days=birthdayDay[3];
    
}
else if (genders="male" & dayOfTheWeek==4){
        akan=boysNames[4];
        days=birthdayDay[4];
    
}
else if (genders="male" & dayOfTheWeek==5){
        akan=boysNames[5];
        days=birthdayDay[5];
    
}
else (genders="male" & dayOfTheWeek==6){
        akan=boysNames[6];
        days=birthdayDay[6];
}
    document.getElementById('display').innerHTML= "You were born on " + " " + days + " and your Akan Name is " + " " + akan;
}
