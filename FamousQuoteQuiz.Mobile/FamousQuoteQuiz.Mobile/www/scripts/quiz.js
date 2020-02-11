// BEGIN Binary Choice Question Logic Section

(function () {
    const querydata = {
        initialId: 0
    };

    const url = baseSurviceQuizUrl + "binary-choice-question" + encodeQueryData(querydata);

    $.ajax({
        url: url,
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            applyBinaryChoiceQuestion(data);
        },
        error: function () {
            alert("Err");
        }
    });

})(baseSurviceQuizUrl);

function applyBinaryChoiceQuestion(data) {
    $("#bin-quote-id").text(data.id);
    $("#bin-quote-isTrue").text(data.isTrue);
    $("#bin-quote-content").text(data.quote);
    $("#bin-quote-author").text(data.questionableAuthor);
    $("#bin-quote-correct-author").text(data.correctAuthor);
}

(function () {
    $("#true-bin-answ-btn").click(function () {
        const currentQuestionId = $("#bin-quote-id").text();
        const questIsTrue = $("#bin-quote-isTrue").text();
        const correctAuthor = $("#bin-quote-correct-author").text();
        const lastBinaryChoiceQuestionId = localStorage.lastBinaryChoiceQuestionId;

        if (questIsTrue == "true") {
            if (currentQuestionId == lastBinaryChoiceQuestionId) {
                showFinalCorrectUserAnswer(correctAuthor);
            } else {
                showCorrectUserAnswer(correctAuthor);
                showNextBcqBtn();
            }
        } else {
            if (currentQuestionId == lastBinaryChoiceQuestionId) {
                showFinalIncorrectUserAnswer(correctAuthor);
            } else {
                showIncorrectUserAnswer(correctAuthor);
                showNextBcqBtn();
            }
        }
    });

    $("#false-bin-answ-btn").click(function () {
        const currentQuestionId = $("#bin-quote-id").text();
        const questIsTrue = $("#bin-quote-isTrue").text();
        const correctAuthor = $("#bin-quote-correct-author").text();
        const lastBinaryChoiceQuestionId = localStorage.lastBinaryChoiceQuestionId;
        if (questIsTrue == "true") {
            if (currentQuestionId == lastBinaryChoiceQuestionId) {
                showFinalIncorrectUserAnswer(correctAuthor);
            } else {
                showIncorrectUserAnswer(correctAuthor);
                showNextBcqBtn();
            }
        } else {
            if (currentQuestionId == lastBinaryChoiceQuestionId) {
                showFinalCorrectUserAnswer(correctAuthor);
            } else {
                showCorrectUserAnswer(correctAuthor);
                showNextBcqBtn();
            }
        }
    });
})();

// Buttons logic

function showNextBcqBtn() {
    $("#who-is").hide();
    const correctAuthor = $("#bin-quote-correct-author").text();
    $("#bin-quote-correct-answer").show();
    $("#bin-quote-correct-answer").text("by " + correctAuthor);

    $("#next-bin-quest-btn").show();
    $("#yes-no-buttons").hide();
}

function showYesNoBtns() {
    $("#bin-quote-correct-answer").hide();
    $("#who-is").show();

    $("#yes-no-buttons").show();
    $("#next-bin-quest-btn").hide();
}

// Popups logic

function showCorrectUserAnswer(correctAuthor) {
    $("#bcq-correct-author-answer").text(correctAuthor);
    $("#bcq-correct-user-answer-popup").popup("open");
}

function showIncorrectUserAnswer(correctAuthor) {
    $("#bcq-incorrect-author-answer").text(correctAuthor);
    $("#bcq-incorrect-user-answer-popup").popup("open");
}

function showFinalCorrectUserAnswer(correctAuthor) {
    $("#bcq-correct-author-final-answer").text(correctAuthor);
    $("#bcq-correct-user-answer-quiz-end-popup").popup("open");
}

function showFinalIncorrectUserAnswer(correctAuthor) {
    $("#bcq-incorrect-author-final-answer").text(correctAuthor);
    $("#bcq-incorrect-user-answer-quiz-end-popup").popup("open");
}

// END Binary Choice Question Logic Section

// BEGIN Multiple Choice Question Logic Section

(function () {
    const querydata = {
        initialId: 0
    };

    const url = baseSurviceQuizUrl + "multiple-choice-question" + encodeQueryData(querydata);

    $.ajax({
        url: url,
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            applyMultipleChoiceQuestion(data);
        },
        error: function () {
            $.fancybox("#error");
        }
    });

})(baseSurviceQuizUrl);

function applyMultipleChoiceQuestion(data) {
    $("#mult-quest-id").text(data.id);
    $("#correct-author-id").text(data.correctAuthorId);
    $("#mult-quote-content").text(data.quote);
    let authors = data.authors;

    var correctAuthor = authors.find(function (element) {
        return element.id == data.correctAuthorId;
    });

    $("#correct-author-name").text(correctAuthor.name);

    $("#authorX").text(authors[0].name);
    $("#authorX").attr('authorId', authors[0].id);

    $("#authorY").text(authors[1].name);
    $("#authorY").attr('authorId', authors[1].id);

    $("#authorZ").text(authors[2].name);
    $("#authorZ").attr('authorId', authors[2].id);
}


// END Multiple Choice Question Logic Section