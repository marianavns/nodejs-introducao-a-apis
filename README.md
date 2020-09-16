# APIs e comunicação

### Aviso

Este arquivo é composto por anotações de aula, e será alterado no decorrer da semana e dos estudos. 
Se tiver alguma sugestão ou observar algum erro, por favor abre uma issue aqui no GitHub (logo acima, ao lado de Code). Eu vou te agradecer muito!

## O que este repositório mostra:
- O que é API;
- Como *conectar seu editor de código no navegador* e escrever uma mensagem lá, usando um servidor criado por você;
- Como *transformar seu projeto todo numa aplicação Node.js* e aproveitar todas as *praticidades das dependências*;
- Como instalar e usar uma dependência do node que atualiza instantaneamente no console as suas mudanças de código (nodemon).
- Como *ligar dois arquivos .js no seu computador*: um com a base de dados e outro para gerar resultados a partir dessa base de dados.

## Sumário

1. **A comunicação entre sua máquina e o mundo (cliente e servidor)**
    - Quem é o cliente?
    - O que é um servidor
    - O que é um banco de dados (database)?
    - Os fios para a comunicação: HTTP
2. **O que é API?**
3. **Como conectar seu editor de código no navegador: Criando um servidor com Node.js**
    - Passo 1: Baixe (Faça a requisição) o módulo http
    - Passo 2: Crie o servidor
    - Passo 3: Criando a PORTA do seu servidor
    - Passo 4: Criando o que vai passar por este servidor (requisição e resposta da requisição)
    - Resumo dos 4 passos
4. **Transformando o projeto todo numa aplicação node: o arquivo package.JSON**
5. **As muitas *dependências do Node: o arquivo package-lock.JSON**
    - Baixando uma dependência importantíssima, o NODEMON.
        - Observação: npm e yarn.
6. **Ligando dois arquivos js no seu editor de código: Modules e Require**


## A comunicação entre a máquina e o mundo (cliente e servidor)

