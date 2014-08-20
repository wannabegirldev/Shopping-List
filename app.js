$(document).ready(function(){
    $('#toadd').click(function(e) {
        var addItem = $('#item').val();
    $('ul').append('<li>' + addItem);
 });
});

    
        