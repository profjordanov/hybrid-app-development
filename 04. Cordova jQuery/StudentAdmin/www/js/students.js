const baseSurviceUrl = "https://students-manager.azurewebsites.net/api/students/";
const username = "guest";
const password = "guest";
const base64Auth = btoa(username + ":" + password);

function loadStudents() {
    console.log("here")
    $.mobile.loading("show");

    $.ajax({
        type: "GET",
        url: baseSurviceUrl,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth);
        },
        success: function(students) {
            $.mobile.loading("hide");
            displayStudents(students);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function displayStudents(students) {
    $('#results').empty();

    for (let student of students) {
        $('#results').append(
            $('<li>').append(
                $('<a>')
                .attr('href', '#detailsPage')
                .addClass("ui-btn ui-btn-icon-right ui-icon-carat-r")
                .click(function() { setStudentDetails(student); })
                .append(student.fullName)));
    }
}

function setStudentDetails(student) {
    $("#student-name").text(student.fullName);
    $("#student-picture-view").attr("src", student.base64EncodePicture);

    $('#student-faculty-number').text(student.facultyNumber);
    $('#student-email').text(student.email);
    $('#student-username').text(student.userName);
}

function getPicture() {
    navigator.camera.getPicture(succeededCameraCallback, failedCameraCallback, {
        quality: 25,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function succeededCameraCallback(imageData) {
    $('#myImage').attr('src', 'data:image/jpeg;base64,' + imageData);
    $('#myImage').css('display', 'block');
    $('#myImage').show();
}

function failedCameraCallback(message) {
    alert(message);
}

function sendPictureRequest() {
    $.mobile.loading("show");

    let base64Img = $('#myImage').attr('src');
    let facultyNumber = $('#faculty-number').val();
    let password = $('#password').val();

    let requestData = {
        FacultyNumber: facultyNumber,
        Password: password,
        Picture: base64Img
    };
    console.log(requestData);

    $.ajax({
        type: "PUT",
        url: baseSurviceUrl + "picture",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(requestData),
        success: function() {
            $.mobile.loading("hide");
            alert("Successfully added!");
            loadDetailsPage();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            loadDetailsPage();
        }
    });
}

function loadDetailsPage() {
    const detailsPage = $("#detailsPage");
    $.mobile.pageContainer.pagecontainer("change", detailsPage, {});
}