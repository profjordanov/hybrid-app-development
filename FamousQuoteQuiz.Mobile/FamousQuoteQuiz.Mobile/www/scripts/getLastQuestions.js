const baseSurviceQuizUrl = "http://localhost:5000/api/quiz/";

(function () {
    $.ajax({
        url: baseSurviceQuizUrl + "last-binary-choice-question",
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            storeLastBinaryChoiceQuestionId(data);
        },
        error: function () {
            alert("ERROR!");
        }
    });
})(baseSurviceQuizUrl);

(function () {
    $.ajax({
        url: baseSurviceQuizUrl + "last-multiple-choice-question",
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            storeLastMultipleChoiceQuestionId(data);
        },
        error: function () {
            alert("ERROR!");
        }
    });
})(baseSurviceQuizUrl);

function storeLastBinaryChoiceQuestionId(response) {
    localStorage.setItem('lastBinaryChoiceQuestionId', response.id);
}

function storeLastMultipleChoiceQuestionId(response) {
    localStorage.setItem('lastMultipleChoiceQuestionId', response.id);
}