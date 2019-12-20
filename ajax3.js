/**
 * Basic AJAX using XMLHTTPRequest()
 * Working with external API.
 */
// change the title of page

// change the title of page
document.title = "AJAX - Work With API";
document.querySelector('h1').textContent = "AJAX Crash Course : Work With External API";

// configure Buttons
var btnGetUser = document.getElementById('button');
btnGetUser.innerHTML = 'Get User From API';

var btnGetUsers = document.getElementById('button2');
btnGetUsers.hidden = true;

// add event listener to buitton
btnGetUser.addEventListener('click', loadUser);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function() {
        if(this.status == 200){
            let users = JSON.parse(this.responseText);
            console.log(users)
            var output = "<h2>Github Users</h2>";
            for(let index in users){
                output += `<div class="users">
                <img src="${users[index].avatar_url}" alt="${users[index].login}" title="${users[index].login}" width="90" height="90">
                <ul>
                <li>ID : ${users[index].id}</li>
                <li>Username: <a href="${users[index].html_url}" target="_blank"> ${users[index].login}</a></li>
                </ul>
                </div>`;
            }
            // output = output.slice(0,-4);

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