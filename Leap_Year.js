function isLeap (year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "LeapYear" ;
            } else {
                return "Not leap year." ;
            }
        } else {
            return"Leap year";
        }
    }    else{
        return " not leap year";
   }
  
}
 var answer = isLeap(2024);
 console.log(answer);