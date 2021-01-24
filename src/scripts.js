const items = Array.from(document.querySelectorAll(`input[type="number"]`));
const calculateFrontButton = document.querySelector('.calculate-front');
const calculateBackButton = document.querySelector('.calculate-back');
const calculateTotalButton = document.querySelector('.calculate-total');

const frontScore = document.querySelector('.front-nine h4');
const backScore = document.querySelector('.back-nine h4');
const combinedScore = document.querySelector('.score h4');

function calculate(e) {
	e.preventDefault();

	if(e.target === calculateFrontButton) {
		const getFront = items
			.filter(item => item.id <= 9)
			.map(item => parseInt(item.value))
			.reduce((accumulator, currentValue) => accumulator + currentValue);
		// console.log(getFront);
		return getFront > 0 
		? frontScore.textContent = `Front Nine Score: ${getFront}`
		: frontScore.textContent = `Enter your scores`;
	} else if(e.target === calculateBackButton) {
		const getBack = items
			.filter(item => item.id > 9)
			.map(item => parseInt(item.value))
			.reduce((accumulator, currentValue) => accumulator + currentValue);
		// console.log(getBack);
		

		return getBack > 0 
		? backScore.textContent = `Back Nine Score: ${getBack}`
		: backScore.textContent = `Enter your scores`;
	} else {
		totalScore = items
		.map(item => parseInt(item.value))
		.reduce((accumulator, currentValue) => accumulator + currentValue);
		// console.log(totalScore);
		return totalScore > 0
		? combinedScore.textContent = `18 Hole Score: ${totalScore}`
		: combinedScore.textContent = `Enter your scores for front and back nines`;
	}
}

calculateFrontButton.addEventListener('click', calculate);
calculateBackButton.addEventListener('click', calculate);
calculateTotalButton.addEventListener('click', calculate);