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

// Buttons logic

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

// Popups logic

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

// Buttons logic
$("#authorX").click(function () {
    const authorXid = $("#authorX").attr('authorId');
    checkCorrectAuthorById(authorXid);
});

$("#authorY").click(function () {
    const authorYid = $("#authorY").attr('authorId');
    checkCorrectAuthorById(authorYid);
});

$("#authorZ").click(function () {
    const authorZid = $("#authorZ").attr('authorId');
    checkCorrectAuthorById(authorZid);
});

$("#next-mult-quest-btn").click(function () {
    const currentQuoteId = $("#mult-quest-id").text();

    const querydata = {
        initialId: currentQuoteId
    };

    const url = baseSurviceQuizUrl + "multiple-choice-question" + encodeQueryData(querydata);

    $.ajax({
        url: url,
        type: 'GET',
        responseType: 'application/json',
        success: function (data) {
            applyMultipleChoiceQuestion(data);
            showAnswersBtns();
        },
        error: function () {
            $.fancybox("#error");
        }
    });
});

function checkCorrectAuthorById(authorNid) {
    const questId = $("#mult-quest-id").text();
    const correctAuthorId = $("#correct-author-id").text();
    const correctAuthorName = $("#correct-author-name").text();
    const lastMultipleChoiceQuestionId = localStorage.lastMultipleChoiceQuestionId;

    if (correctAuthorId == authorNid) {
        if (questId == lastMultipleChoiceQuestionId) {
            showMcqFinalCorrectUserAnswer(correctAuthorName);
        } else {
            showMcqCorrectUserAnswer(correctAuthorName);
            showNextMultQuestBtn();
        }
    } else {
        if (questId == lastMultipleChoiceQuestionId) {
            showMcqFinalIncorrectUserAnswer(correctAuthorName);
        } else {
            showMcqIncorrectUserAnswer(correctAuthorName);
            showNextMultQuestBtn();
        }
    }
}

function showNextMultQuestBtn() {
    const correctAuthor = $("#correct-author-name").text();
    $("#mult-quote-correct-answer").show();
    $("#mult-quote-correct-answer").text("by " + correctAuthor);

    $("#next-mult-quest-btn").show();
    $("#answers-buttons").hide();
}

function showAnswersBtns() {
    $("#mult-quote-correct-answer").hide();

    $("#answers-buttons").show();
    $("#next-mult-quest-btn").hide();
}

// Popups logic

function showMcqCorrectUserAnswer(correctAuthor) {
    $("#mcq-correct-author-answer").text(correctAuthor);
    $("#mcq-correct-user-answer-popup").popup("open");
}

function showMcqIncorrectUserAnswer(correctAuthor) {
    $("#mcq-incorrect-author-answer").text(correctAuthor);
    $("#mcq-incorrect-user-answer-popup").popup("open");
}

function showMcqFinalCorrectUserAnswer(correctAuthor) {
    $("#mcq-correct-author-final-answer").text(correctAuthor);
    $("#mcq-correct-user-answer-quiz-end-popup").popup("open");
}

function showMcqFinalIncorrectUserAnswer(correctAuthor) {
    $("#mcq-incorrect-author-final-answer").text(correctAuthor);
    $("#mcq-incorrect-user-answer-quiz-end-popup").popup("open");
}

// END Multiple Choice Question Logic Section