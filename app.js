let listaDeAmigos = [];
let amigos = document.getElementById('amigo');

function limparCampo(){
    amigos.value = '';
}

function adicionarAmigo() {
    if (amigos.value.trim() == ''){
        alert('Por favor, insira um nome.');
        limparCampo();
    } else {
        if(listaDeAmigos.includes(amigos.value)){
            alert('Amigo já adicionado, por favor, digite outro nome.');
            limparCampo();
        } else {
            listaDeAmigos.push(amigos.value);
            atualizarListaAmigos();
            console.log(listaDeAmigos);
            limparCampo();
        }
    }
}

function atualizarListaAmigos(){
    let listaAmigos=document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML='';
    
    for(let i=0;i<listaDeAmigos.length;i++){ 
        let item=document.createElement('li'); 
        item.textContent=listaDeAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){ 
    if(listaDeAmigos.length<3){
        alert('Adicione pelo menos três amigos para sortear!')
    } else {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random()*listaDeAmigos.length)];
        let resultado=document.getElementById('resultado');
        resultado.textContent = 'O amigo sorteado é: '+amigoSorteado+'!🎉';
    };
  
}
