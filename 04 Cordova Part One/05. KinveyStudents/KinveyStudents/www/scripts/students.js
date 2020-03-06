const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_rk6GOYkSL/students";
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

function loadStudents() {
    $.mobile.loading("show");

    $.ajax({
        type: "GET",
        url: baseSurviceUrl,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth);
        },
        success: function (students) {
            $.mobile.loading("hide");
            displayStudents(students);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function displayStudents(students) {
    console.log(students);
    $('#results').find('tr').nextAll().remove();

    students = students.sort((a, b) => a.ID - b.ID);
    //students = students.slice(0, 10);

    for (let student of students) {
        $("#results")
            .append($('<tr>')
                .append($('<td>').text(student.firstName))
                .append($('<td>').text(student.grade))
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
        $.mobile.loading("show");
        persistStudent(id, firstName, lastName, facultyNumber, grade);
    } else {
        $("#errorPopup").popup("open");
    }
});

function persistStudent(id, firstName, lastName, facultyNumber, grade) {

    let requestData = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facultyNumber,
        grade: grade
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
            $.mobile.loading("hide");
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
    loadStudents();
}