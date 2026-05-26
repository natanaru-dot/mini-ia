function enviarMensagem()
{
    let entrada = document.getElementById("entrada");

    let texto = entrada.value;

    let mensagens = document.getElementById("mensagens");

    mensagens.innerHTML += `
        <p><strong>Você:</strong> ${texto}</p>
    `;

    let resposta = "";

    if(texto == "oi")
    {
        resposta = "Olá 😄";
    }

    else if(texto == "tudo bem")
    {
        resposta = "Estou funcionando perfeitamente 🚀";
    }

    else if(texto == "qual seu nome")
    {
        resposta = "Sou o Natan em forma de IA🤖";
    }

    else
    {
        resposta = "Não entendi 😢";
    }

    mensagens.innerHTML += `
        <p><strong>IA:</strong> ${resposta}</p>
    `;

    entrada.value = "";
}