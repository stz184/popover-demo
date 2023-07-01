import 'bootstrap';
import '../css/styles.scss';

$(document).ready(function() {
    const link = $('#popover-link');
    // Initialize the popover
    link.popover({
        html: true,
        placement: 'right',
        container: 'body',
        content: function() {
            return $('#popover-content').html();
        }
    }).on('hidden.bs.popover', function () {
        link.removeClass('close');
    }).on('show.bs.popover', function () {
        link.addClass('close');
    });
});
