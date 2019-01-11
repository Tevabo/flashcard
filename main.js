const questionsList = [
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



// Adding question to question box
function displayQuestion (question) {
    let card = document.getElementById("card")
    card.innerHTML = null;

    let questionParagraph = document.createElement("p")
    questionParagraph.id = "question"
    questionParagraph.innerHTML = question.Question

    card.appendChild(questionParagraph)

    console.log(card)
}



let currentQuestion = 0;

displayQuestion(questionsList[currentQuestion])

function changeQuestion(direction) {

    switch(direction) {
        case 'previous':
        currentQuestion--
        break;
        case 'next':
        currentQuestion++
        break;
    }

    displayQuestion(questionsList[currentQuestion])
}

// console.log(changeQuestion('next'))