document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var placa = document.getElementById('placa').value;
    var nome = document.getElementById('nome').value;
    var apartamento = document.getElementById('apartamento').value;
    var bloco = document.getElementById('bloco').value;
    var modelo = document.getElementById('modelo').value;
    var cor = document.getElementById('cor').value;
    var vaga = document.getElementById('vaga').value;
    
    console.log('Placa:', placa);
    console.log('Nome:', nome);
    console.log('Apartamento:', apartamento);
    console.log('Bloco:', bloco);
    console.log('Modelo:', modelo);
    console.log('Cor:', cor);
    console.log('Vaga:', vaga);
    
    alert('Cadastro realizado com sucesso!');
});
