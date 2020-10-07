function akanNames(){
    var birthdayDay=document.getElementById('bdate').value;
    var genders=document.getElementById('gender').value;
    var birthDay = new Date(birthdayDay);
    var dayOfTheWeek = birthDay.getDay();
    var ange=["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var boysNames=["Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Kwasi"];
    var girlsNames=["Adwoa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];
    
    var akan;
    var days;

    if (genders=="Select"){
        alert("Please enter your gender");
        return false;
}
if (birthdayDay===""){
        alert ("Please enter your birthday");
        return false;
}
    if (genders=="Female"){
    if (dayOfTheWeek==1){
            akan= girlsNames[0];
            days=ange[0];   
    }
else if (dayOfTheWeek==2){
        akan=  girlsNames[1];
        days=ange[1];
}
else if(dayOfTheWeek==3){
        akan=  girlsNames[2];
        days=ange[2];
}
else if(dayOfTheWeek==4){
        akan=  girlsNames[3];
        days=ange[3];
}
else if(dayOfTheWeek==5){
        akan=  girlsNames[4];
        days=ange[4];
}
else if(dayOfTheWeek==6){
        akan=  girlsNames[5];
        days=ange[5];
}
else {
        akan = girlsNames[6];
        days=ange[6];
}
}
 
else {
        if (dayOfTheWeek==1){
                akan = boysNames[0];
                days=ange[0];
        }

else if (dayOfTheWeek==2){
        akan = boysNames[1];
        days=ange[1];
}
else if (dayOfTheWeek==3){
        akan = boysNames[2];
        days=ange[2];
}
else if (dayOfTheWeek==4){
        akan = boysNames[3];
        days=ange[3];
}
else if (dayOfTheWeek==5){
        akan = boysNames[4];
        days=ange[4];
}
else if (dayOfTheWeek==6){
        akan = boysNames[5];
        days=ange[5];
}
else {
        akan = boysNames[6];
        days=ange[6];
}             
}



    document.getElementById("display").innerHTML= "You were born on " + " " + days + " and your Akan name is" + " " + akan;  
}
