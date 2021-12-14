//Chamando a função inserida no primeiro Input que irá acender as luzes
function On(l1, l2, l3) {
    //Criando variáveis e inserindo os elementos correspondentes a cada variável
    var l1 = document.getElementById('light1')
    var l2 = document.getElementById('light2')
    var l3 = document.getElementById('light3')

    //Utilização de cor e efeito de sombra para dar a impressão de luminosidade
    l1.style.background = 'rgb(26, 209, 255)'
    l1.style.boxShadow = '0 0 70px rgb(26, 209, 255)'
    //Transição para as luzes acenderem gradualmente
    l1.style.transition = '1s'

    l2.style.background = 'cyan'
    l2.style.boxShadow = '0 0 70px cyan'
    l2.style.transition = '3s'

    l3.style.background = 'rgb(255, 255, 77)'
    l3.style.boxShadow = '0 0 70px rgb(255, 255, 77)'
    l3.style.transition = '5s'

}


//Chamando a função inserida no segundo Input que irá apagar as luzes
function Off(l1, l2, l3) {

    var l1 = document.getElementById('light1')
    var l2 = document.getElementById('light2')
    var l3 = document.getElementById('light3')

    
    //Retornando à cor original para causar a impressão de opacidade (luz apagada)
    l1.style.background = 'rgb(0, 67, 83)'
    l1.style.boxShadow = 'none'
    //Transição para as luzes apagarem gradualmente
    l1.style.transition = '6s'

    l2.style.background = 'rgb(0, 63, 63)'
    l2.style.boxShadow = 'none'
    l2.style.transition = '3s'

    l3.style.background = 'rgb(59, 59, 1)'
    l3.style.boxShadow = 'none'
    l3.style.transition = '1s'


}

