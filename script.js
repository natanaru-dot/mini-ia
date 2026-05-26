function enviarMensagem()
{
    let entrada = document.getElementById("entrada");

    let texto = entrada.value;
    texto = texto.toLowerCase();

    let mensagens = document.getElementById("mensagens");

    mensagens.innerHTML += `
        <p><strong>Você:</strong> ${texto}</p>
    `;

    let resposta = "";

    if(texto.includes("oi"))
    {
      let respostas = [
        "Olá 😄",
        "Oi oi",
        "E aí 😎",
        "Olá humano🤖",
        "Olá Sr(a) Gay",
        "Pronto para estudar hoje ?📚 "
      ];

    else if(texto.includes("tudo bem"))
    {
        resposta = "Estou funcionando perfeitamente 🚀";
    }

    else if(texto.includes ("qual seu nome"))
    {
        resposta = "Sou o Natan em forma de IA🤖";
    }
else if(texto.includes("if"))
{
    resposta = `
    O IF é usado para tomar decisões no programa 🚀

    Exemplo:

    if(x > 5)
    {
        printf("Maior");
    }

    Se a condição for verdadeira, o código executa.
    `;
}

else if(texto.includes("float"))
{
    resposta = `
    Float é usado para números com vírgula.

    Exemplo:

    float altura = 1.75;
    `;
}

else if(texto.includes("for"))
{
    resposta = `
    O FOR é usado para repetição.

    Exemplo:

    for(int i = 0; i < 5; i++)
    {
        printf("%d", i);
    }
    `;
}

else if(texto.includes("vetor"))
{
    resposta = `
    Vetor guarda vários valores.

    Exemplo:

    int numeros[5];
    `;
}

else if(texto.includes("questão"))
{
    resposta = `
    Pergunta 😄

    Qual tipo guarda números com vírgula?

    A) int
    B) char
    C) float
    D) void
    `;
}
    else
    {
        resposta = "Não entendi 😢";
    }

    mensagens.innerHTML += `
        <p><strong>IA:</strong> ${resposta}</p>
    `;

    entrada.value = "";
    document
.getElementById("entrada")
.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        enviarMensagem();
    }
});
}