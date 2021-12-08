$(document).ready(function() {

    var index = 0, // mengawas nomor
        items = $('.container div'), // ambil element foto
        total = items.length; // ambil total jumlah element foto

    //fungsi slide
    function slide(){
        //ambil item elemen photo berdasarkan index
        var item = $('.container div').eq(index);    
        //sembunyikan semua items
        items.hide(); //slideUp for slider vertical
        //tampilkan item dgn css display block
        item.css('display', 'block'); //slideDown for slider vertical
    }

    //var autoslide dan isi dgn setinteval 2 param, funsi dan jumlah ms
    var autoslide = setInterval(function() {
        index += 1;
        //jika nomor index lebih besar dari total (dikurangi 1), maka kembalikan ke 0
        if (index > total - 1) index = 0;
        //jalankan funsgi slide
        slide();
    }, 2000);

    //ambil id button next beri event click function tambah index += 1; dan cek jika index lebih besar dari total (dikurangi 1), maka kembalikan ke 0 dan jalan kan fungsi slide
    $('#next').click(function () {
        index += 1;
        if (index > total - 1) index = 0;
        slide();
    });

    $('#prev').click(function () {
        index -= 1;
        if (index < 0) index = total - 1; //3
        slide();
    });

});