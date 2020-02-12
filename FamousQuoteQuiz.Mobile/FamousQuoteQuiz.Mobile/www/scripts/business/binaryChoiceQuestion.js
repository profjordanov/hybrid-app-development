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
            alert("Error with retriving the first binary choice question!");
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

// BEGIN Buttons logic

$("#true-bin-answ-btn").click(function () {
    const currentQuestionId = $("#bin-quote-id").text();
    const questIsTrue = $("#bin-quote-isTrue").text();
    const correctAuthor = $("#bin-quote-correct-author").text();
    const lastBinaryChoiceQuestionId = localStorage.lastBinaryChoiceQuestionId;

    if (questIsTrue == "true") {
        if (currentQuestionId == lastBinaryChoiceQuestionId) {
            showBcqFinalCorrectUserAnswer(correctAuthor);
        } else {
            showBcqCorrectUserAnswer(correctAuthor);
            showNextBcqBtn();
        }
    } else {
        if (currentQuestionId == lastBinaryChoiceQuestionId) {
            showBcqFinalIncorrectUserAnswer(correctAuthor);
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
            showBcqFinalIncorrectUserAnswer(correctAuthor);
        } else {
            showBcqIncorrectUserAnswer(correctAuthor);
            showNextBcqBtn();
        }
    } else {
        if (currentQuestionId == lastBinaryChoiceQuestionId) {
            showBcqFinalCorrectUserAnswer(correctAuthor);
        } else {
            showBcqCorrectUserAnswer(correctAuthor);
            showNextBcqBtn();
        }
    }
});

$("#next-bin-quest-btn").click(function () {
    const currentQuoteId = $("#bin-quote-id").text();

    const querydata = {
        initialId: currentQuoteId
    };

    const url = baseSurviceQuizUrl + "binary-choice-question" + encodeQueryData(querydata);

    $.ajax({
        url: url,
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            applyBinaryChoiceQuestion(data);
            showYesNoBtns();
        },
        error: function () {
            $.fancybox("#error");
        }
    });
});

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

// END Buttons logic

// BEGIN Popups logic

function showBcqCorrectUserAnswer(correctAuthor) {
    $("#bcq-correct-author-answer").text(correctAuthor);
    $("#bcq-correct-user-answer-popup").popup("open");
}

function showBcqIncorrectUserAnswer(correctAuthor) {
    $("#bcq-incorrect-author-answer").text(correctAuthor);
    $("#bcq-incorrect-user-answer-popup").popup("open");
}

function showBcqFinalCorrectUserAnswer(correctAuthor) {
    $("#bcq-correct-author-final-answer").text(correctAuthor);
    $("#bcq-correct-user-answer-quiz-end-popup").popup("open");
}

function showBcqFinalIncorrectUserAnswer(correctAuthor) {
    $("#bcq-incorrect-author-final-answer").text(correctAuthor);
    $("#bcq-incorrect-user-answer-quiz-end-popup").popup("open");
}
// END Popups logic