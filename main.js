$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#BC').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $('<img>').attr('src', enderecoDaNovaImagem).appendTo(novoItem);
        $('<div class="overlay-imagem-link"><a href="' + enderecoDaNovaImagem + '" target="_blank" title="Ver imagem em FullScreen">Ver imagem em FullScreen</a></div>').appendTo(novoItem); // Adicione o link dentro do <li>
        novoItem.appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
    
})