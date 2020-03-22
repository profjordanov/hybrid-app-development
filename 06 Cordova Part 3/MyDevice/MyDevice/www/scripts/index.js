﻿const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_HyZktRN8I/coords";
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        window.addEventListener('batterystatus', onBatteryStatus, false);

        applyDeviceData(device);
        checkConnection();

        $('#camera-btn').click(getPicture);

        navigator.geolocation.watchPosition(geolocationSuccess, geolocationError);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function applyDeviceData(device) {
        $('#cordovaVersion').text(device.cordova);
        $('#manufacturer').text(device.manufacturer);
        $('#isVirtual').text(device.isVirtual);
        $('#operatingSystem').text(device.platform);
        $('#deviceModel').text(device.model);
        $('#osVersion').text(device.version);
        $('#uuid').text(device.uuid);
        $('#serial').text(device.serial);
    }

    function onBatteryStatus(status) {
        $('#batteryStatus').text(status.level);
        $('#isPlugged').text(status.isPlugged);
    }

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        $('#connectionType').text(states[networkState]);
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

    function geolocationSuccess(position) {
        $('#latitude').text(position.coords.latitude);
        $('#longitude').text(position.coords.longitude);
        $('#altitude').text(position.coords.altitude);
        $('#accuracy').text(position.coords.accuracy);
        $('#altitudeAccuracy').text(position.coords.altitudeAccuracy);

        console.log(position);

        let positionEntity = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
            accuracy: position.coords.accuracy,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            timestamp: position.timestamp
        };

        savePosition(positionEntity);
    }

    function geolocationError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    function savePosition(requestData) {

        console.log(JSON.stringify(requestData));

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
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            }
        });
    }

} )();