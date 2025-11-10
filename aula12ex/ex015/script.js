function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {  
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var radsex = document.getElementsByName('radsex')
       var idade = ano - Number(txtano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (radsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <=2) {
                //bebe
                img.setAttribute('src', 'bebeMenino.png')
            } else if (idade <= 5) {
                //criança pequena
                img.setAttribute('src', 'criancaPequenaMenino.png')
            } else if (idade <= 17) {
                //Adoslecente
                img.setAttribute('src', 'adoslecenteMenino.png')
            } else if (idade <= 25){
                // jovem adulto
                img.setAttribute('src', 'jovemAdultoHomem.png')
            } else if (idade <= 35) {
                //adulto jovem
                img.setAttribute('src', 'AdultoJovemHomem.png')
            } else if (idade <= 50) {
                // adulto
                img.setAttribute('src', 'adultoHomem.png')
            } else if (idade <= 65) {
                //pré-idoso
                img.setAttribute('src', 'preIdosoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.png')
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=2) {
                //bebe
                img.setAttribute('src', 'bebeMenina.png')
            } else if (idade <= 5) {
                //criança pequena
                img.setAttribute('src', 'criancaPequenaMenina.png')
            } else if (idade <= 17) {
                //Adoslecente
                img.setAttribute('src', 'adoslecenteMulher.png')
            } else if (idade <= 25){
                // jovem adulto
                img.setAttribute('src', 'jovemAdultaMulher.png')
            } else if (idade <= 35) {
                //adulto jovem
                img.setAttribute('src', 'adultoJovemMulher.png')
            } else if (idade <= 50) {
                // adulto
                img.setAttribute('src', 'adultaMulher.png')
            } else if (idade <= 65) {
                //pré-idoso
                img.setAttribute('src', 'preIodsaMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosaMulher.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}