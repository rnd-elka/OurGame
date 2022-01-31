var questions = [];

function MakeQuestion(question, answer1, answer2, answer3, correctAnswer) {
    obj = {
        question: question,
        answer: [answer1, answer2, answer3],
        correctAnswer: correctAnswer
    }
    return obj;
}