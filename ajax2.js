/**
 * Basic AJAX using XMLHTTPRequest()
 * Getting Data from Text file.
 */
// change the title of page

// change the title of page
document.title = "AJAX - Fetch From JSON";
document.querySelector('h1').textContent = "AJAX Crash Course : Get Data From Local JSON";

// configure Buttons
var btnGetUser = document.getElementById('button');
btnGetUser.innerHTML = 'Get User';
var btnGetUsers = document.getElementById('button2');
btnGetUsers.innerHTML = 'Get Users';

// add event Listener
btnGetUser.addEventListener('click', loadUser);
btnGetUsers.addEventListener('click', loadUsers);

function loadUser() {
    // console.log('loadUser');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);

            var output = "";
            output += `<ul>
            <li>Id : ${data.id}</li>
            <li>Name : ${data.name}</li>
            <li>City : ${data.city}</li>
            </ul>`;
            // console.log(output);

            let divUser = document.createElement('div');
            // divUser.appendChild(document.createTextNode(output));
            divUser.innerHTML = output;
            divUser.classList.add('box');

            let container = document.querySelectorAll('.container');
            container[1].insertAdjacentElement('beforeend', divUser);

        }
    }
    xhr.send();
}

function loadUsers() {
    // console.log('loadUsers');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            var output = "<h2>All User List</h2>";

            for (let idx in data) {
                output += `<ul>
            <li>Id : ${data[idx].id}</li>
            <li>Name : ${data[idx].name}</li>
            <li>City : ${data[idx].city}</li>
            </ul><hr>`;
            }
            output = output.slice(0,-4); // removing last <hr>

            let divUser = document.createElement('div');
            // divUser.appendChild(document.createTextNode(output));
            divUser.innerHTML = output;
            divUser.classList.add('box');

            let container = document.querySelectorAll('.container');
            container[1].insertAdjacentElement('beforeend', divUser);
        }
    }
    xhr.send();
}