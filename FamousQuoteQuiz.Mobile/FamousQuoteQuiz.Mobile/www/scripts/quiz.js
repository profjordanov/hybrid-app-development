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