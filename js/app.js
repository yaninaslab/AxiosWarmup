
function call_apis() {

    axios.request({
        url: "https://thatcopy.pw/catapi/rest/"
    }).then(inject_success).catch(inject_failed);

    axios.request({
        url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    }).then(quote_success).catch(quote_failed);

}

function inject_success(response) {
    var container = document.getElementById('container');
    var img = document.createElement("img");
    img.setAttribute("src", response['data']['url']);
    container.appendChild(img);
   
}

function inject_failed(error) {
    var container = document.getElementById('container');
    var error_message = document.createElement("h1");
    error_message.innerText = "Sorry, something went wrong. Please refresh the page.";
    container.appendChild(error_message);
}

/*axios.request({
    url: "https://thatcopy.pw/catapi/rest/"
}).then(inject_success).catch(inject_failed);*/

function quote_success (response) {
    var quote_section = document.getElementById('quote_section');
    var quote = document.createElement("p");
    quote.innerText = response['data'][0]['quote'];
    quote_section.appendChild(quote);

}

function quote_failed(error) {
    var quote_section = document.getElementById('quote_section');
    var error_message = document.createElement("h1");
    error_message.innerText = "Sorry, something went wrong. Please refresh the page.";
    quote_section.appendChild(error_message);

}

/*axios.request({
    url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
}).then(quote_success).catch(quote_failed);*/

var api_button = document.getElementById("api_button");
api_button.addEventListener('click', call_apis);
