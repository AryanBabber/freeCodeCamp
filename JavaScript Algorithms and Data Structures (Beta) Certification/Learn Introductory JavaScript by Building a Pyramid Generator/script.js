const character = "#";

/*
removed in step 12

console.log(character);
character = "World";
console.log(character);
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);
*/

// removed in step 14
// let profession = "teacher";
// console.log(profession);
// let age;
// console.log(age);

const count = 8;
// console.log(count + 1);
// console.log(count - 1);
// console.log(count * 1);
// console.log(count / 1);

// let rows = ["Naomi", "Quincy", "CamperChan"];
const rows = [];

// removed in step 23
// console.log(rows[0]);
// rows[rows.length - 1] = 10;

// removed in step 25
// let cities = ["London", "New York", "Mumbai"];
// console.log(cities);
// cities[cities.length - 1] = "Mexico City";
// console.log(cities);

// removed in step 29
// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);
// let popped = rows.pop();
// console.log(popped);
// console.log(rows);

let inverted = true;

function padRow(rowNumber, rowCount) {
	return (
		" ".repeat(rowCount - rowNumber) +
		character.repeat(2 * rowNumber - 1) +
		" ".repeat(rowCount - rowNumber)
	);
}
// console.log(test);

// removed in step 56
// function addTwoNumbers(a, b) {
// 	return a + b;
// }
// const sum = addTwoNumbers(5, 10);
// console.log(sum);

// removed in step 63
// const call = padRow();
// console.log(call);

// step 76

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {rows.push(padRow(i, count));}
}

/*
removed in 84
if ("") {
	console.log("Condition is true");
} else if (5 > 10) {
	console.log("5 is less than 10");
} else {
	console.log("This is the else block");
}
*/
/*
while(rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}
*/
/*
for(let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}
*/

let result = "";
console.log(result);

for (const row of rows) {
	result = result + "\n" + row;
}
