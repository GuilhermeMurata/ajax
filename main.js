document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/GuilhermeMurata')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})

$(document).ready(function() {
    $('#celular').mask('(00) 00000-0000');
    
    function validarCelular(celular) {
        if(celular.length > 11) {
            alert("Enviado!")
        }
    }

    $('#form').submit(function(evento) {
        evento.preventDefault();
        
        if ($('#celular').val().length == 0) {
            throw new Error("Digite seu nome");
        }
    })
})