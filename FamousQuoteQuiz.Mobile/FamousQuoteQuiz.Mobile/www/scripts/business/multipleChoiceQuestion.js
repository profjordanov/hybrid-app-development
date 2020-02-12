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

// BEGIN Popups logic

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

// END Popups logic