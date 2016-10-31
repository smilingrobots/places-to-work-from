jQuery(function($) {

    var $list = $('table.places-list');

    $('a.more-details, a.hide-details').click(function(e) {
        e.preventDefault();

        var $details = $(this).parents('td').find('.place-details');

        $details.toggle();
    });

});
