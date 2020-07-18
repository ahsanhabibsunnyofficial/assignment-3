/* 
=============================================
Assignment -3
Topic : Problem Solving assignment with JS
=============================================
*/




/*========= Feet to Mile Covert=========== */


var feet = 100;


function feetToMile(Feet) {
    var mile = .000189 * Feet; // as 1 Feet = .000189 Mile
    return mile;

}

if (feet < 0)
    console.log("Feet Value  should not less than 0.. Please Give a valid Value...");
else
    console.log(feet + " Feet = " + feetToMile(feet).toFixed(3) + " Mile");









/*========= Number of Wood Calculation =============*/


var chair = 30;
var table = 10;
var bed = 6;

function woodCalculator(chair, table, bed) {
    var numOfWoodUseChair = 1 * chair; //as We know for 1 chair we need 1 cubic wood
    var numOfWoodUseTable = 3 * table; //As we know for 1 table we need 3 cubic wood
    var numOfWoodUseBed = 5 * bed; //As we know for 1 bed we need 5 cubic wood

    var total = numOfWoodUseChair + numOfWoodUseTable + numOfWoodUseBed;
    return total;

}

if (chair < 0 || table < 0 || bed < 0)
    console.log("Number of chair or table or bed should not negative..Please Enter a Valid Value..");

else
    console.log("For " + chair + " Chair " + table + " Table " + bed + " Bed You Need " + woodCalculator(chair, table, bed) + " Cubic Wood");




/*======= Number of Brick  Calculation ========= */


var nuOfFloors = 100;

function brickCalculator(floor) {

    if (floor <= 10)
        var noOfBricks = floor * 15 * 1000; /*as less than or equal 10 floor per floor is 15 feet and per feet need 1000 bricks */
    else if (floor <= 20)
        var noOfBricks = (10 * 15 * 1000) + ((floor - 10) * 12 * 10000); /*as from 11 floor to 20 floor per floor is 12 feet */
    else if (floor > 20)
        var noOfBricks = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000); /*From 21 floor per floor is 10 feet */

    return noOfBricks;
}
if (nuOfFloors < 0)
    console.log("Floor Value should be larger than 0.... Please Try again...");

else
    console.log("For " + nuOfFloors + " Floor Buildings You Need " + brickCalculator(nuOfFloors) + " Bricks");



/*==============Find the name of Tiny Friend====================*/

var nameOfFriends = ["Alhaj", "Nadia", "Rupa", "Zumman", "Tinni", "Asif", "Riya", "Kobir", "Akhi Moni", "Tazin", "Sharmin", "Sabrina", "Kona", "Rakib"];


function tinyFriends(name) {
    var tinyName = "";

    var minLength = 99999999;


    for (var i = 0; i < nameOfFriends.length; i++) {
        var length = nameOfFriends[i].length;

        if (length < minLength) {
            minLength = length;
            tinyName = nameOfFriends[i];
        }

    }

    return tinyName;
}

if (nameOfFriends.length < 1)
    console.log("Array should not empty...");

else
    console.log("My Tiny Name Friend is "+tinyFriends(nameOfFriends));