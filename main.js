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
    
]


//declaring question and answer variables

let questionParagraph = document.createElement("p")
    questionParagraph.id = "question";

let answerParagraph = document.createElement("p")
    answerParagraph.id = "answer";    
    // answerParagraph.style.display = "none"


// Adding question to question box
function displayCard (question) {
    let card = document.getElementById("card");
    card.innerHTML = null;

    answerParagraph.innerHTML = question.Answer
    answerParagraph.style.display = "none"
    
    questionParagraph.innerHTML = question.Question; 
    questionParagraph.style.display = "block"   

    card.appendChild(questionParagraph)
    card.appendChild(answerParagraph)
}

function toggleAnswer (){ 

    if(answerParagraph.style.display === "none") {
        answerParagraph.style.display = "block"
        questionParagraph.style.display = "none"
    } else {
        answerParagraph.style.display = "none"
        questionParagraph.style.display = "block"
    }
}


let currentQuestion = 0;

displayCard(cardContent[currentQuestion])


function changeQuestion(direction) {

    switch(direction) {
        case 'previous':
        currentQuestion--
        break;
        case 'next':
        currentQuestion++
        break;
    }

    displayCard(cardContent[currentQuestion])
}



// console.log(changeQuestion('next'))