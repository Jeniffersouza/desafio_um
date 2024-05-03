// Funções para abrir e fechar o modal de cadastro
function openCadastro() {
    document.getElementById('cadastroModal').style.display = 'block';
}

function closeCadastro() {
    document.getElementById('cadastroModal').style.display = 'none';
}

// Funções para abrir e fechar o modal de listagem
function openListagem() {
    document.getElementById('listagemModal').style.display = 'block';
}

function closeListagem() {
    document.getElementById('listagemModal').style.display = 'none';
}

// Captura o formulário de cadastro e adiciona um listener para o evento submit
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos do formulário
    var placa = document.getElementById('placa').value;
    var nome = document.getElementById('nome').value;
    var apartamento = document.getElementById('apartamento').value;
    var bloco = document.getElementById('bloco').value;
    var modelo = document.getElementById('modelo').value;
    var cor = document.getElementById('cor').value;
    var vaga = document.getElementById('vaga').value;

    // Exibe os valores no console
    console.log('Placa do Veículo:', placa);
    console.log('Nome do Proprietário:', nome);
    console.log('Número do Apartamento:', apartamento);
    console.log('Bloco do Apartamento:', bloco);
    console.log('Modelo do Veículo:', modelo);
    console.log('Cor do Veículo:', cor);
    console.log('Número da Vaga:', vaga);
