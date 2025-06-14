const form = document.getElementById("form-corrida");
const tabela = document.querySelector("#tabela-corridas tbody");

// Função que será chamada ao enviar o formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que a página recarregue

  // Pega os valores dos campos
  const data = document.getElementById("data").value;
  const distancia = document.getElementById("distancia").value;
  const pace = document.getElementById("pace").value;
  const frequencia = document.getElementById("frequencia").value;

  // Cria uma nova linha na tabela
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${data}</td>
    <td>${distancia}</td>
    <td>${pace}</td>
    <td>${frequencia}</td>
  `;

  // Adiciona a nova linha na tabela
  tabela.appendChild(novaLinha);

  // Limpa os campos do formulário
  form.reset();
});