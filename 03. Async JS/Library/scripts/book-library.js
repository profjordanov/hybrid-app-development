function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_r1lBWJHnw";
    const kinveyAppSecret = "6537c4ab5c084b6e8818b9fc420ed3a0";
    const kinveyAppAuthHeaders = {
        "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };

    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    $('#linkHome').click( ? ? );
    $('#linkLogin').click( ? ? );
    $('#linkRegister').click( ? ? );
    $('#linkListBooks').click( ? ? );
    $('#linkCreateBook').click( ? ? );
    $('#linkLogout').click( ? ? );

    $('#buttonLoginUser').click( ? ? );
    $('#buttonRegisterUser').click( ? ? );
    $('#buttonCreateBook').click( ? ? );
    $('#buttonEditBook').click( ? ? );

    $('#infoBox, #errorBox').click(function() {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function() {
            $('#loadingBox').show();
        },
        ajaxStop: function() {
            $('#loadingBox').hide();
        }
    });

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }

        showError(errorMsg);
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text('');
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.')
    }

    function getKinveyUserAuthHeaders() {
        return {
            "Authorization": "Kinvey " + sessionStorage.getItem('authToken')
        };
    }
}