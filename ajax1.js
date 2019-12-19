/**
 * Basic AJAX using XMLHTTPRequest()
 * Getting Data from Text file.
 */
// change the title of page

document.title = "AJAX - Fetch From Text File";

document.querySelector('h1').textContent = "AJAX Crash Course : Get Data From Text File";


//  add event listener to button

var btn = document.getElementById('button');
btn.addEventListener('click', loadText);


function loadText() {
    // console.log('Button Clicked');
    
    // Initialize XHR Object
    var xhr = new XMLHttpRequest();

    // OPEN - method type, url/text file, async: true/false
    xhr.open('GET', 'sampleFile.txt', true);

    //  on Progress Optional for showing the loader
    // xhr.onprogress = function(e){
    //     console.log(xhr.readyState);
    //     let progressBar = document.getElementsByTagName('progress');
    //     if(e.lengthComputable){
    //         progressBar.max = e.total;
    //         progressBar.value = e.loaded;
    //     }
    // }

    // define onload 
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            let msg = document.createElement('div');
            msg.classList.add('box');
            msg.appendChild(document.createTextNode(this.responseText))

            let container = document.querySelectorAll('.container');
            container[1].insertAdjacentElement('beforeend',msg);
        }
    
    // onerror to handle some error
    xhr.onerror = function(){
        console.log("Request Error");
    }
    }

    // send request
    xhr.send();
}



/**
 * HTTP Statues
 * ------------------------------------------------------------------------------- 
 * 1xx: Informational - Request received, continuing process
 * 2xx: Success - The action was successfully received, understood, and accepted
 * 3xx: Redirection - Further action must be taken in order to complete the request
 * 4xx: Client Error - The request contains bad syntax or cannot be fulfilled
 * 5xx: Server Error - The server failed to fulfill an apparently valid request
 * 
 * --------------------------------------------------------------------------------
 * 200 : "OK"
 * 
 * 400 : "Bad Request"
 * 403 : "Forbidden"
 * 404 : "Not Found"
 * 
 * 500 : "Server Error"
 * 501 : "Not Implemented"
 * 504 : "Gateway Timeout"
 * ---------------------------------------------------------------------------------
 *  readyState Values
    0: request not initialized 
    1: server connection established
    2: request received 
    3: processing request 
    4: request finished and response is ready
 */

