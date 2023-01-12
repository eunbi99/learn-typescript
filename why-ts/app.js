// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typeof {object} Address
 * @property {string} street
 * @property {city} city
 */

/**
 * @typedef  {object} User
 * @property {string} name
 * @property {stirng} email
 * @property {Address} adress 
 */

/**
 * 
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street; // addres 로 오타를 내게 되면 에러가 발생한다 
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
