// callback => function passed onto another function
// it is used for async programming
// we pass function as a call back so that it can be used later sometime in the code

const div = document.querySelector("all");

const users = [
  { name: "Sunil", age: 25 },
  { name: "Amit", age: 26 },
];

function getUsers() {
  // imitate asynchronous behaviour

  setTimeout(() => {
    let result = "";
    users.forEach((user, index) => {
      result = result + `<li>${user.name}</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}

function createUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 2000);
}

createUser(
  {
    name: "Rahul",
    age: 33,
  },
  getUsers
);
