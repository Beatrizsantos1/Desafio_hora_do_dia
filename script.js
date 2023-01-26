function carregar(){
    let msg = window.document.getElementById('msg'); // pegando a mensagem do html
    let foto = window.document.getElementById('imagem'); // pegando a imagem do html
    let data =  new Date(); //pegando a data atual 
    let hora = data.getHours(); // pegando a hora atual
    let minutos = data.getMinutes();
    msg.innerHTML = `Horario de Brasilia: ${hora}:${minutos}`; // colocando no site a hora correta

    
    //Fazer a imagem mudar de acordo com o horario
    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = "./img/imgmanha.png"
        document.body.style.background = '#dcbfab'
    }else if (hora >= 12 && hora <= 18){
         //boa tarde
         foto.src = "./img/imgtarde.png"
         document.body.style.background = '#fabb90'
    }else{
        //boa noite
        foto.src = "./img/imgnoite.png"
        document.body.style.background = '#5a4161'
    }
}