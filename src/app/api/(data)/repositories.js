export const repositories = [
  {
    name: 'portfolio_2023',
    languages_list: ['ReactJs', 'SASS', 'NextJs', 'EmailJs'],
    html_url: 'https://portfolio-2023-tiagofmuniz.vercel.app/',
    github: 'https://github.com/tiagofmuniz/portfolio_2023.git',
    description: 'Primeiro portfolio criado no início de meus estudos de next js. Faz uso do zod para validação de formulários e é integrado ao EmailJs para contato.',
    use_instructions: [
      'Faça o clone deste repositório: "https://github.com/tiagofmuniz/portfolio-.git',
      'Instale o nodeJS (https://nodejs.org/en/)',
      'Abra o projeto em seu editor de texto preferido',
      'Instale as dependências necessárias com o comando "npm i" ou "yarn install" caso o utilize.',
      'Execute o projeto com o comando "npm run dev" e abra-o em "https://localhost:3000"',
    ],
    main_learning: [
      'Configuração do Ambiente Next.js',
      'Roteamento Dinâmico',
      'Páginas Estáticas e Dinâmicas',
      'Componentes Reutilizáveis',
      'Estilização com CSS-in-JS',
      'Integração com API EmailJs',
      'Otimização de Imagens',
      'Controle de Estado',
      'SEO (Search Engine Optimization)',
      'Responsividade',
      'Deploy',
      'Controle de Versão',
      'Melhores Práticas de Desenvolvimento',
    ],
    images: ['home.png', 'sobre.png', 'projetos.png', 'contato.png'],
  },
  {
    name: 'smileSync',
    languages_list: ['NextJS', 'Sass', 'Zod', 'Node', 'Typescript', 'MongoDB', 'JWT', 'Nodemailer'],
    github: 'https://github.com/tiagofmuniz/SmileSync.git',
    html_url: 'https://smile-sync.vercel.app/',
    description:
      'Este é um sistema de login que oferece autenticação JWT para usuários. Permite o cadastro de novos usuários, a alteração de senha com o envio de um código de segurança por email. O backend é desenvolvido em Node.js e TypeScript, utilizando MongoDB como banco de dados. O frontend é construído em Next.js e SCSS, com uma interface responsiva.',
    use_instructions: [
      'Faça o clone deste repositório: https://github.com/seu-usuario/loginSystem.git',
      'Configure o MongoDB e insira as credenciais no arquivo .env na pasta do backend.',
      'Instale as dependências do backend e do frontend utilizando npm install ou yarn install nas respectivas pastas.',
      'Inicie o servidor backend utilizando npm start ou yarn start na pasta do backend.',
      'Inicie o servidor frontend utilizando npm dev ou yarn dev na pasta do frontend.',
      'Acesse a aplicação através do navegador.'
    ],
    main_learning: [
      'Desenvolvimento de formulários em HTML.',
      'Estilização de elementos usando SCSS.',
      'Organização de código JavaScript em módulos.',
      'Persistência de dados utilizando o Local Storage.',
      'Implementação de funcionalidades CRUD para registros de pacientes.',
      'Agendamento de consultas com data e horário.',
      'Inclusão de observações para cada paciente.',
    ],
    functionalities: [
      'Cadastro de novos usuários.',
      'Autenticação de usuários com JWT.',
      'Alteração de senha com envio de código de segurança por email.',
      'Interface responsiva para uma experiência de usuário otimizada em diferentes dispositivos.',
    ],
    images: ['criar_conta.gif', 'logar.gif', 'recuperar_senha.gif'],
  },
  {
    name: 'Consulta_clima',
    languages_list: ['html', 'sass', 'JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/tiagofmuniz/consulta-clima.git',
    html_url: 'https://consulta-clima-alpha.vercel.app/',
    description:
      'Este é um aplicativo simples de consulta do tempo que fornece informações sobre a temperatura, condição do céu e umidade para uma cidade específica. Utiliza a API do OpenWeatherMap para obter dados em tempo real.',
    use_instructions: [
      'Faça o clone deste repositório: https://github.com/tiagofmuniz/weatherFinder.git',
      'Abra o arquivo index.html em seu navegador.',
      'Digite o nome da cidade na caixa de entrada.',
      'Clique no botão de busca ou pressione Enter para obter a previsão do tempo para a cidade inserida.',
      'Certifique-se de ter uma chave válida da API do OpenWeatherMap e substitua a variável chave no arquivo index.js pela sua chave.',
      'Para isto:',
      'Crie uma conta no site https://openweathermap.org/',
      'Após confirmar o cadastro via email de confirmação, clique no seu perfil.',
      'Na opção "My API Keys", obtenha a chave da api "default", já configurada por padrão.',
    ],
    main_learning: [
      'Consumo de API para obter dados em tempo real.',
      'Manipulação do DOM (Document Object Model) em JavaScript para atualizar dinamicamente o conteúdo da página.',
      'Utilização de estilos e fontes externas para melhorar a apresentação visual.',
    ],
    functionalities: ['Consultar condição do clima em cidades específicas.'],
    images: ['consulta_clima.gif'],
  },
  {
    name: 'Menu3d',
    languages_list: ['html', 'css', 'JavaScript'],
    github: 'https://github.com/tiagofmuniz/menu3d.git',
    html_url: 'https://menu-3d.vercel.app/',
    description:
      'Este é um simples menu que faz uso de propriedades css 3d e animations para criar um menu em perspectiva.',
    use_instructions: [
      'Faça o clone deste repositório: https://github.com/tiagofmuniz/menu3d.git',
      'Abra o arquivo index.html em seu navegador.',
    ],
    main_learning: [
      'Propriedades CSS 3D',
      'Propriedades CSS Animations',
    ],
    functionalities: ['Menu animado'],
    images: ['menu3d.gif'],
  },
  {
    name: 'Imdb-bot',
    languages_list: ['Node', 'Puppeteer', 'Json', 'FS file system'],
    github: 'https://github.com/tiagofmuniz/imdb-bot',
    html_url: '',
    description: 'Este aplicativo foi desenvolvido durante um projeto pessoal, em que foi necessário obter dados de filmes no imdb. O mesmo usa o Puppeteer para acessar os filmes de alguma lista filtrada no imdb, extrair as informações e salvá-las em um arquivo json local.',
    use_instructions: [
      'Faça o clone deste repositório: https://github.com/tiagofmuniz/imdb-bot.git',
      "No arquivo pageController, na variável 'limitPage', defina a quantidade de páginas que o bot deve percorrer. Deve ser um number.",
      "Na variável 'url' insira o link da lista, tomando o cuidado para substituir o número de página por '${i}'. Exemplo: let url = https://www.imdb.com/search/keyword/?ref_=kw_ref_yr&mode=detail&page=*${i}\*&genres=Documentary%2CMusic&release_date=2008%2C2015&sort=year,asc;",
      "Na pasta raiz, execute o comando 'node index.js' para iniciar o servidor e rodar a aplicação.",
      "Observação: Para ocultar o navegador chromium enquanto o bot roda, basta, no arquivo browser.ks definir a propriedade 'headless' como false. Também é possível alterar o nome dos arquivos json salvos, bastando editar, no arquivo pageController.js o seguinte trecho: 'fs.writeFile(./data/2008-2015_page${i}.json...)' para fs.writeFile(./data/novonomedosarquivos_page${i}.json...)'"
    ],
    main_learning: [
      'Manipulação de DOM',
      'Web scraping',

    ],
    functionalities: ['Extrair informação de listas de filmes no imdb'],
    images: ['imdb-bot.gif'],
  },
];
