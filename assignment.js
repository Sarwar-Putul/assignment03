//https://github.com/Sarwar-Putul/assignment03



//Ans. to the question no-1

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}//kilometer should be numeric and positive.




//Ans. to the question no-2

function budgetCalculator(product){
    var price1 = watch*50;
    var price2 = phone*100;
    var price3 = computer*500;
    var total = price1 + price2 + price3;
    return total;
}




//Ans. to the question no-3

function hotelCost(days){
    var money =0;
    if(days<=10){
        money = days * 100;
    }
    else if(days<=20){
        var firstDays = 10 * 100;
        var remaining = days - 10;
        var middleDays = remaining * 80;
        money = firstDays + middleDays;
    }
    else{
        var firstDays = 10 * 100;
        var middleDays = 10 * 80;
        var remaining = days - 20;
        var lastDays = remaining * 50;
        money = firstDays + middleDays + lastDays;
    }
    return money;
}// Days can not be negative.





//Ans. to the question no-4

var friends = ["Betu", "Moyna", "Nahiyaan", "Krishan", "Sarwar Putul", "Sharaf Uddin Mohammad sarwar", "Putul", "SP"];
function megaFriend(friends){
    var megaFriend = "";
    for (var i = 0; i < friends.length; i++) {
      if (friends[i].length > megaFriend.length) {
        var megaFriend = friends[i];
        longest = friends[i];
      }
    }
    return longest;
}






// var cost = hotelCost(33);
// console.log(cost);
// var result = budgetCalculator(30);
// console.log(result);
// var xMeter = kilometerToMeter(10);
// console.log(xMeter);
// var longest = megaFriend(friends);
// console.log(longest);