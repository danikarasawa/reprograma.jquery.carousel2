
// APÓS AULA DE REVISÃO [19/04/19 - 12H00]

$(function () {
    $('#carousel img:eq(0)').addClass('ativo').show();
    let legenda = $('.ativo').attr('alt');
    $('#carousel').prepend("<p>" + legenda + "</p>");
        setInterval(slider, 2500);

// FUNÇÃO PARA O SETINTERVAL E ENTRADA DE LEGENDA
    
    function slider() {

        if ($('.ativo').next().length) {

            $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');

        } else {
            $('.ativo').fadeOut().removeClass('ativo');
            $('#carousel img:eq(0)').fadeIn().addClass('ativo');
        }

        let legenda = $('.ativo').attr('alt');
        $('#carousel p').hide().html(legenda).delay(500).fadeIn();
    }

// FUNCTION PARA O CLICK (MUDANÇA MANUAL PELO USUÁRIO)

    $('#carousel').click(function () {
        if ($('.ativo').next().length) {

            $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');

        } else {
            $('.ativo').fadeOut().removeClass('ativo');
            $('#carousel img:eq(0)').fadeIn().addClass('ativo');
        }

        let legenda = $('.ativo').attr('alt');
        $('#carousel p').hide().html(legenda).delay(500).fadeIn();
    });

});