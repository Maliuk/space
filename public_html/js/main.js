jQuery(document).ready(function () {

    //Main Header
    $('h1.main-title').each(function () {
        var $p = $(this);
        $p.html($p.html().replace(/^(\w+)/, '<span>$1</span><br />'));
    });

});
