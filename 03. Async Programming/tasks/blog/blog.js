function attachEvents() {
    const kinveyAppId = "kid_B1KyOfAZe";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    const kinveyUsername = "peter";
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = { "Authorization": "Basic " + base64auth };

    $('#btnLoadPosts').click(loadPostsClick);
    $('#btnViewPost').click(viewPostClick);

    function loadPostsClick() {

        let loadPostsRequest = {
            url: serviceUrl + "/posts",
            headers: authHeaders
        };

        // execute AJAX

        function displayPosts(posts) {
            // ensure the dropdown is empty
            // for each post append optins in the dropdown menu
        }
    }

    function viewPostClick() {
        // get the selected post id

        // require post details and its comments

        function displayPostWithComments([post, comments]) {
            $('#post-title').text(post.title);
            $('#post-body').text(post.body);
            $('#post-comments').empty();

            for (let comment of comments) {

                $('#post-comments').append($('<li>').text(comment.text));
            }
        }
    }

    function displayError(err) {
        let errorDiv = $("<div>").text("Error: " + err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);

        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);
    }
}