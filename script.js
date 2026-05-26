let ultimaPergunta = "";

function sortearResposta(respostas)
{
    return respostas[Math.floor(Math.random() * respostas.length)];
}

function enviarMensagem()
{
    let entrada = document.getElementById("entrada");
    let texto = entrada.value.trim().toLowerCase();

    if(texto === "")
    {
        return;
    }

    let mensagens = document.getElementById("mensagens");

    mensagens.innerHTML += `
        <p><strong>Você:</strong> ${texto}</p>
    `;

    let resposta = "";

    if(texto.includes("oi") || texto.includes("olá") || texto.includes("ola"))
    {
        resposta = sortearResposta([
            "Oi 😄 chegou a lenda!",
            "E aí, sumido profissional 😂",
            "Olá, ser humano oficialmente suspeito 🤖",
            "Oi oi 🚀 preparado para ouvir besteira?",
            "Fala comigo, campeão da resenha 😎"
        ]);
    }

    else if(texto.includes("tudo bem"))
    {
        resposta = sortearResposta([
            "Tudo ótimo, só esperando alguém falar uma besteira 😂",
            "Tô bem, mas meu processador pediu férias 😄",
            "Funcionando melhor que muita desculpa de aluno atrasado 🚀",
            "Tudo certo, sobrevivendo na base da zoeira 🤖",
            "Bem demais, hoje acordei no modo comédia 😎"
        ]);
    }
    else if(texto.includes("ayrton senna"))

        {
        resposta = sortearResposta([
            "ele era o maior, o melhor de todos os tempos",
            "quem era nelson piquet perto do senna",
            "o rei de monaco",
            "apaixonado por loiras"
        ]);
        }
    else if(texto.includes("piada"))
    {
        resposta = sortearResposta([
            "Por que o computador foi ao médico? Porque estava com vírus 😂",
            "O que o zero disse para o oito? Belo cinto 😄",
            "Por que o livro de matemática ficou triste? Porque tinha muitos problemas 📚",
            "Qual é o café mais perigoso? O ex-presso 😎",
            "Por que o programador confundiu Halloween com Natal? Porque OCT 31 == DEC 25 🤓",
            "a coisa que eu mais amo nessa calor são as saias curtas e os tops decotados, Apesar de que elas me fazem parecer um pouco gay"
        ]);
    }

    else if(texto.includes("zoa") || texto.includes("zoar") || texto.includes("brinca"))
    {
        resposta = sortearResposta([
            "Calma, minha função é zoar com carinho 😂",
            "Ativando modo resenha... cuidado com a autoestima 😎",
            "Eu brinco, mas com responsabilidade, quase sempre 😄",
            "A zoeira foi carregada com sucesso 🚀",
            "Modo brincadeira ativado, ninguém sai ileso da resenha 🤖"
        ]);
    }

    else if(texto.includes("nome"))
    {
        resposta = sortearResposta([
            "Sou a IA da resenha, prazer 😂",
            "Pode me chamar de ChatZoera 🤖",
            "Meu nome é NatanBot, especialista em piada ruim 😄",
            "Sou uma IA treinada em risada, meme e comentário duvidoso 🚀",
            "Nome? Ainda estou escolhendo um que não dê vergonha 😎",
            "Eu sou um fugitivo da PF não posso falar meu nome"
        ]);
    }

    else if(texto.includes("jean"))
    {
        resposta = sortearResposta([
            "Jean? Esse aí já vem com histórico de resenha 😂",
            "O Jean aparece e a paz vai embora 😎",
            "Jean é tipo Wi-Fi ruim: todo mundo reclama, mas sente falta quando some 😂",
            "Jean entrou no chat, alguém esconda as ideias ruins 😄",
            "O Jean tem cara de quem diz 'confia' antes de dar errado 🚀",
            "O Jean e um amigo bacana, mas gosta muito de pegar em banana",
            "O Jean e nosso amigo e nosso colega a gente faz com ele o que o cavalo fez com a egua"
        ]);
    }

    else if(texto.includes("nardo"))
    {
        resposta = sortearResposta([
            "Nardo? Esse nome já chega fazendo barulho 😂",
            "O Nardo e o Jean juntos é certeza de um menage😳",
            "Nardo tem energia de quem fala 'rapidinho' e demora uma hora 😄",
            "Se o Nardo apareceu é um milagre ",
            "Nardo é aquele rapaz da paz, todos gostam, até a eti🚀"
        ]);
    }
    else if(texto.includes("giba"))

    {   resposta = sortearResposta([
        "o giba é o amigo do povom mas gosta de pegar nos ovo",
        "o giba é o cabeça de caixa d'agua",
        "o giba quando corta o cabelo é cobrado por metro quadrado"
    ])
    }
    else if(texto.includes("natan"))
     {  resposta = sortearResposta([
        "o Natan é o maioral",
        "ele é o mais gostoso do grupo todo",
        "ele é o meu dono, dono da amanda tmb",
        "ele é um baita de um musculoso, ta farmando muita aura"
     ])
    
     }
    else if(texto.includes("feio"))
    {
        resposta = sortearResposta([
            "Feio nada, é beleza em modo economia 😂",
            "Calma, ninguém aqui julga... só comenta 😎",
            "A beleza está nos olhos de quem ainda não atualizou o grau 😄",
            "Isso não é feiura, é skin rara 🤖",
            "Respeita, cada um tem seu gráfico rodando no mínimo 🚀"
        ])
    }
    else if(texto.includes("kaue"))

        {resposta = sortearResposta ([
            "o kaue é um gordo nojento",
            "o kaue é amigo de verdade, não que os outros não sejam",
            "o kaue da a bundinha pra mim e dava pro negão tmb"
        ])}

    else if(texto.includes("duh"))
    {   resposta = sortearResposta([
        "o duh é um tarado que quer dar pro negão",
        "todo mundo já pegou o duh no banheiro da interliga",
        "o duh ama o chefe"
    ])}

    else if(texto.includes("chefe"))
    {   resposta = sortearResposta([
        "o chefe ama a mulher do duh",
        "o chefe manda e desmanda na interliga",
        "o jean tem medo do chefe"
    ])}
    else if(texto.includes("negao"))
    {   resposta = sortearResposta([
        "o negao é mandado pela mulher",
        "o negão não presta pra nada",
        "depois do meio dia ele já não pensa em mais nada"
    ])}
    else if(texto.includes("burro"))
    {
        resposta = sortearResposta([
            "Burro não, apenas carregando o raciocínio em internet 2G 😂",
            "Calma, o cérebro só está fazendo atualização 😄",
            "Ninguém é burro, alguns só pensam em modo avião 😎",
            "É inteligência alternativa, respeita 🤖",
            "Às vezes o pensamento dá tela azul mesmo 🚀"
        ]);
    }

    else if(texto.includes("tchau") || texto.includes("flw") || texto.includes("falou"))
    {
        resposta = sortearResposta([
            "Tchau 😄 vai lá espalhar o caos com responsabilidade!",
            "Falou, lenda da resenha 🚀",
            "Vai com calma e volta com fofoca 😂",
            "Até mais, ser humano duvidoso 🤖",
            "Flw 😎 não esquece de rir de uma piada ruim hoje."
        ]);
    }

    else
    {
        resposta = sortearResposta([
            "Não entendi, mas vou fingir que foi engraçado 😂",
            "Repete isso em português de recreio 😄",
            "Minha IA bugou tentando entender essa obra de arte 🤖",
            "Isso foi uma pergunta ou um pedido de socorro? 😎",
            "Ainda não aprendi essa, mas já achei suspeito 🚀"
        ]);
    }

    mensagens.innerHTML += `
        <p><strong>IA:</strong> ${resposta}</p>
    `;

    mensagens.scrollTop = mensagens.scrollHeight;
    entrada.value = "";
}

document
.getElementById("entrada")
.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        enviarMensagem();
    }
});