window.addEventListener("load", bootAll);
const payload = {};
function bootAll() {
  const taskEl = document.querySelector("#task");
  const dateEl = document.querySelector("#task_date");
  const timeEl = document.querySelector("#task_time");
  const placeEl = document.querySelector("#task_place");
  const checkEl = document.querySelector("#important_task_check");

  handleCreateAndHandleEventListener(taskEl, dateEl, timeEl, placeEl, checkEl);
  //   setTimeout(() => {
  fillIfALreadyExists(taskEl, dateEl, timeEl, placeEl, checkEl);
  //   }, 9000);

  const btn = document.querySelector("#form_btn");
  btn.addEventListener("click", (e) => {
    localStorage.setItem("users_details", JSON.stringify(payload));
  });
}

function fillIfALreadyExists(...itemsArr) {
  if (localStorage.getItem("users_details")) {
    const userDetail = JSON.parse(localStorage.getItem("users_details"));
    console.log(userDetail, "already filled details");
    itemsArr.forEach((el) => {
      console.log(el, "el");
      const { name, value } = el.target;
      el.innerText = userDetail[name];
    });
  }
}

function handleCreateAndHandleEventListener(...items) {
  items.forEach((el) => {
    inputHandler(el);
  });
}

function inputHandler(domElement) {
  domElement.addEventListener("keyup", (e) => {
    const { name, value } = e.target;
    payload[name] = value;
    console.log(payload, "payload realtime");
  });
}
