const cardContent = [
    {
        Question: "'Let' and 'Const' are examples of ...",
        Answer: "Variables"
    },
    {
        Question: "The 'frontend' refers to which part of a program?",
        Answer: "The part of the program that the user can see (or even interact with)"
    },
    {
        Question: "What's a shorter way of writing i = i + 1?",
        Answer: "i++;"
    },
    {
        Question: "How do you write \"Hello World\" in an alert box?",
        Answer: "alert(\"Hello World\");"
    },
    {
        Question: "True or false: you can declare a function() without naming the function()",
        Answer: "True"
    },
    {
        Question: "True or false: Rails, Django and Flask are JavaScript frameworks",
        Answer: "False"
    },
    {
        Question: "What's the difference between a function parameter and an argument?",
        Answer: "Parameters are used in function declaration, arguments are passed into the function"
    },
]

let currentQuestion = 0;


function deleteCard() {
    cardContent.splice(currentQuestion, 1)
    
    displayCard()
}

function shuffleCard() { 
    let random = Math.floor(Math.random() * cardContent.length)
    displayCard(cardContent[random])
}

//declaring question and answer variables
let questionParagraph = document.createElement("p")
    questionParagraph.id = "question";

let answerParagraph = document.createElement("p")
    answerParagraph.id = "answer";    


// Changing the counter text
function changeCounter() {
    let counter = document.getElementById("counter")
    counter.innerHTML = `Question ${currentQuestion + 1} of ${cardContent.length}`
}

// Adding question to question box
function displayCard (question) {

    changeCounter()

    let card = document.getElementById("card");
    card.innerHTML = null;

    answerParagraph.innerHTML = question.Answer
    answerParagraph.style.display = "none"
    
    questionParagraph.innerHTML = question.Question; 
    questionParagraph.style.display = "block"   

    card.appendChild(questionParagraph)
    card.appendChild(answerParagraph)
}

// Toggle between answer and question
function toggleAnswer (){ 

    if(answerParagraph.style.display === "none") {
        answerParagraph.style.display = "block"
        questionParagraph.style.display = "none"
    } else {
        answerParagraph.style.display = "none"
        questionParagraph.style.display = "block"
    }
}



function toggleForm() {
    const form = document.getElementById("add-question")
    if(form.style.display === "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }
}

function isValidInput(question, answer) {
    if(question.trim().length == 0 || answer.trim().length == 0) {
        alert("You forgot the values")
        return false
    }

    return true
}

function onSubmit() {
    event.preventDefault();

    const question = document.getElementById("submitQuestion")
    const answer = document.getElementById("submitAnswer")

    if(!isValidInput(question.value, answer.value)) {
        return
    }

    cardContent.push({
        Question: question.value,
        Answer: answer.value
    });

    // Updating the counter
    changeCounter()


    question.value = null
    answer.value = null
}



// Changing the current question
function changeQuestion(direction) {

    switch(direction) {
        case 'previous':
        if(currentQuestion > 0) {
            currentQuestion--
        }
        break;
        case 'next':
        if(currentQuestion < cardContent.length -1){
            currentQuestion++
        } 
        break;
    }

    displayCard(cardContent[currentQuestion])
    
}


displayCard(cardContent[currentQuestion])