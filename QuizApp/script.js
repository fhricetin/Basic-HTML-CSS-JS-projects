const questions = [
    {
        question: `Who is Anakin Skywalker when he goes to the dark side?`,
        answer1:'Darth Sidious',
        asnwer2:'Darth Tyrannus',
        asnwer3:'Darth Vader',
        answer4:'Darth Maul',
        correct:'answer3'
    },

    {
        question: `How many words are there in the English language?`,
        answer1:'2 Million+',
        asnwer2:'170.000',
        asnwer3:'70.000',
        answer4:'500.000',
        correct:'answer4'
    },

    {
        question: `Which film of The Beatles was a cartoon?`,
        answer1:'Help',
        asnwer2:'Let it be',
        asnwer3:'Magical history tour',
        answer4:'Yellow submarine',
        correct:'answer4'
    }
    
]

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const answers = document.querySelectorAll('.answer');
const submitButton = document.getElementById('submit');

let counter = 0;
let score = 0;

askQuestion();

function askQuestion(){

    clearRadioButtons();

    const questionObject = questions[counter];

    question.innerHTML = questionObject.question;
    a_text.innerHTML = questionObject.answer1;
    b_text.innerHTML = questionObject.asnwer2;
    c_text.innerHTML = questionObject.asnwer3;
    d_text.innerHTML = questionObject.answer4;
    
}

function getAnswer(){
    let answer =undefined;

    answers.forEach((i) => {
        if (i.checked) {
            answer = i.id;
        }
    });

    return answer;

}

submitButton.addEventListener("click", function(){

    const answer = getAnswer();


    if(answer){

        if(answer === questions[counter].correct){
            score++;
        }

        let scorePercent =(score/questions.length*100).toFixed(2);

        counter++;
        if(counter < questions.length ){
            askQuestion();
        }
        else{  quiz.innerHTML = `
        <h2>Your score: ${scorePercent}/100 </h2>
        
        <button id = "submit" onclick="location.reload()">Reload</button>
    `; }
    
    }
})


/* Reseting buttons for new question after submitting the answer */
function clearRadioButtons(){
    var ele = document.querySelectorAll("input[type=radio]");
     for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
     }
  }

 






