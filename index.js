// LER MAIS OU MENOS

var state = "more";
var showMoreText = document.getElementById("moreText");
showMoreText.style.display = "none";


function toggleText(){
    var abstractArea = document.getElementById("abstract");    
    var button = document.getElementById("showMore");

    if(state == "more"){
        showMoreText.style.display = "inline";
        button.innerHTML = "ver menos";
        state = "less";
        abstractArea.style.height = "440px";
    }
    else{
        showMoreText.style.display = "none";
        state = "more";
        abstractArea.style.height = "200px";
        button.innerHTML = "ver mais";
    }
    
}

//  FORMULÁRIO CRIAR TÓPICO
var createTopicButton = document.getElementById("new-topic");
var div = document.getElementById("create-topic");
var hiddenForm = document.getElementById("create-topic-hidden");
var divSent = document.getElementById("form-sent");
function createTopic(){
    div.style.display = "none";
    hiddenForm.style.display = "inline";
    divSent.style.display = "none";
}

function sendForm(){
    hiddenForm.style.display = "none";
    divSent.style.display = "inline";
}

// MOSTRAR RESPOSTAS

var answers = document.getElementById('answers');

// $(".question").click(toggleAnswers());

// console.log($(".question"));
var question = document.querySelector('.question');

question.addEventListener("click",toggleAnswers());


function toggleAnswers(){
    if(answers.style.display == "none"){
        answers.style.display = "inline";
    }
    else{
        answers.style.display = "none";
    }
    
}
