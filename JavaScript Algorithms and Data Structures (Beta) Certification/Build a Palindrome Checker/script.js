const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
	let plainStr = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
	return plainStr === plainStr.split("").reverse().join("");
};

checkBtn.addEventListener("click", () => {
	let input = textInput.value;
	if (!input) alert("Please input a value");
	else
		result.innerText = `${input} is ${
			!isPalindrome(input) ? "not " : ""
		}a palindrome`;
});
