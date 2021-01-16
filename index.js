 "use strict"
 function Register(){
     document.getElementById("lblName").innerHTML= document.getElementById("txtName").value;
     document.getElementById("lblDate").innerHTML = document.getElementById("date").value;
     document.getElementById("lblDay").innerHTML = document.getElementById("dayCount").value;
     document.getElementById("lblPersons").innerHTML = document.getElementById("peopleCount").value;
     var RoomType ="";
     var Total_Cost = 0;
     var Deluxe= document.getElementById("optDeluxe").value;
     var Suite= document.getElementById("optSuite").value;
     if (optDeluxe.checked){
         RoomType= Deluxe;
         Total_Cost = 2500;
     }
     if(optSuite.checked){
         RoomType = Suite;
         Total_Cost = 4000;
     }
     document.getElementById("lblRoom").innerHTML = RoomType;
     var amenitiesAC = document.getElementById("optAC").value;
     var amenitiesLocker = document.getElementById("optLocker").value;
     var Amenities = "";
     if(optAC.checked){
         Amenities += amenitiesAC + "<br>";
         Total_Cost += 1000 ;
     }
     if(optLocker.checked){
         Amenities += amenitiesLocker + "<br>";
         Total_Cost += 300 ;
     }
     document.getElementById("lblAmenities").innerHTML = Amenities;
     document.getElementById("lblAdvance").innerHTML = document.getElementById("Advance").value;
     var advance = document.getElementById("Advance").value;
     var balance = Total_Cost-advance;
     document.getElementById("lblBalance").innerHTML = balance ;
 }