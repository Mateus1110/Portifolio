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