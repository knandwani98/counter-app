let count = document.querySelector(".count");
let incBtn = document.querySelector("button.inc");
let decBtn = document.querySelector("button.dec");
let resetBtn = document.querySelector("button.reset");

let store = Redux.createStore(reducer);

let counter = store.getState();

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + (action.step || 1);

    case "dec":
      return state - (action.step || 1);

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
