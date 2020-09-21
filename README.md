# APIs e comunicação

### Aviso

Este arquivo é composto por anotações de aula e será alterado no decorrer dos estudos. 
Se tiver alguma sugestão ou observar algum erro, por favor abre uma issue aqui no GitHub (logo acima, ao lado de `Code`). Agradeço demais!

## O que temos neste repositório:
- O que é API;
- Como *conectar seu editor de código no navegador*. Como escrever uma mensagem no VSCode e mostrar no navegador, usando um servidor criado por você;
- Como *transformar todo seu projeto numa aplicação Node.js* para aproveitar todas as *praticidades dos recursos (dependências) Node.js*;
- Como instalar e usar uma dependência do node que atualiza as mudanças de código instantaneamente no console. A dependência se chama **Nodemon**.
- Como *conectar dois arquivos .js no seu computador*, fazendo um deles trabalhar como base de dados para seus trabalhos.

## Sumário

1. [**A comunicação entre a máquina e o mundo (cliente e servidor)**](#A-comunicacao-entre-a-maquina-e-o-mundo-(cliente-e-servidor))

    [Quem é o cliente?](#Quem-e-o-cliente?)

    [O que é um servidor?](#...Mas-o-que-é-servidor?)

    [O que é um banco de dados (database)?](O-que-e-banco-de-dados-(database)?)
    [Os "fios" para comunicar tudo isso: Protocolo HTTP.](Os-"fios"-para-comunicar-tudo-isso:-Protocolo-HTTP)
2. [**O que é API?**](#O-que-é-API?)
3. **Como conectar seu editor de código no navegador: Criando um servidor com Node.js**
    Passo 1: Baixe (Faça a requisição) o módulo http
    Passo 2: Crie o servidor
    Passo 3: Criando a PORTA do seu servidor
    Passo 4: Criando o que vai passar por este servidor (requisição e resposta da requisição)
    Resumo dos 4 passos
4. **Transformando o projeto todo numa aplicação node: o arquivo package.JSON**
5. **As muitas dependências do Node: o arquivo package-lock.JSON**
    Baixando uma dependência importantíssima, o NODEMON.
        Observação: npm e yarn.
6. **Criando uma base de dados e trabalhando com ela: Modules e Require**


## A comunicação entre a máquina e o mundo (cliente e servidor)

![introducao](https://i.ibb.co/G5jrwW3/introducao.jpg)

### Quem e o cliente?

É o seu e o meu computador. É a rede de computadores que está entrando em sites, e-mails, repositórios. Cliente é quem está fazendo alguma requisição de informações disponíveis em um servidor.

### ...Mas o que é servidor?

Um servidor é um **software ou máquina**. Ele fornece serviços de armazenamento de arquivos, correio eletrônico, dentre muitos outros, a uma rede de computadores. Ao cliente. 

### O que é banco de dados (database)? 

É fácil confundir servidor com banco de dados. Banco de dados é o registro, o conjunto de arquivos sobre determinada coisa. O servidor é um "lugar" para guardar esse banco de dados e deixar disponível para consulta.

###  Os "fios" para comunicar tudo isso: Protocolo HTTP

O *Hypertext Transfer Protocol (HTTP)* é um protocolo de comunicação entre **servidor e cliente**, base para a conexão de dados da Internet. O HTTP não é literalmente um fio, mas sim um conjunto de regras que permite a transmissão de informações.   
    *Hipertexto é o texto estruturado que utiliza ligações lógicas.* 
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![api](https://i.ibb.co/Yc6ddG8/api.jpg)

## O que é API? 
>Application Programming Interface (Interface de Programação de Aplicativos).

APIs não são necessariamente uma "coisa" definida. API é um *jeito*. Um jeito de conectar aplicações, usando vários recursos, como o Node.js, a criação de um servidor, o estabelecimento de um protocolo de comunicação... 

As APIs integram sistemas de forma rápida e protegida. Podemos, ainda, utilizar APIs para trafegar informações entre servidores: Uma aplicação em um servidor pede informação para outra aplicação de um segundo servidor e... isso funciona!

Este texto explica direitinho mais detalhes sobre APIs: [Entenda API de uma maneira simples!](https://vertigo.com.br/o-que-e-api-entenda-de-uma-maneira-simples/)
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![codigoNavegador](https://i.ibb.co/qjKCNFN/criando-Banco-De-Dados.jpg)

## Como conectar seu editor de código no navegador: Criando um servidor com Node.js 

Já sabemos que o Node roda no console qualquer arquivo .js que fizermos, mas ele não faz "só" isso. **O Node também pode nos ajudar a criar um código (ou aplicação) que roda no navegador!"**

Exemplo: em condições normais, um código como este
```js
console.log('Olá mundo, Node!');
alert('O show tem que continuar!');
```
só funcionaria pela metade, porque a função `alert` está definida apenas no navegador.

Mas, com a ajuda do Node, é possível escrever códigos ifs, elses, alerts, calculadoras, dados e etc e mandar para o cliente!

Já que o navegador será o cliente, ele receberá informações de algum lugar, certo? E quem é que faz esta comunicação entre o cliente e os dados que ele solicitou? Isso mesmo, bingo! O SERVIDOR! 

Então o primeiro passo para fazer tudo isso acontecer é criar um servidor que será a ponte para a comunicação com o cliente. Vamos lá! 

### Passo 1: Abra um arquivo chamado server.js e baixe o módulo http. 

O Node já disponibiliza uma ferramenta chamada **módulo http**, que adiciona as regras para a conexão. É necessário, então, criar um arquivo `server.js`, chamar este módulo já na primeira linha e guardá-lo dentro de uma constante:

```js
const http = require('http')
```
 A requisição está dentro de `const http` porque ela será sua referência. É como se *http* fosse o nome de um *grande objeto*. 
 
 Qualquer funcionalidade desse módulo que precisar ser *puxada de dentro dele* será chamada assim: `http.aFuncaoHttpQueEuPreciso`.

### Passo 2: Crie o servidor 
E vamos para o primeiro favorzinho que o módulo http vai fazer para nós: finalmente criar o servidor! E, lógico, precisamos guardar o servidor dentro de outra constante:
```js
linha 2: const servidor = http.createServer()`
```
>obs.: tipificamos o ".createServer" como um *método*.

Pronto, servidor criado! Vamos configurá-lo.

### Passo 3: Criando o que vai passar por este servidor (requisição e resposta da requisição) 
Assim que é criado, é importante que o servidor saiba qual a resposta que ele vai dar sempre que for acionado. 

Para isso, precisamos incluir parâmetros no comando de criar o servidor. Faça esta alteração:
```js
const servidor = http.createServer( function (req, resp) => {
    resp.end('Esta é a resposta da sua requisição')
})
```
Desta forma, a **resposta do cliente** será a frase `'Esta é a resposta da sua requisição!'` exibida na tela **do navegador**.

### Passo 4: Criando a PORTA do seu servidor 
Seguinte: é inútil criar um servidor se ninguém sabe por onde ele vai receber e enviar as informações. 

Lembra que o servidor vai fazer a comunicação de informações entre seu navegador e seu banco de dados? Essas informações precisam de uma porta para, vamos assim dizer, *entrar e sair*. 

Então vamos digitar:
```js
servidor.listen(3000)
```
>obs.: Pode ser qualquer número disponível como porta, mas 3000 é uma convenção do mundo Node. Se você tá com seu Xbox quebrado, pode usar a porta 3074. :stuck_out_tongue_closed_eyes:

### Resumo dos 4 passos (com alguns adicionais exibidos no console para ajudar)

:heavy_check_mark: Criamos um arquivo `server.js`

{

:heavy_check_mark: Pedimos o módulo HTTP ao Node dentro do server.js;

:heavy_check_mark: Criamos um servidor que trabalha em função da requisição e da resposta;

:white_check_mark: {não obrigatório} Sinalizamos NO CONSOLE que um servidor foi criado e a requisição foi feita;

:heavy_check_mark: Adicionamos a resposta que será mostrada no navegador.

}

:heavy_check_mark: Sinalizamos a porta no seu computador onde a comunicação vai acontecer;

:white_check_mark: {não obrigatório} Sinalizamos mais uma vez NO CONSOLE o número da porta, só para ficar organizado.


```js
const http = require('http') 
const servidor = http.createServer (function (req, resp) => {                
    console.log('Você digitou localhost:3000 no navegador')
    console.log('Então o servidor foi criado com sucesso e a requisição foi feita')
    resp.end('Esta é a resposta da sua requisição')
}
servidor.listen(3000)
    console.log('Seu servidor está rodando na porta 3000')
```
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![butterfly](https://i.ibb.co/GPmSDb3/intro-Node-No-Projeto.jpg)

## Transformando o projeto todo numa aplicação node: o arquivo package.JSON
Por enquanto nós apenas criamos um servidor com o Node.JS, mas ainda não podemos chamar a nossa aplicação inteira de uma "aplicação Node". 

O node precisa ser inicializado no projeto. Quando dermos esse comando abaixo no Bash, algumas perguntas serão feitas como "nome do projeto", "versão", "proprietário" e você vai respondendo.

Ao final, será gerado um arquivo chamado "package.json" com todas as informações que você adicionou.

```js
npm init
```
A partir deste momento, já podemos aproveitar de forma organizada todas as dependências (funcionalidades) que o Node traz!
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![multitask](https://i.ibb.co/0Jmv0nX/nodepackagejson.jpg)

## As muitas dependências do Node: o arquivo package-lock.JSON
As dependências do Node são recursos criados por outros desenvolvedores que precisaram da mesma solução que você está precisando agora, então fizeram um conjunto de arquivos que traz essa solução prontinha. 

Para adicionar uma dependência, digite no terminal:
`npm install nomeDaDependencia`

Quando a primeira dependência for adicionada, é criado um arquivo chamado `package-lock.json`. Esse arquivo vai descrever todas as dependências que forem baixadas daqui para frente.

Um bom exemplo de dependência é o `readline-sync`: Com ela, é possível pegar um input do usuário apenas digitando três coisas:

1. No terminal: `npm install readline-sync` Baixando a dependência readline-sync;
2. No código .js: `const input = require('readline-sync')` Chamando o pacote para seu arquivo;
3. No código .js: `const respostaUsuario = input.question('Qual seu nome?')` Guardando uma informação de usuário numa variável`

Pode ter certeza que fazer isso do zero daria um trabalhão...
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![nodemon](https://i.ibb.co/DDrwV90/nodemon.jpg)
### Baixando uma dependência importantíssima, o NODEMON.

É bem chato alterar código, salvar e ter que digitar "node <arquivo.js>" TODA HORA na linha de comando pra testar se ele tá funcionando. Ou apertando seta pra cima no teclado. Terrível. Quase tão ruim quanto o VAR validando cada gol no campeonato brasileiro.

Pensando nisso, foi criado o **Nodemon**. Ele é uma dependência que atualiza o terminal na exata hora que você salva o arquivo. Segue o passo a passo pra ativar essa maravilha:

1. Digite `npm install nodemon` no terminal;
2. Crie um novo <seu-arquivo.js> com um `console.log` só para testar;
3. Salve;
4. Digite no terminal "nodemon <seu-arquivo.js>" e veja o resultado;
5. Mude a frase no seu `console.log`;
6. Salve de novo;
7. Olha seu terminal: a frase mudou lá também!

#### Observação: npm e yarn <h4>

O NPM, ou Node Package Manager, é o administrador de pacotes (dependências) do Node. Sempre que precisar "baixar" uma dependência nova, é só digitar `npm install <pacote-que-quer-baixar>`. 

Existe um outro gerenciador também, o yarn. Leia mais sobre ele [aqui](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/).
<br />
<br />
<br />
<br />
<br />
<br />
<br />

![fusao](https://i.ibb.co/8msJnKX/fusao.jpg)

## Ligando dois arquivos js no seu editor de código: Modules e Require

Até agora conseguimos ligar um arquivo .js ao navegador, através de um servidor que criamos também. 

Mas há ainda um outro recurso importantíssimo: ligar dois arquivos .js, tendo um como banco de dados e outro para mostrar resultados baseados no banco de dados.

Vamos fazer!

1. Crie um arquivo <pessoas.js> para ser seu banco de dados, composto por arrays.
```js
const nomes = ['Mariana', 'Elis', 'Paula', 'Maré']
const idades = ['29', '30', '30', '25']
```
2. Escreva no final do arquivo:
```js
module.exports = {
    nomes,
    idades,
}
```
> Aqui você está disponibilizando suas duas arrays para quem quiser usar.
3. Crie um arquivo chamado <modules.js>
4. Peça o acesso ao banco de dados, digitando: 
```js
const {nomes} = require (./pessoas)
```
5. Aqui você já tem toda a array de nomes do outro arquivo, disponível para pegar os dados! Se digitar:
```js
const quartoNome = nomes[3]
console.log(quartoNome)
```
vai receber como retorno `Maré`, que é o quarto item da array "nomes".



