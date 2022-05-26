// Desliga o recarregamento ao clicar em um formulário
$("form").submit(false)

// let btn = document.querySelector('#btn-form');

$('#btn-form').on('click', function(){
    let date = $('#date').val();

    $.ajax({
        url:(`https://api.nasa.gov/planetary/apod?api_key=8vZlcK1eM7eEp61nDxVBKKofuWrxi47Qxr3CPnUD&date=${date}`),
        type: 'GET',
        success: function(info) {
           $('#title').text(info.title);
           $('#image').attr('src', info.url);
           $('#text').text(info.explanation);
           if(info.media_type == 'image'){
            $('#image').attr('src', info.url).show();
            $('#video').hide();
           } else if (info.media_type == 'video') {
            $('#video').attr('src', info.url).show();
            $('#image').hide();
           } 
        },
        error: function () {
            alert('Não encontrado!')
        }
    
    })
})


