Aplicação de Filmes

Este projeto é uma aplicação web que permite aos usuários pesquisar e visualizar informações sobre filmes usando a API do The Movie Database (TMDb).

Funcionalidades


-Exibir uma lista dos  Filmes Imperdíveis.
-Pesquisar filmes por título.
-Visualizar detalhes dos filmes, incluindo orçamento, receita, duração e descrição.
-Após ver os Detalhes do filem, podes fazer duas coisa: Pesquisar um outro filme, ou ir em ULOMBE Filmes para ver novamente os Filmes Imperdíveis que o TMBD nos dá.

Tecnologias Utilizadas

-React.js
-React Router DOM
-TMDb API
-CSS para estilização

Requisitos

-Node.js instalado
-Gerenciador de pacotes npm ou yarn

Instalação

-Para intalação, contem três (3) pontos muito importantes:

1) Clonar o Repositório
- git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio.

2) Instalar as Dependências
-npm install
 ou
yarn install

3) Configurar as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

VITE_API=https://api.themoviedb.org/3/movie/
VITE_API_KEY=96322c26eca3c457263bb90f67eb5206 (substitua com a sua propria chave, tirando do TMBD, se não tiveres uma conta, és obrigado a criar para ter a tua própria chave)
VITE_SEARCH=https://api.themoviedb.org/3/search/movie/
VITE_IMG=https://image.tmdb.org/t/p/w500/

No final , têm a Estrutura do Projecto:

|-- node_modules/
|-- public/
|-- src/
|-- assets/
|-- components/
|-- pages/
|-- App.css
|-- App.jsx
|-- index.css
|-- index.jsx
|-- .env
|-- .eslintrc.cjs
|-- .gitattributes
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- vite.config.js

Por fim, pra executar a Aplicação, basta ir ao terminal, do projecto e escrever: npm run dev 
ou yarn dev. Virá uma informação abaixo, com um link ex: ( http://localhost:3000) , e clica, irás directamente ao navegador e verás Aplicação... 

Ela cumpre com todos os pontos que me foi pedido, e quado tormanos ele responsivo, a palavra 'DETALHES', muda de cor e dá um aspecto muito lindo.

Obrigada...
 






