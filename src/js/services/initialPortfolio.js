const initialPortfolio = [
  // {
  //   id: 1,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-1-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «Научиться учиться»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/how-to-learn/',
  //   linkWeb: 'https://ia-stepanov.github.io/how-to-learn/',
  // },
  // {
  //   id: 2,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-2-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «Путешествия по России»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/russian-travel/',
  //   linkWeb: 'https://ia-stepanov.github.io/russian-travel/',
  // },
  // {
  //   id: 3,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-3-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд лендинга «Uber Russia»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/uber-russia/',
  //   linkWeb: 'https://ia-stepanov.github.io/uber-russia/',
  // },
  // // {
  // //   id: 4,
  // //   mixitup: 'mix web',
  // //   img: 'img/works/project-4-web.jpg',
  // //   title: 'Frontend разработка',
  // //   subtitle: 'Место',
  // //   imgSource: './icons/social/github.svg',
  // //   titleSource: 'GitHub',
  // //   linkSource: 'https://github.com/ia-stepanov/mesto/',
  // //   linkWeb: 'https://ia-stepanov.github.io/mesto/',
  // // },
  // {
  //   id: 5,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-5-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «Место на&nbsp;React»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/react-mesto-auth/',
  //   linkWeb: 'https://ia-stepanov.github.io/react-mesto-auth/',
  // },
  // // {
  // //   id: 6,
  // //   mixitup: 'mix web',
  // //   img: 'img/works/project-6-web.jpg',
  // //   title: 'Frontend разработка',
  // //   subtitle: 'Бэкенд проекта Место',
  // //   imgSource: './icons/social/github.svg',
  // //   titleSource: 'GitHub',
  // //   linkSource: 'https://github.com/ia-stepanov/express-mesto/',
  // //   linkWeb: '',
  // // },
  // {
  //   id: 7,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-7-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд и&nbsp;Бэкенд проекта Место',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/react-mesto-api-full/',
  //   linkWeb: '',
  // },
  // {
  //   id: 8,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-8-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Бэкенд Диплома Movies Explorer API',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/movies-explorer-api/',
  //   linkWeb: '',
  // },
  // {
  //   id: 9,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-9-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд Диплома Movies Explorer',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/movies-explorer-frontend/',
  //   linkWeb: 'https://ia-stepanov.github.io/movies-explorer-frontend/',
  // },
  // {
  //   id: 10,
  //   mixitup: 'mix design',
  //   img: 'img/works/project-10-design.jpg',
  //   title: 'Графический дизайн',
  //   subtitle: 'Дизайн статьи для&nbsp;сайта медиа',
  //   imgSource: './icons/social/behance.svg',
  //   titleSource: 'Behance',
  //   linkSource:
  //     'https://www.behance.net/gallery/148809933/dizajn-stati-dlja-sajta-media/',
  //   linkWeb: '',
  // },
  // {
  //   id: 11,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-11-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «React Movies',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/react-movies/',
  //   linkWeb: 'https://ia-stepanov.github.io/react-movies/',
  // },
  // {
  //   id: 12,
  //   mixitup: 'mix design',
  //   img: 'img/works/project-12-design.jpg',
  //   title: 'Графический дизайн',
  //   subtitle: 'Дизайн презентации «Баухаус»',
  //   imgSource: './icons/social/behance.svg',
  //   titleSource: 'Behance',
  //   linkSource: 'https://www.behance.net/gallery/148807751/dizajn-prezentacii-bauhaus/',
  //   linkWeb: '',
  // },
  // {
  //   id: 13,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-13-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «React Shop»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/react-shop/',
  //   linkWeb: 'https://ia-stepanov.github.io/react-shop/',
  // },
  // {
  //   id: 14,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-14-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «React Food»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/react-food/',
  //   linkWeb: 'https://ia-stepanov.github.io/react-food/',
  // },
  // {
  //   id: 15,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-15-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «Food»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/food/',
  //   linkWeb: 'https://ia-stepanov.github.io/food/',
  // },
  // {
  //   id: 16,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-16-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Фронтенд проекта «Employees App»',
  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',
  //   linkSource: 'https://github.com/ia-stepanov/employees/',
  //   linkWeb: 'https://ia-stepanov.github.io/employees/',
  // },
  {
    id: 17,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Дизайн сайта сервиса по предоставлению серверов',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/ia-stepanov/marvel/',
    linkWeb: '',
  },
  {
    id: 18,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Дизайн сайта IT-компании',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/ia-stepanov/test-paraweb/',
    linkWeb: '',
  },
  {
    id: 19,
    mixitup: 'mix design',
    img: 'img/works/stub.png',
    title: 'Графический дизайн',
    subtitle: 'Дизайн сайта контент-маркетолога',
    imgSource: './icons/social/figma.svg',
    titleSource: 'Figma',
    linkSource: 'https://www.behance.net/gallery/148800305/longrid-o-nauchnyh-otkrytijah',
    linkWeb: '',
  },
  {
    id: 20,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Графический дизайн',
    subtitle: 'Дизайн сайта города Богудонии и его экологических нарушений',
    imgSource: './icons/social/figma.svg',
    titleSource: 'Figma',
    linkSource: 'https://www.figma.com/file/z890xejftBddyaYkQx87t7/%237-Case-%D0%91%D0%BE%D0%B3%D1%83%D0%B4%D0%BE%D0%BD%D0%B8%D1%8F-Design?type=design&t=P7wcMoIYMQalZwxB-6',
    linkWeb: '',
  },
  // {
  //   id: 21,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-21-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Todo List',

  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',

  //   linkSource: 'https://github.com/ia-stepanov/todo-list-localstorage/',
  //   linkWeb: 'https://ia-stepanov.github.io/todo-list-localstorage/',
  // },
  // {
  //   id: 22,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-22-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'News App',

  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',

  //   linkSource: 'https://github.com/ia-stepanov/news-app/',
  //   linkWeb: 'https://ia-stepanov.github.io/news-app/',
  // },
  // {
  //   id: 23,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-23-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Avia Tickets',

  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',

  //   linkSource: 'https://github.com/ia-stepanov/avia-tickets/',
  //   linkWeb: 'https://ia-stepanov.github.io/avia-tickets/',
  // },
  // {
  //   id: 24,
  //   mixitup: 'mix web',
  //   img: 'img/works/project-24-web.jpg',
  //   title: 'Frontend разработка',
  //   subtitle: 'Login',

  //   imgSource: './icons/social/github.svg',
  //   titleSource: 'GitHub',

  //   linkSource: 'https://github.com/ia-stepanov/login/',
  //   linkWeb: 'https://ia-stepanov.github.io/login/',
  // },
  {
    id: 25,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Графический дизайн',
    subtitle: 'Дизайн сайта для юриста',
    imgSource: './icons/social/figma.svg',
    titleSource: 'Figma',
    linkSource: 'https://www.figma.com/file/dTnB3YdHiQ4vOIZ7ofSqlF/SiteLawyer?type=design&t=P7wcMoIYMQalZwxB-6',
    linkWeb: '',
  },
  {
    id: 26,
    mixitup: 'mix design',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Мобильное приложение для расчета кредитоспособности',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/UDanV/PEAK_mobile_app',
    linkWeb: '',
  },
  {
    id: 27,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Таск-менеджер на React',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/jmblx/NT-RNDSOFT',
    linkWeb: '',
  },
  {
    id: 28,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Голосовой помощник с чатом на Kotlin',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/jmblx/NT-CENTER-INVEST',
    linkWeb: '',
  },
  {
    id: 29,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Графический дизайн',
    subtitle: 'Дизайн сайта для контент-маркетолога',
    imgSource: './icons/social/figma.svg',
    titleSource: 'Figma',
    linkSource: 'https://www.figma.com/file/dTnB3YdHiQ4vOIZ7ofSqlF/SiteLawyer?type=design&t=P7wcMoIYMQalZwxB-6',
    linkWeb: 'https://freud-cat.ru/',
  },
  {
    id: 30,
    mixitup: 'mix web',
    img: 'img/works/stub.png',
    title: 'Frontend разработка',
    subtitle: 'Чат на React',
    imgSource: './icons/social/github.svg',
    titleSource: 'GitHub',
    linkSource: 'https://github.com/UDanV/react-client',
    linkWeb: '',
  },
];

export default initialPortfolio;
