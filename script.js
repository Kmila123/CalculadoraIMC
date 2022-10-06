const second = document.querySelector('.second-step');
const final = document.querySelector('.final-step');

function go(currentStep, nextStep){
    let dnone, dblock;
    if(currentStep == 1 ){
        dnone=second;
    }else if (currentStep == 2 ){
        dnone=final;
    }
    dnone.style.display ='none';
    if(nextStep == 1 ){
        dblock=second;
    }else if (nextStep == 2 ){
        dblock=final;
    }
    dblock.style.display ='block';
}
function validate (){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border='none';
        altura.style.border='none';
    if(!peso.value||!altura.value){
        if(!peso.value&&!altura.value){
        console.log('Não temos peso e nem altura!');
        peso.style.border='1px solid red';
        altura.style.border='1px solid red';
    } else if(!peso.value){
        peso.style.border='1px solid red';
        console.log('Não temos o peso');
    } else{
        altura.style.border='1px solid red';
        console.log('Não temos a altura');
    }
   }
   else{
    console.log('Tudo ok! Calcular');
    let imc = peso.value /(altura.value*altura.value);
    console.log(imc);
    const resultado= document.getElementById('resultado');
    const resultado2= document.getElementById('resultado2');
    if(imc<18.5){
        console.log( 'Seu IMC: '+imc+  '| magreza');
        resultado.innerHTML = 'Seu IMC: '+ imc;
        resultado2.innerHTML = 'IMC  abaixo de 18.5 - Magreza';
    }else if(imc>18.5 && imc <25){
        console.log( 'Seu IMC: '+imc+  '| NORMAL');
        resultado.innerHTML = 'Seu IMC: '+ imc;
        resultado2.innerHTML = 'IMC entre 18.5 e 25 - Normal';
    }else if(imc>25 && imc <30){
        console.log( 'seu IMC: '+imc+  '| sobrepeso');
        resultado.innerHTML = 'Seu IMC: '+ imc;
        resultado2.innerHTML = 'IMC entre 25 e 30 - Sobrepeso';
    }else if(imc>30 && imc <40) {
        console.log( 'Seu IMC: '+imc+  '| Obesidade');
        resultado.innerHTML = 'Seu IMC: '+ imc;
        resultado2.innerHTML = 'IMC entre 30 e 40 - Obesidade';
    } else if(imc>40){
        console.log( 'Seu IMC: '+imc+  '| Obesidade grave');
        resultado.innerHTML = 'Seu IMC: '+ imc;
        resultado2.innerHTML = 'IMC  acima de 40 - Obesidade grave';
    }
    go(1,2);



   }
}