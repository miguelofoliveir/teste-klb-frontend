<b>Instalação necessária para rodar o projeto</b>

Instalar o node.js para poder rodar o npm

Download do instalador: https://nodejs.org/en/download/

<b>1. Passos para rodar</b>

<b>Clonando o Repositório</b>
git clone https://github.com/miguelofoliveir/teste-klb-frontend.git

Dentro da pasta do projeto pelo cmd você executa os comandos abaixo:

<b>Instalando as Dependências</b>

npm install

<b>Inicializando o Servidor</b>
ng serve ou npm start

<b>2. Desenvolvimento</b>

O projeto está estruturado na seguinte divisão: menu lateral, header e main.

Já com o ambiente preparado o desenvolvimento foi feito da seguinte forma:

<b>1 -</b> Foi criado a pasta Shared onde dentro dela foram criados o module shared e o service combos responsaveis em fazer o consumo da api.

<b>2 -</b> Criado o component / module menu (menu lateral) em que o titulo de cada menu é carregado via api.

<b>3 -</b> Criado o component / module header onde fica o topo do layout.

<b>4 -</b> Finalizando a criação de component / module foi feito o component / module main onde fica todo conteudo central da aplicação,
como nome mesmo diz o main da aplicação onde as ações está sendo carregadas via api.

<b>Comandos para criar component / service / module</b>
