$(document).ready(function() {

    function slide(num){
        //jika container css margin-left == -1600px maka rubah ke 0px else jalankan spt biasa
        if( $('.container').css('marginLeft') == '-1600px' )
            $('.container').css('marginLeft', '0px');
        else
        $('.container').animate({ marginLeft: num });
    }

    //anonymous function
    var autoslide = setInterval(function() {
        //ambil ukuran lama lalu kurangkan -= 400px
        slide('-=400px');
    }, 1000);

    $('#next').click(function () {
        slide('-=400px');
        //bersihkan interval dan jalankan anonutmus func
        clearInterval(autoslide);
    });

    $('#prev').click(function () {
        if( $('.container').css('marginLeft') == '0px' )
            $('.container').css('marginLeft', '-1200px');
        else
        slide('+=400px');
        //bersihkan interval dan jalankan anonutmus func
        clearInterval(autoslide);
    });

});