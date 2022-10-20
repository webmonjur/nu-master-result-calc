function changeDiv(val){
    if(val == 1){
        document.getElementById('regular').style.display='block';
        document.getElementById('private').style.display='none';
    }
    if(val == 2){
        document.getElementById('regular').style.display='none';
        document.getElementById('private').style.display='block';
    }
};

function change(){
    let sub1, sub2, sub3, sub4, sub5, sub6, sub7, term, viva;
    sub1= document.getElementById('sub1').value;
    sub2= document.getElementById('sub2').value;
    sub3= document.getElementById('sub3').value;
    sub4= document.getElementById('sub4').value;
    sub5= document.getElementById('sub5').value;
    sub6= document.getElementById('sub6').value;
    sub7= document.getElementById('sub7').value;
    term= document.getElementById('term').value;
    viva= document.getElementById('viva').value;


let sub1p, sub2p, sub3p, sub4p, sub5p, sub6p, sub7p, termP, vivaP;
    sub1p= document.getElementById('sub1p').innerHTML= parseFloat(sub1);
    sub2p= document.getElementById('sub2p').innerHTML= parseFloat(sub2);
    sub3p= document.getElementById('sub3p').innerHTML= parseFloat(sub3);
    sub4p= document.getElementById('sub4p').innerHTML= parseFloat(sub4);
    sub5p= document.getElementById('sub5p').innerHTML= parseFloat(sub5);
    sub6p= document.getElementById('sub6p').innerHTML= parseFloat(sub6);
    sub7p= document.getElementById('sub7p').innerHTML= parseFloat(sub7);
    termP= document.getElementById('termP').innerHTML= parseFloat(term);
    vivaP= document.getElementById('vivaP').innerHTML= parseFloat(viva);
    var subtotal = sub1p + sub2p + sub3p + sub4p + sub5p + sub6p + sub7p;

    var vivaTerm = termP + vivaP;

    var total = (subtotal * 4) + (vivaTerm * 2);

    var finalResult = total / 32;
    var result = document.getElementById('result');

    result.innerHTML = finalResult.toFixed(2);
    
};

function changePriv(){
    let sub1, sub2, sub3, sub4, sub5, sub6, sub7, viva;
    sub1= document.getElementById('sub1Priv').value;
    sub2= document.getElementById('sub2Priv').value;
    sub3= document.getElementById('sub3Priv').value;
    sub4= document.getElementById('sub4Priv').value;
    sub5= document.getElementById('sub5Priv').value;
    sub6= document.getElementById('sub6Priv').value;
    sub7= document.getElementById('sub7Priv').value;
    viva= document.getElementById('vivaPriv').value;


let sub1p, sub2p, sub3p, sub4p, sub5p, sub6p, sub7p, vivaP;
    sub1p= document.getElementById('sub1Privp').innerHTML= parseFloat(sub1);
    sub2p= document.getElementById('sub2Privp').innerHTML= parseFloat(sub2);
    sub3p= document.getElementById('sub3Privp').innerHTML= parseFloat(sub3);
    sub4p= document.getElementById('sub4Privp').innerHTML= parseFloat(sub4);
    sub5p= document.getElementById('sub5Privp').innerHTML= parseFloat(sub5);
    sub6p= document.getElementById('sub6Privp').innerHTML= parseFloat(sub6);
    sub7p= document.getElementById('sub7Privp').innerHTML= parseFloat(sub7);
    vivaP= document.getElementById('vivaPrivP').innerHTML= parseFloat(viva);
    var subtotal = sub1p + sub2p + sub3p + sub4p + sub5p + sub6p + sub7p;

    var vivaTerm = vivaP;

    var total = (subtotal * 4) + (vivaTerm * 2);

    var finalResult = total / 30;
    var result = document.getElementById('resultPriv');

    result.innerHTML = finalResult.toFixed(2);
    
};