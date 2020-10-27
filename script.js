let show = true;
document.querySelector('.hamburguer').addEventListener('click', function(){
    if (document.body.offsetWidth <= 520 && show){
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'initial';
    }
    document.querySelector('.container').classList.toggle('show-menu', show);
    show = !show;
});

document.querySelectorAll('.menu-link').forEach((element)=>{
    element.addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('show-menu');
        document.body.style.overflow = 'initial';

    })
})

function abre_filmes_e_series() {
    window.open('https://filmes-e-series.herokuapp.com', '_blank');
}
  
function abre_github() {
    window.open('https://github.com/Mateus1110', '_blank');
}

function abre_github_portifolio() {
    window.open('https://github.com/Mateus1110/Portifolio', '_blank');
}

function abre_linkedin() {
    window.open('https://www.linkedin.com/in/mateus-tabaldi-34995418a/', '_blank');
}

function define_idade() {
    let ano_nasc = 1997;
    const data = new Date;
    return data.getFullYear() - ano_nasc + ' anos';
}

document.getElementById("label-idade").innerHTML = define_idade()

/* function atualizaPreco(){
    let qtde = document.querySelector("#qtde").value;
    let incluijs = document.querySelector('#js').checked;
    let layout = document.querySelector('#layout-sim').checked;
    let prazo = document.querySelector('#prazo').value;
    let totalValue = 0;
    totalValue = qtde * 100;

    if (incluijs) totalValue *= 1.1; 

    if (layout) totalValue += 500;

    let taxaUrgencia = 1 - prazo * 0.1;
    totalValue *= 1 + taxaUrgencia;
    document.querySelector('#total-value').innerHTML = totalValue.toFixed(0) + ',00';
}
 */
/* document.querySelector("#qtde").addEventListener('change', atualizaPreco);
document.querySelector('#js').addEventListener('change', atualizaPreco);
document.querySelector('#layout-sim').addEventListener('change', atualizaPreco);
document.querySelector('#layout-nao').addEventListener('change', atualizaPreco);
document.querySelector('#prazo').addEventListener('input', function(){
    const prazo = document.querySelector('#prazo').value;
    document.querySelector('#label-prazo').innerHTML = prazo + ' semanas';
    atualizaPreco();
}); */