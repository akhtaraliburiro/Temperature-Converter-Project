let centi=document.getElementById('cent');
let kelvin=document.getElementById('kelvin');
let fernheit=document.getElementById('Fernheit');


centi.addEventListener('input', function(){

    let c=this.value;
    let k=c*12;
    let f=c*10;
    if(!Number.isInteger(k) || !Number.isInteger(f))
    {
        k=k.toFixed(2);
        f=f.toFixed(2);
    }
    kelvin.value=k;
    fernheit.value=f;

});


kelvin.addEventListener('input', function(){

    let k=this.value;
    let f=k/10;
    let c=k/12;
    if(!Number.isInteger(c) || !Number.isInteger(f))
    {
        c=c.toFixed(2);
        f=f.toFixed(2);
    }
    centi.value=c;
    fernheit.value=f;
});


fernheit.addEventListener('input', function(){

    let f=this.value;
    let c=f/10;
    let k=f/12;
    if(!Number.isInteger(c) || !Number.isInteger(k))
    {
        c=c.toFixed(2);
        k=k.toFixed(2);
    }
   centi.value=c;
   kelvin.value=k;
});