let counterId = 1;

function addCounter() {
counterId++;
const container = document.getElementById("counter");

const counterDiv = document.createElement("div");
counterDiv.classList.add("counter");
counterDiv.id = "counter" + counterId;

counterDiv.innerHTML = `
<span class="counter">Counter ${counterId}</span>
<div class="counter">
<button class="decrement" onclick="decrementCounter('counter${counterId}')">-</button>
<span class="count" id="count${counterId}">0</span>
<button class="increment" onclick="incrementCounter('counter${counterId}')">+</button>
<button class="reset" onclick="resetCounter('counter${counterId}')">Reset</button>
<button class="delete" onclick="deleteCounter('counter${counterId}')">Delete</button>
</div>
`;

container.appendChild(counterDiv);
}

function incrementCounter(counterId) {
var counterElement = document.getElementById(counterId);
var countElement = counterElement.querySelector(".count");
var currentCount = parseInt(countElement.textContent);
countElement.textContent = currentCount + 1;
}

function decrementCounter(counterId) {
var counterElement = document.getElementById(counterId);
var countElement = counterElement.querySelector(".count");
var currentCount = parseInt(countElement.textContent);
countElement.textContent = currentCount - 1;
}

function resetCounter(counterId) {
var counterElement = document.getElementById(counterId);
var countElement = counterElement.querySelector(".count");
countElement.textContent = "0";
}

// function deleteCounter(counterId) {
// const counterDiv = document.getElementById(counterId);
// counterDiv.parentNode.removeChild(counterDiv);
// }