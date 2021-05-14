var textInput = document.querySelector("#text-input");
var buttonConverter = document.querySelector(".btn-converter");
var textOutput = document.querySelector(".text-output");

/*var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";*/
var serverUrl ="https://api.funtranslations.com/translate/groot.json";

function constructUrl(text){
    return serverUrl+"?"+"text="+text;
}
function errorHandler(error){
    alert("Error occured:"+error);
}

function clickHandler(){
    fetch(constructUrl(textInput.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        textOutput.innerText = translatedText
    })
    .catch(errorHandler);
}

buttonConverter.addEventListener("click",clickHandler);