![introducao](https://i.ibb.co/G5jrwW3/introducao.jpg)

### Quem é o cliente?

É o seu e o meu computador. É a rede de computadores que está entrando em sites, e-mails, repositórios. Cliente é quem está fazendo alguma requisição de informações disponíveis em um servidor...

### ... Mas e o que é servidor?

Um servidor é um **software ou máquina**. Ele fornece serviços de armazenamento de arquivos, correio eletrônico, dentre muitos outros, a uma rede de computadores. Ao cliente. 

### O que é um banco de dados (database)? 

É fácil confundir um servidor com o banco de dados. Banco de dados é o registro, o conjunto de arquivos sobre determinada coisa. O servidor é um "lugar" para guardar esse banco de dados e deixar disponível para consulta.

### Os "fios" para a comunicação: HTTP.

O *Hypertext * Transfer Protocol (HTTP)* é um protocolo de comunicação entre **servidor e cliente**. Ele é a base para a comunicação de dados da Internet. *Hipertexto é o texto estruturado que utiliza ligações lógicas. 

![api](https://i.ibb.co/Yc6ddG8/api.jpg)

## O que é API? 
>Application Programming Interface, ou Interface de Programação de Aplicativos.

>APIs não são necessariamente uma "coisa". API é um jeito. Um jeito de conectar aplicações, usando vários recursos, como o Node.js, a criação de um servidor, o estabelecimento de um protocolo de comunicação... 

> As APIs proporcionam a integração entre sistemas de maneira ágil e segura. Podemos, ainda, utilizar APIs para trafegar informações entre servidores: Uma aplicação em um servidor pede informação para outra em outro servidor e... isso funciona!

https://vertigo.com.br/o-que-e-api-entenda-de-uma-maneira-simples/

![codigoNavegador](https://i.ibb.co/qjKCNFN/criando-Banco-De-Dados.jpg)

## Como conectar seu editor de código no navegador: Criando um servidor com Node.js 

Já sabemos que o node roda qualquer arquivo .js, seja escrevendo console.log ou mostrando resultados no console de funções que digitamos. **Mas o Node também pode nos ajudar a fazer uma aplicação backEnd que roda no navegador!"**

Resumindo: Seu navegador será seu cliente, que irá receber informações de uma base de dados via... SERVIDOR! BINGO! Vamos criar um servidor com o Javascript feat Node! 

Em condições normais, um código como este
```js
console.log('Olá mundo, Node!');
alert('O show tem que continuar!');
```
só funcionaria pela metade, porque a função `alert` está definida apenas no navegador. O trabalho aqui será algo parecido com "fazer esta mágica acontecer": rodar as funções de navegador via JS no backend.

O Node já disponibiliza um **módulo http** por padrão pra ajudar nessa missão. Mais pra frente vamos entender o que é módulo http. É necessário, na primeira linha do seu servidor node, fazer uma requisição por esse módulo, pois é ele que vai te ajudar a criar um servidor e comunicá-lo com seu navegador. 

### Passo 1: Baixe (Faça a requisição) o módulo http 
```js
linha 1: const http = require('http')
```
Assim, você acaba de pedir ao Node o módulo http. A requisição está dentro da const http porque ela será sua referencia, como se fosse o nome de um grande objeto. Qualquer coisa que você vá usar dentro desse módulo será referenciada igual se chama "chave:valor" num objeto, assim olha: [http.algumacoisaqueeupreciso].

### Passo 2: Crie o servidor 
E vamos para o primeiro favorzinho que o módulo http vai fazer pra gente: finalmente criar o servidor! E, lógico, precisamos guardar ele dentro de uma outra constante:
```js
linha 2: const servidor = http.createServer()`
```
obs.: "createServer" é um método.

### Passo 3: Criando a PORTA do seu servidor 
Seguinte: é inútil criar um servidor se ninguém sabe por onde ele vai receber e enviar as informações. Lembra que o servidor vai fazer a comunicação de informações entre seu navegador e seu banco de dados? Essas informações precisam de uma porta para, vamos assim dizer, *entrar e sair*. Então, vamos digitar:
```js
servidor.listen(3000)
```
Pode ser qualquer número, mas 3000 é uma convenção do mundo node.

Seguindo esses três passos, você já conectou tudo e pode ir lá no seu navegador digitar "localhost:3000", pra ele acessar a porta 3000 e se conectar com o servidor!! Vai lá faz isso!
...
...
...
Voltou aqui porque não aconteceu nada, né? Lógico que não aconteceu! Você apenas "ligou os fios", mas não gerou nenhuma mensagem pra passar por eles! O último passo vai criar a mensagem que vai passar.

### Passo 4: Criando o que vai passar por este servidor (requisição e resposta da requisição) 
> *Você conectou seu telefone na rede fazendo os passos acima, mas ainda não "gravou o recado na caixa postal caso alguém ligue para o servidor". Vamos fazer isso?*

É importante que seu servidor, assim que seja criado, saiba qual a resposta que ele vai dar sempre que for acionado. Para isso, precisamos incluir parâmetros lá naquele comando de criar o servidor. Assim ele já será criado sabendo que resposta deve dar quando for acionado. Faça essa alteração:
```js
linha 2: const servidor = http.createServer(function (req, resp) => {
    resp.end('Você fez uma requisição e essa é a sua resposta!')
})
```
### Resumo dos 4 passos 
```js
                    // Pedimos ao node o módulo de http para começar a trabalhar
const http = require('http') 
                    // Criamos um servidor que vai trabalhar em função da requisição e da resposta
const servidor = http.createServer (function (req, resp) => { 
                    // Sinalizamos NO CONSOLE que um servidor foi criado e a requisição foi feita 
    console.log('Você digitou localhost:3000 no navegador, então o servidor foi criado e a requisição foi feita')
                        // Adicionamos a resposta que será mostrada no navegador
    resp.write('Você fez uma requisição digitando localhost:3000 aqui no navegador e esta é sua resposta!')
}

                    // Sinalizamos a porta no seu computador onde a comunicação vai acontecer
servidor.listen(3000)
                        // Sinalizamos mais uma vez NO CONSOLE o número da porta, só para ficar organizado
    console.log('Seu servidor está rodando na porta 3000')
```
![butterfly](https://i.ibb.co/GPmSDb3/intro-Node-No-Projeto.jpg)

## Transformando o projeto todo numa aplicação node: o arquivo package.JSON
Por enquanto nós apenas criamos um servidor com o Node.JS, mas ainda não podemos chamar a nossa aplicação inteira de uma "aplicação Node". O node precisa ser inicializado no projeto. Quando dermos esse comando abaixo, será gerado um arquivo chamado "package.json" com todas as informações do projeto.
```js
npm init
```
A partir deste momento, já podemos aproveitar de forma organizada todas as dependências* e funcionalidades que o node traz!

![multitask](https://i.ibb.co/0Jmv0nX/nodepackagejson.jpg)

## As muitas *dependências do Node: o arquivo package-lock.JSON
As dependências do Node são recursos criados por outros desenvolvedores que precisaram da mesma solução que você está precisando agora, então fizeram um conjunto de arquivos que traz essa solução prontinha. 

Quando adicionamos a primeira dependência pelo bash, é criado um arquivo chamado `package-lock.json`. 

Esse arquivo vai descrever todas as dependências que você já baixou.

Um bom exemplo de dependência é o `readline-sync`: Com ele, é possível pegar um input do usuário apenas digitando três coisas:

1. No bash: `npm install readline-sync`
2. No código: `const input = require('readline-sync') // chamando o pacote para seu arquivo`
3. No código: `const respostaUsuario = input.question('Qual seu nome?') // agora você já tem uma informação de usuário guardada numa variável`

Fazer isso do zero daria um trabalhão...

>Na criação do seu primeiro servidor, não foi necessário digitar npm install http no terminal e funcionou. Já o readline sync só funcionou depois que você digitou npm install readline-sync no terminal. Por que?

### Baixando uma dependência importantíssima, o NODEMON.

É bem chato alterar o código, salvar e ter que digitar "node <arquivo.js>" TODA HORA na linha de comando pra testar se ele tá funcionando. Terrível. 

Pensando nisso, foi criado o **nodemon** <3. Ele é uma dependência que atualiza o terminal na exata hora que você salva o arquivo. Segue o passo-a-passo pra ativar essa maravilha:
1. Digite `npm install nodemon` no terminal;
2. Crie um novo arquivo com console.log só para testar e salve;
3. Digite no terminal "nodemon <seu-arquivo.js>" e veja o resultado;
4. Mude seu código, dê Ctrl+S e olha pro seu terminal: mudou o resultado lá também!


#### Observação: npm e yarn <h4>

O NPM, ou Node Package Manager, é o administrador de pacotes (dependências) do Node. Sempre que precisar "baixar" uma dependência nova, é só digitar `npm install <pacote-que-quer-baixar>`. Existe um outro gerenciador também, o yarn, mas ainda não usei.


## Ligando dois arquivos js no seu editor de código: Modules e Require

Até agora, conseguimos ligar um arquivo js no navegador através de um servidor, que criamos também. Mas ligar dois arquivos js, tendo um como banco de dados e outro para mostrar os resultados, também é uma forma de API.

Vamos fazer esse!

1. Crie um arquivo pessoas.js para ser seu banco de dados, composto por arrays.
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
3. Crie um arquivo chamado modules.js
4. Peça o acesso ao banco de dados, digitando: 
```js
const {nomes} = require (./pessoas)
```
5. Aqui você já tem toda a array de nomes do outro arquivo, disponível para pegar os dados! Se digitar
```js
const quartoNome = nomes[3]
console.log(quartoNome)
```
vai receber como retorno `Maré`, que é o quarto item da array "nomes".


