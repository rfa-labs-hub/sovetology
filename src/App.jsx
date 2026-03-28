import React from 'react';
import { ArrowDown } from 'lucide-react';

const App = () => {
  const specialists = [
    {
      id: 1,
      name: "Андрей Родионов",
      role: "Психотерапевт, супервизор, ВИЧ-консультант",
      image: "/images/1.jfif",
      descTitle: "То, над чем мы работаем вместе:",
      descItems: [
        "Честность с собой",
        "Построение здоровых отношений",
        "Сепарация и выстраивание личных границ",
        "Пересборка себя заново после кризиса",
        "Поиск себя и своих ценностей",
        "Полное принятие своей идентичности",
        "Власть над зависимостью и обретение контроля"
      ]
    },
    {
      id: 2,
      name: "Мария Феофилова",
      role: "Детско-подростковый семейный терапевт",
      image: "/images/2.jfif",
      descTitle: "С какой проблематикой я работаю:",
      descItems: [
        "Детские возрастные кризисы",
        "Норма и патология",
        "Подростковый возраст",
        "Сопровождение семьи подростком",
        "Семейные консультации в паре с ко-терапевтом"
      ]
    },
    {
      id: 3,
      name: "Гостюхина Татьяна",
      role: "Психотерапевт, супервизор",
      image: "/images/3_new.jpg",
      descTitle: "Работаю с запросами по преодолению:",
      descItems: [
        "Тревоги и панических атак",
        "Стресса и выгорания",
        "Конфликтов и трудностей в отношениях",
        "Низкой самооценки и самокритики",
        "Кризисных состояний и потерь"
      ]
    },
    {
      id: 4,
      name: "Алена Скворцова",
      role: "Психолог, психотерапевт",
      image: "/images/4.jfif",
      descTitle: "Работаю с запросами:",
      descItems: [
        "Трудности в отношениях",
        "Тревожные и депрессивные состояния",
        "Панические атаки",
        "Переживание горя, утраты",
        "Переживание тяжелой жизненной ситуации (измена, развод, болезнь...)",
        "Неуверенность в себе, недовольство собой и своей жизнью"
      ]
    },
    {
      id: 5,
      name: "Елена Урычева",
      role: "Индивидуальный и семейный психолог, горепросветительница, специалист по работе с зависимым и проблемным поведением",
      image: "/images/5_new.jpg",
      descTitle: "Работаю с запросами:",
      descItems: [
        "Тревожные состояния",
        "Возрастные кризисы",
        "Пространство горя потерь",
        "Зависимое поведение",
        "Семейные/парные консультации"
      ]
    },
    {
      id: 6,
      name: "Ращектаева Аня",
      role: "Психолог, психотерапевт",
      image: "/images/6_new.jpg",
      descTitle: "Работаю с запросами:",
      descItems: [
        "Изучение, анализ и трансформация жизненного сценария",
        "Тревожно-депрессивные состояния",
        "Панические атаки",
        "Кризисные жизненные ситуации",
        "Психологическое сопровождение горя и утраты",
        "Экзистенциальные темы — одиночество, смысл/бессмысленность жизненного пути",
        "Измена как симптом семьи",
        "Психосоматика"
      ]
    },
    {
      id: 7,
      name: "Марина Булашова",
      role: "Психолог, психотерапевт, семейный системный психотерапевт, супервизор",
      image: "/images/7_new.jpg",
      descTitle: "Работаю с запросами:",
      descItems: [
        "Тревога, страхи, панические атаки",
        "Ограничивающие убеждения, низкая самооценка, неуверенность в себе, непринятие себя",
        "Утраты",
        "Проблемы в отношениях с родителями во взрослом возрасте",
        "Сложности в построении или сохранении отношений",
        "Проблемы между супругами"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Навигация (декоративная) */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <span className="font-serif text-xl tracking-widest pointer-events-auto">СОВЕТОЛОГИ</span>
        <span className="text-xs uppercase tracking-[0.2em] opacity-80 pointer-events-auto hidden sm:block">Психологическая группа</span>
      </nav>

      {/* БЛОК 1: СТАРТ (HERO) */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative pt-20">
        <div className="max-w-5xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-12 font-light">
            Здесь каждый из нас раскрывается не только как эксперт, но и как человек.
          </h1>
          
          <div className="md:ml-12 max-w-2xl mt-12 space-y-10">
            <p className="font-light text-lg md:text-xl leading-relaxed text-neutral-800 text-justify md:text-left">
              Мы делимся личными историями, через которые пришли в профессию, сомнениями, что нас меняли, и уроками, которые стали частью нашей жизни. Мы не скрываемся за терминами — за каждым методом стоит личный опыт, а за теорией — живая вера в то, что даже специалисту нужно оставаться настоящим.
            </p>
            
            <button className="group relative px-8 py-4 border border-black overflow-hidden transition-all hover:pr-12 duration-300">
              <span className="relative z-10 text-sm uppercase tracking-[0.15em] font-medium transition-colors group-hover:text-white">
                Записаться на консультацию
              </span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 animate-bounce duration-[2000ms]">
          <ArrowDown className="w-5 h-5 opacity-50" strokeWidth={1} />
        </div>
      </section>

      {/* БЛОК 2: О КАЖДОМ ПСИХОЛОГЕ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-8">
          
          {/* Заголовок секции */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl sticky top-32">Эксперты</h2>
          </div>

          {/* Список специалистов */}
          <div className="md:col-span-9 space-y-0">
            {specialists.map((specialist) => (
              <div key={specialist.id} className="group border-t border-black/20 py-12 md:py-16 first:border-t-0 transition-colors duration-500 -mx-6 px-6 md:mx-0 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                  
                  {/* ФОТО + Имя + Регалии (Левая часть) */}
                  <div className="md:w-5/12 flex flex-col gap-6">
                    {/* Фотография */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                      <img 
                        src={specialist.image} 
                        alt={specialist.name}
                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>
                    
                    {/* Имя и регалии под фото */}
                    <div>
                      <h3 className="font-serif text-3xl mb-3 group-hover:italic transition-all duration-300">{specialist.name}</h3>
                      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 leading-relaxed font-medium">
                        {specialist.role}
                      </p>
                    </div>
                  </div>

                  {/* Правая часть: Запросы (списком) */}
                  <div className="md:w-7/12 pt-0 md:pt-4">
                    <div className="space-y-6 md:pl-8 border-l border-black/0 md:border-black/5 md:group-hover:border-black/20 transition-colors duration-500">
                      {specialist.descTitle && (
                        <p className="font-serif italic text-xl text-black/80">
                          {specialist.descTitle}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {specialist.descItems.map((item, idx) => (
                          <li key={idx} className="text-neutral-600 font-light leading-relaxed flex gap-4 text-sm md:text-base">
                            <span className="shrink-0 opacity-30 mt-[0.6em] w-1.5 h-1.5 rounded-full bg-black block"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 3: ФИНАЛЬНЫЙ БЛОК */}
      <section className="py-32 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center border-t border-black/10 bg-neutral-50">
        <div className="max-w-2xl mx-auto space-y-12">
          <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-neutral-800">
            «Самый важный разговор в вашей жизни — это разговор с самим собой. Мы помогаем сделать его честным.»
          </p>
          
          <div className="w-16 h-px bg-black/20 mx-auto"></div>
          
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Начните сегодня</p>
            <a href="#contact" className="hover-underline-animation text-xl md:text-2xl font-light pb-1 cursor-pointer">
              hello@sovetology.ru
            </a>
            <p className="text-neutral-400 font-light text-sm mt-8">
              Конфиденциально. Профессионально. Бережно.
            </p>
          </div>
        </div>
      </section>

      {/* Простой футер */}
      <footer className="py-8 px-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 border-t border-black/5">
        <span>© 2024 Sovetology</span>
        <span>Москва, Чистые пруды</span>
      </footer>
    </div>
  );
};

export default App;
