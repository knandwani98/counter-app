let count = document.querySelector(".count");
let incBtn = document.querySelector("button.inc");
let decBtn = document.querySelector("button.dec");
let resetBtn = document.querySelector("button.reset");

let step5 = document.querySelector("button.five");
let step10 = document.querySelector("button.ten");
let step15 = document.querySelector("button.fifteen");

let max50 = document.querySelector("button.fifty");
let max100 = document.querySelector("button.hundred");
let max200 = document.querySelector("button.thundred");

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + (action.step || 1) <= action.max
        ? state + (action.step || 1)
        : state;

    case "dec":
      return state + (action.step || 1) <= action.max
        ? state - (action.step || 1)
        : state;

    case "reset":
      return 0;

    case "reset":
      return 0;

    default:
      return state;
  }
}

let store = Redux.createStore(reducer);
let initialStep = 1,
  initialMax = Infinity;

store.subscribe(() => {
  counter = store.getState();
  count.innerText = counter;
});

incBtn.addEventListener("click", () => {
  store.dispatch({
    type: "inc",
    step: initialStep,
    max: initialMax,
  });
});

decBtn.addEventListener("click", () => {
  store.dispatch({
    type: "dec",
    step: initialStep,
    max: initialMax,
  });
});

resetBtn.addEventListener("click", () => {
  store.dispatch({
    type: "reset",
  });
});

step5.addEventListener("click", (e) => {
  e.target.classList.add("active");
  step10.classList.remove("active");
  step15.classList.remove("active");
  initialStep = 5;
});

step10.addEventListener("click", (e) => {
  step5.classList.remove("active");
  e.target.classList.add("active");
  step15.classList.remove("active");

  initialStep = 10;
});

step15.addEventListener("click", (e) => {
  e.target.classList.add("active");
  step5.classList.remove("active");
  step10.classList.remove("active");

  initialStep = 15;
});

max50.addEventListener("click", (e) => {
  e.target.classList.add("active");
  max100.classList.remove("active");
  max200.classList.remove("active");

  initialMax = 50;
});

max100.addEventListener("click", (e) => {
  max50.classList.remove("active");
  e.target.classList.add("active");
  max200.classList.remove("active");

  initialMax = 100;
});

max200.addEventListener("click", (e) => {
  max50.classList.remove("active");
  max100.classList.remove("active");
  e.target.classList.add("active");

  initialMax = 200;
});
