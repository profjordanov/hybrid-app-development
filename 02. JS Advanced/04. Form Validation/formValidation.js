function validate() {
    $('#company').on('change', showHideCompany);

    $('#submit').on('click', function(ev) {
        ev.preventDefault();
		
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

    });

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}