/*JAVASCRIPT TEST REVIEW*/
/*Talon Boyd Kauhanemakamaeonalahuihenui Navarez*/
/*11232016*/

//JAVASCRIPT TEST REVIEW//
//Talon Boyd Kauhanemakamaeonalahuihenui Navarez//
//11232016//

//Variables//
var knight = "Arthur";
var maiden = "Morgana";
var monster = "Dragon";

var knight = "Arthur"
var maiden = "Morgana"
var monster = "Dragon"
//Array//
var weaponchest = ["Mace","Sorcerer's Stone","Excalibur"];

Array weaponchest = "Mace","Sorcerer's Stone","Excalibur"
//Object//
var hero = {
	wizard : "Merlin",
	weapon : weaponchest[1],
	power : 9001
}

Object hero
//Hail the King//
function SwordInTheStone(worthy){
	if (worthy == "Arthur"){
		console.log("We have found our King" + worthy);
	} else {
		console.log("We must find keep searching, for" + worthy + "is unworthy");
	}
}
SwordInTheStone(knight);

function SwordInTheStone(w){
	if worthy == ("Arthur"){
		console.log("We have found our King" + worthy)
	}else{
		console.log("We must find keep searching, for" + worthy + "is unworthy")
	}
}function SwordInTheStone

//Hail the King and Queen//
function truelove(king, queen){
	if (queen == "guinevere" && king == "Arthur"){
		console.log("On this day, our" + king + " " + "and" + " " + queen + "shall rule happily ever after!");
	} else {
		console.log("We must keep searching, for true love must reign over Camelot");
	}
}
truelove(knight, maiden);

function TrueLove(k,q){
	if king + queen = ("guinevere","Arthur"){
		console.log("On this day, our king and queen shall rule happily ever after!")
	}else{
		console.log("We must keep searching, for true love must reign over Camelot")
	}
}

//Merlin and Monster//
function EpicBattle(wizard,enemy,power){
	if(power <= 15){
		console.log("OUR" + wizard + "HAS FALLEN!!!");
	} else if(power >= 16 && power <= 40){
		console.log(wizard + "HAS ALMOST SLAIN" + enemy + " !!!");
	} else {
		console.log("OUR" + wizard + "HAS SLAIN THE" + enemy + "!!!");
	}
}
EpicBattle(hero.wizard, monster, hero.power);

function EpicBattle(c,e,p){
	if power <= 15{
		console.log("OUR WIZARD HAS FALLEN!!!")
	}
	
	else if power >= 16 <= 40{
		console.log("WIZARD HAS ALMOST SLAIN ENEMY!!!")
	}else{
		console.log("OUR WIZARD HAS SLAIN THE ENEMY!!!")
	}
}