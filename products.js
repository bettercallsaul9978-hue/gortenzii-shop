const products = [

/* ГОРТЕНЗИИ МЕТЕЛЬЧАТЫЕ */

{
    name: "Гортензия метельчатая Ванила Фрайс",
    price: "7 500 ₽",
    category: "Гортензии",
    image: "images/vanila-frais.jpg",

    description: "Компактная метельчатая гортензия с крупными соцветиями, меняющими цвет от кремово-белого до розового. Высота взрослого куста 1,5–2 м. Цветение с июля по сентябрь."
},

{
    name: "Гортензия метельчатая Металлика",
    price: "1 500 ₽",
    category: "Гортензии",
    image: "images/metallika.jpg",

    description: "Саженец в контейнере 3л, возраст 1 год. Метельчатая гортензия Металлика (Hydrangea paniculata Metallica) – это новый сорт французской селекции от Жана Рено (Jean Renault), созданный в 2023 году."
},

{
    name: "Гортензия метельчатая Самарская Лидия",
    price: "2 500 ₽",
    category: "Гортензии",
    image: "images/samarskaya-lidiya.jpg",
    
    description: "Саженец в контейнере 5л,  возраст 3 года Гортензия «Самарская Лидия» представляет собой компактное низкорослое растение, достигающее в высоту и ширину до 1,2 метров."
},

{
    name: "Гортензия метельчатая Сандай Фрайс",
    price: "1 800 ₽",
    category: "Гортензии",
    image: "images/sunday-frais.jpg",

    description: "Гортензия Сандей Фрайз (Sundae Fraise) — это компактный, морозостойкий сорт метельчатой гортензии, достигающий 1–1,3 м в высоту."
},

{
    name: "Гортензия метельчатая Лаймлайт",
    price: "1 800 ₽",
    category: "Гортензии",
    image: "images/limelight.jpg",

    description: "Гортензия метельчатая «Лаймлайт»  (Hydrangea paniculata `Limelight`). Описание: Когда у нас впервые появился этот сорт, то в первый год он не произвел впечатления: соцветия были небольшие, невзрачного зеленоватого цвета."
},

{
    name: "Гортензия метельчатая Фрайс Мельба",
    price: "1 500 ₽",
    category: "Гортензии",
    image: "images/fraise-melba.jpg",

    description: "Гортензия Фрайс мельба, сорт имеет довольно высокий куст: высотой 1,8-2,0 м и шириной 1,4-1,5 м. Побеги жесткие, прямостоячие, не разветвленные, окрашены в яркий темно-бордовый цвет, с коричневым оттенком."
},

{
    name: "Гортензия метельчатая Самарская Лидия",
    price: "1 800 ₽",
    category: "Гортензии",
    image: "images/samarskaya-lidiya-big.jpg",

    description: "Саженец в контейнере 3л,  возраст 2 года. Гортензия «Самарская Лидия» представляет собой компактное низкорослое растение, достигающее в высоту и ширину до 1,2 метров."
},

{
    name: "Гортензия метельчатая Пиксио",
    price: "1 500 ₽",
    category: "Гортензии",
    image: "images/pixio.jpg",

    description: "Саженец в контейнере 3л, возраст 1 год. Гортензия метельчатая «Pixio» (Пиксио) — новинка 2023г!   Очень компактная гортензия, в высоту и ширину достигающая всего 80 см."
},

{
    name: "Гортензия метельчатая Бонфаер",
    price: "1 500 ₽",
    category: "Гортензии",
    image: "images/bonfire.jpg",

    description: "Саженец в контейнере 3л, возраст 1 год. Метельчатая гортензия Бонфайер (Hydrangea paniculata Bonfire)– это новинка сезона 2022 от голландского селекционера Guido Rouwette."
},

{
    name: "Гортензия метельчатая Диамантино",
    price: "1 800 ₽",
    category: "Гортензии",
    image: "images/diamantino.jpg",

    description: "Саженцы в контейнерах 3л, возраст 3 года. Диамантино (Diamantino) — этот сорт Hydrangea paniculata попал в десятку гортензий, самых любимых российскими садоводами. Его название переводится как «маленький бриллиант»."
},

/* КРУПНОЛИСТНЫЕ */

{
    name: "Гортензия крупнолистная Джип Блю",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/jip-blue.jpg"
},

{
    name: "Гортензия крупнолистная Графиня Косель",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/grafinya-kosel.jpg"
},

{
    name: "Гортензия крупнолистная Фаболо Блю",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/fabolo-blue.jpg"
},

{
    name: "Гортензия крупнолистная Эрли Блю",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/early-blue.jpg"
},

{
    name: "Гортензия крупнолистная Конфети Пантер",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/confetti-panther.jpg"
},

{
    name: "Гортензия крупнолистная Стар Гезер",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/star-gazer.jpg"
},

{
    name: "Гортензия крупнолистная Тугезер Блю",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/together-blue.jpg"
},

{
    name: "Гортензия крупнолистная Ред Барон",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/red-baron.jpg"
},

{
    name: "Гортензия крупнолистная Стелар Блю",
    price: "2 000 ₽",
    category: "Гортензии",
    image: "images/stelar-blue.jpg"
},

/* ГОЛУБИКА */

{
    name: "Голубика сорт Либерти (с40л)",
    price: "2 500 ₽",
    category: "Голубика",
    image: "images/liberty.jpg"
},

{
    name: "Голубика сорт Река (с40)",
    price: "2 500 ₽",
    category: "Голубика",
    image: "images/reka.jpg"
},

{
    name: "Голубика сорт Дюк",
    price: "2 500 ₽",
    category: "Голубика",
    image: "images/duke.jpg"
},

{
    name: "Голубика сорт Дюк 40л",
    price: "3 000 ₽",
    category: "Голубика",
    image: "images/duke40.jpg"
},

/* ПЛОДОВЫЕ */

{
    name: "Клубника сорт Тоскана",
    price: "350 ₽",
    category: "Плодовые",
    image: "images/toskana.jpg"
},

{
    name: "Яблоня Флорина",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/florina.jpg"
},

{
    name: "Шелковица плакучая",
    price: "4 500 ₽",
    category: "Плодовые",
    image: "images/shelkovica.jpg"
},

{
    name: "Вишня Подбельская",
    price: "600 ₽",
    category: "Плодовые",
    image: "images/podbelskaya.jpg"
},

{
    name: "Вишня Изобильная",
    price: "600 ₽",
    category: "Плодовые",
    image: "images/izobilnaya.jpg"
},

{
    name: "Абрикос краснощекий",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/abrikos.jpg"
},

{
    name: "Груша Конференция",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/conference.jpg"
},

{
    name: "Груша Толгантская красавица",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/tolganskaya.jpg"
},

{
    name: "Слива Анжелина",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/angelina.jpg"
},

{
    name: "Слива Чернослив",
    price: "1 500 ₽",
    category: "Плодовые",
    image: "images/chernosliv.jpg"
},

/* КУСТАРНИКИ */

{
    name: "Бирючина пестролистная",
    price: "1 500 ₽",
    category: "Кустарники",
    image: "images/biryuchina.jpg"
},

{
    name: "Сирень Аметист на штамбе",
    price: "2 000 ₽",
    category: "Кустарники",
    image: "images/ametist.jpg"
},

{
    name: "Сирень Шарль Жоли на штамбе",
    price: "3 000 ₽",
    category: "Кустарники",
    image: "images/sharl-joli.jpg"
},

{
    name: "Сирень Шарль Жоли",
    price: "2 000 ₽",
    category: "Кустарники",
    image: "images/sharl-joli-2.jpg"
},

{
    name: "Сирень Сенсация",
    price: "700 ₽",
    category: "Кустарники",
    image: "images/sensaciya.jpg"
},

/* ХВОЙНЫЕ */

{
    name: "Туя Самарагд 1,2м",
    price: "4 500 ₽",
    category: "Хвойные",
    image: "images/tuya-smaragd.jpg"
},

{
    name: "Можжевельник Блю Эроу",
    price: "1 300 ₽",
    category: "Хвойные",
    image: "images/blue-arrow.jpg"
},

{
    name: "Можжевельник Лайм Глоу",
    price: "1 500 ₽",
    category: "Хвойные",
    image: "images/lime-glow.jpg"
},

/* ДЕРЕВЬЯ */

{
    name: "Липа крупнолистная",
    price: "5 500 ₽",
    category: "Деревья",
    image: "images/lipa.jpg"
},

{
    name: "Дуб Красный",
    price: "6 750 ₽",
    category: "Деревья",
    image: "images/dub.jpg"
},

{
    name: "Ива пурпурная на штамбе",
    price: "3 500 ₽",
    category: "Деревья",
    image: "images/iva.jpg"
},

{
    name: "Боярышник Пауль Скарлет",
    price: "3 500 ₽",
    category: "Деревья",
    image: "images/boyaryshnik.jpg"
},

/* МНОГОЛЕТКИ */

{
    name: "Гейхера Тирамису",
    price: "500 ₽",
    category: "Многолетки",
    image: "images/geyhera.jpg"
},

{
    name: "Георгины бордюрные",
    price: "500 ₽",
    category: "Многолетки",
    image: "images/georginy.jpg"
},

{
    name: "Гербера рассада",
    price: "500 ₽",
    category: "Многолетки",
    image: "images/gerbera.jpg"
},

{
    name: "Невянник",
    price: "400 ₽",
    category: "Многолетки",
    image: "images/nevyannik.jpg"
},

{
    name: "Хоста Подорожниковая С3",
    price: "450 ₽",
    category: "Многолетки",
    image: "images/hosta.jpg"
},

/* ОДНОЛЕТКИ */

{
    name: "Колебрахоа рассада",
    price: "320 ₽",
    category: "Однолетки",
    image: "images/kolebrahoa.jpg"
},

{
    name: "Колеусы рассада",
    price: "250 ₽",
    category: "Однолетки",
    image: "images/koleus.jpg"
},

{
    name: "Цинерария рассада",
    price: "40 ₽",
    category: "Однолетки",
    image: "images/cineraria.jpg"
},

{
    name: "Петуния махровая рассада",
    price: "650 ₽",
    category: "Однолетки",
    image: "images/petuniya.jpg"
},

{
    name: "Фуксия",
    price: "1 650 ₽",
    category: "Однолетки",
    image: "images/fuksiya.jpg"
},

{
    name: "Гелиотроп рассада",
    price: "400 ₽",
    category: "Однолетки",
    image: "images/geliotrop.jpg"
},

/* РОЗЫ */

{
    name: "Роза плетистая Лагуна",
    price: "2 500 ₽",
    category: "Розы",
    image: "images/laguna.jpg"
},

{
    name: "Роза Блю Маджента",
    price: "2 500 ₽",
    category: "Розы",
    image: "images/blue-magenta.jpg"
},

{
    name: "Роза Lichtkonigin Lucia",
    price: "1 500 ₽",
    category: "Розы",
    image: "images/lichtkonigin.jpg"
},

{
    name: "Лихткёниген Лючия",
    price: "1 500 ₽",
    category: "Розы",
    image: "images/lucia.jpg"
}

];
