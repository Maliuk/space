jQuery(document).ready(function () {
    
    $.pixlayout({
        src: "page1.png",
        opacity: 0.8,
        top: 0,
        center: true,
        clip: false,
        show: false,
        fixed: true
    }, ".wrapper");
    
    //Main Header
    $('h1.main-title').each(function () {
        var $p = $(this);
        $p.html($p.html().replace(/^(\w+)/, '<span>$1</span><br />'));
    });
    
    
    $('#hide-info').click(function () {
        if ($('#content').is(':visible'))
            $('#content').fadeOut(400);
        else
            $('#content').fadeIn(400);
    });

});
