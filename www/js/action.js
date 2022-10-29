
$('form').on('submit', function(e) {
    e.preventDefault();
});

$('#add').on('click', function(e) 
{
    var nouvelleTache = $('#tache').val();
    var tache_elem = $('<div>')
        .append('<input type="checkbox">')
        .addClass('tache')
        .append(nouvelleTache);
    $('#taches').append(tache_elem);
});

$('body').on('click', 'input[type="checkbox"]', function() {
   
    var tache = $(this).parents('.tache');

    if(tache.hasClass('barre')) {
        tache.removeClass('barre');
        tache.appendTo($('#taches'));
    } else {
        tache.addClass('barre');
        tache.appendTo($('#fini'));
    }
});
