let count = document.querySelector(".count");
let incBtn = document.querySelector("button.inc");
let decBtn = document.querySelector("button.dec");
let resetBtn = document.querySelector("button.reset");

let step5 = document.querySelector("button.five");
let step10 = document.querySelector("button.ten");
let step15 = document.querySelector("button.fifteen");

let store = Redux.createStore(reducer);

let counter = store.getState();

function reducer(state = 0, action) {
  action.step = 1;
  switch (action.type) {
    case "inc":
      return state + action.step;

    case "dec":
      return state - action.step;

    case "reset":
      return 0;

    default:
      return state;
  }
}

store.subscribe(() => {
  counter = store.getState();
  count.innerText = counter;
});

incBtn.addEventListener("click", () => {
  store.dispatch({
    type: "inc",
  });
});

decBtn.addEventListener("click", () => {
  store.dispatch({
    type: "dec",
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
  store.dispatch({
    step: 5,
  });
});

step10.addEventListener("click", (e) => {
  step5.classList.remove("active");
  e.target.classList.add("active");
  step15.classList.remove("active");

  store.dispatch({
    step: 10,
  });
});

step15.addEventListener("click", (e) => {
  e.target.classList.add("active");
  step5.classList.remove("active");
  step10.classList.remove("active");

  store.dispatch({
    step: 15,
  });
});
