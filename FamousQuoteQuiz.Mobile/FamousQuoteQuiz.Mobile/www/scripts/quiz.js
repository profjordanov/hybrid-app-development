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