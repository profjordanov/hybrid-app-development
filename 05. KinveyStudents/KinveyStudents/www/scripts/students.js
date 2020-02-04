const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

function loadStudents() {
    $.ajax({
        type: "GET",
        url: baseSurviceUrl,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth);
        },
        success: function (students) {
            displayStudents(students);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function displayStudents(students) {
    $('#results').find('tr').nextAll().remove();

    students = students.sort((a, b) => a.ID - b.ID);
    //students = students.slice(0, 10);

    for (let student of students) {
        $("#results")
            .append($('<tr>')
                .append($('<td>').text(student.FirstName))
                .append($('<td>').text(student.Grade))
            );
    }
}