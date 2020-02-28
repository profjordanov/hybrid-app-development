function search() {
    let text = $('#searchText').val();
    let matches = 0;

    let towns = $('#towns li').toArray();

    for (let town of towns) {
        if (town.textContent.indexOf(text) != -1) {
            matches++;
            $(town).css('font-weight', 'bold');
        } else {
            $(town).css('font-weight', '');
        }
    }

    $('#result').text(matches + ' matches found.')
}