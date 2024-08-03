document.addEventListener('DOMContentLoaded', function() {

    $.ajax({
        url: 'https://api.github.com/users/GuilhermeMurata',
        method: 'GET',
        dataType: 'json',
        success: function(json) {
            $('#name').text(json.name);
            $('#username').text(json.login);
            $('#avatar').attr('src', json.avatar_url);
            $('#following').text(json.following);
            $('#followers').text(json.followers);
            $('#repos').text(json.public_repos);
            $('#link').attr('href', json.html_url);
        },
        error: function() {
            alert('Erro ao carregar os dados do usuário.');
        }
    });

        $(document).ready(function() {
            $('#celular').mask('(00) 00000-0000');
        
            $('#formulario-envio').on("submit", function(evento) {
                evento.preventDefault();
        
                const celular = $('#celular').val().replace(/\D/g, '');
        
                if(celular.length === 11) {
                    alert("Numero enviado com sucesso!")
                } else {
                    alert("Verifique se o seu numero contem 11 digitos");
                }

                $('#formulario-envio')[0].reset();
            })
        })
})


