$(document).ready(function () {
    function addItemToList(e) {
        var addItem = $('#item').val();
        var $li = $('<li>' + '<button class="uibutton"></button>' + addItem + '</li>').appendTo('.shopping');

        /*target only newly added button*/
        $li.find('.uibutton').button({
            icons: {
                primary: "ui-icon-heart"
            },
            text: false
        });
        $('#item').val('');
    }

    /*use event delegation instead of adding the handler in another event handler*/ 
    $('ul.shopping').on('click', '.uibutton', function () {
        $(this).closest('li').remove();
    });

    /*adds list item to list when cart icon is clicked, clears #item input field*/
    $('#toadd').click(function (e) {
        addItemToList(e);
    });

    /*adds list item to list when enter key is hit, clears #item input field*/
    $('#item').keydown(function (e) {
        if (e.which == 13) {
            addItemToList(e);
        }    
    });
    
    $('#clear').click(function (e) {
        $(".shopping").empty();
    });
});

    