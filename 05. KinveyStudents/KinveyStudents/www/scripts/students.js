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

$('#addStudent').click(function (ev) {
    ev.preventDefault();

    let id = Number($('#ID').val());
    let firstName = $('#FirstName').val();
    let lastName = $('#LastName').val();
    let facultyNumber = $('#FacultyNumber').val();
    let grade = Number($('#Grade').val());

    let facultyNumberRegex = /^\d+$/;

    if (firstName.trim() != "" &&
        lastName.trim() != "" &&
        facultyNumberRegex.test(facultyNumber)) {
        alert("AAA");
        persistStudent(id, firstName, lastName, facultyNumber, grade);
    } else {
        alert("Invalid data!");
    }
});

function persistStudent(id, firstName, lastName, facultyNumber, grade) {

    let requestData = {
        ID: id,
        FirstName: firstName,
        LastName: lastName,
        FacultyNumber: facultyNumber,
        Grade: grade
    };

    $.ajax({
        type: "POST",
        url: baseSurviceUrl,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth);
        },
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(requestData),
        success: function () {
            alert("Successfully added!");
            loadMainPage();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function loadMainPage() {
    const indexPage = $("#index-page");
    $.mobile.pageContainer.pagecontainer("change", indexPage, {});
}