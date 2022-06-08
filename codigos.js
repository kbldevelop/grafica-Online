    
    let add = document.getElementsByClassName('botao')
    let produto1 = document.getElementById('produto1')
    let produto2 = document.getElementById('produto2')
    let carrinho = document.getElementById('carrinho')
    let carrinho2 = document.getElementById('carrinho2')
    let numero = 0

function adicionar1() {
    alert('+ Um item adicionado ao carrinho!')
    numero = numero + 1
    mostrarNaTela()
    
    
}

function mostrarNaTela(){
    
    carrinho.innerHTML = `<strong>${numero}</strong> Itens adicionados ao carrinho.(Panfletos 100x140mm)`
    
    
    
   
}
mostrarNaTela()


/*item 2*/

let n1 = 0


function adicionar2() {
    alert('+ Um item adicionado ao carrinho!')
    n1 = n1 + 1
    mostrarNaTela2()
    
    
}

function mostrarNaTela2(){
    carrinho2.innerHTML = `<strong>${n1}</strong> Itens adicionados ao carrinho. (Cartão de visita 48x88mm.)`
    
   
}
mostrarNaTela2()



  
 /*Item 3 */

 let n2 = 0


function adicionar3() {
    alert('+ Um item adicionado ao carrinho!')
    n2 = n2 + 1
    mostrarNaTela3()
    
    
}

function mostrarNaTela3(){
    carrinho3.innerHTML = `<strong>${n2}</strong> Itens adicionados ao carrinho. (Banner 70x120cm.)`
    
   
}
mostrarNaTela3()


/*item 4*/

let n3 = 0


function adicionar4() {
    alert('+ Um item adicionado ao carrinho!')
    n3 = n3 + 1
    mostrarNaTela4()
    
    
}

function mostrarNaTela4(){
    carrinho4.innerHTML = `<strong>${n3}</strong> Itens adicionados ao carrinho. (Tags.)`
    
   
}
mostrarNaTela4()

/*Item 5*/

let n4 = 0


function adicionar5() {
    alert('+ Um item adicionado ao carrinho!')
    n4 = n4 + 1
    mostrarNaTela5()
    
    
}

function mostrarNaTela5(){
    carrinho5.innerHTML = `<strong>${n4}</strong> Itens adicionados ao carrinho. (Canecas.)`
    
   
}
mostrarNaTela5()

/*item 6 */

let n5 = 0


function adicionar6() {
    alert('+ Um item adicionado ao carrinho!')
    n5 = n5 + 1
    mostrarNaTela6()
    
    
}

function mostrarNaTela6(){
    carrinho6.innerHTML = `<strong>${n5}</strong> Itens adicionados ao carrinho. (Adesivos.)`
    
   
}
mostrarNaTela6()


/*Finalizar compra*/

function finalizar() {
    let fim = document.getElementById('botao2') 
    alert('Compra finalizada com sucesso!')
}



