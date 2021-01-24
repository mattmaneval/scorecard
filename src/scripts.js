const calculateFrontButton = document.querySelector('.calculate-front');
const calculateBackButton = document.querySelector('.calculate-back');
const calculateTotalButton = document.querySelector('.calculate-total');
const inputs = document.querySelectorAll('.hole input');

const calculateFront = () => {
  const hole1 = document.getElementById('1');
  const hole2 = document.getElementById('2');
  const hole3 = document.getElementById('3');
  const hole4 = document.getElementById('4');
  const hole5 = document.getElementById('5');
  const hole6 = document.getElementById('6');
  const hole7 = document.getElementById('7');
  const hole8 = document.getElementById('8');
  const hole9 = document.getElementById('9');

  const frontTotal = Number(hole1.value) + Number(hole2.value) + Number(hole3.value)
    + Number(hole4.value) + Number(hole5.value) + Number(hole6.value)
    + Number(hole7.value) + Number(hole8.value) + Number(hole9.value);

  displayTotal = document.querySelector('.front-nine-total');
  displayTotal.textContent = frontTotal;
  console.log(frontTotal);
  return frontTotal;
}

const calculateBack = () => {
  const hole10 = document.getElementById('10');
  const hole11 = document.getElementById('11');
  const hole12 = document.getElementById('12');
  const hole13 = document.getElementById('13');
  const hole14 = document.getElementById('14');
  const hole15 = document.getElementById('15');
  const hole16 = document.getElementById('16');
  const hole17 = document.getElementById('17');
  const hole18 = document.getElementById('18');

  const backTotal = Number(hole10.value) + Number(hole11.value) + Number(hole12.value)
    + Number(hole13.value) + Number(hole14.value) + Number(hole15.value)
    + Number(hole16.value) + Number(hole17.value) + Number(hole18.value);

  displayTotal = document.querySelector('.back-nine-total');
  displayTotal.textContent = backTotal;
  console.log(backTotal);
  return backTotal;
}

const calculateTotal = () => {
  displayTotal = document.querySelector('.score-combined');
  displayTotal.textContent = calculateFront() + calculateBack();
  console.log(calculateFront() + calculateBack());
}

calculateFrontButton.addEventListener('click', calculateFront);
calculateBackButton.addEventListener('click', calculateBack);
calculateTotalButton.addEventListener('click', calculateTotal);
