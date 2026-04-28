import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ec564060-6002-40b8-8f45-aa1385920e59/files/d69d5e07-726e-4b44-a9fd-269a4c0125b0.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/ec564060-6002-40b8-8f45-aa1385920e59/files/ac502a5c-142f-49c4-ad1d-e259d0f387f6.jpg";

const TILES = [
  { id: 1, name: "Брусчатка классическая", price: 650, unit: "м²", size: "200×100×60 мм", color: "Серый / Красный / Жёлтый", img: CATALOG_IMG },
  { id: 2, name: "Плитка «Волна»", price: 720, unit: "м²", size: "225×112×60 мм", color: "Серый / Коричневый", img: CATALOG_IMG },
  { id: 3, name: "Плитка «Кирпич»", price: 680, unit: "м²", size: "198×98×50 мм", color: "Серый / Красный / Жёлтый", img: CATALOG_IMG },
  { id: 4, name: "Плитка «Ромб»", price: 790, unit: "м²", size: "170×170×60 мм", color: "Серый / Коричневый / Красный", img: CATALOG_IMG },
  { id: 5, name: "Плитка «Катушка»", price: 750, unit: "м²", size: "190×190×60 мм", color: "Серый / Тёмно-серый", img: CATALOG_IMG },
  { id: 6, name: "Бордюрный камень", price: 320, unit: "пог.м", size: "500×200×80 мм", color: "Серый", img: CATALOG_IMG },
];

const GALLERY = [
  { id: 1, title: "Двор жилого дома", img: HERO_IMG },
  { id: 2, title: "Городская площадь", img: CATALOG_IMG },
  { id: 3, title: "Парковая зона", img: HERO_IMG },
  { id: 4, title: "Частный двор", img: CATALOG_IMG },
  { id: 5, title: "Тротуар", img: HERO_IMG },
  { id: 6, title: "Территория предприятия", img: CATALOG_IMG },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [area, setArea] = useState("");
  const [selectedTile, setSelectedTile] = useState(TILES[0]);
  const [waste, setWaste] = useState(10);

  const totalArea = parseFloat(area) || 0;
  const areaWithWaste = totalArea * (1 + waste / 100);
  const totalCost = Math.round(areaWithWaste * selectedTile.price);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О компании" },
    { id: "catalog", label: "Каталог" },
    { id: "gallery", label: "Галерея" },
    { id: "calculator", label: "Калькулятор" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }} className="bg-white text-stone-900 min-h-screen">
      {/* НАВИГАЦИЯ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 flex items-center justify-center">
              <Icon name="Square" size={16} className="text-stone-900" />
            </div>
            <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white text-xl tracking-widest uppercase">СтройПлит</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  activeSection === item.id ? "text-amber-400" : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-800 border-t border-stone-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-6 py-3 text-stone-300 hover:text-white hover:bg-stone-700 text-sm tracking-wider uppercase transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block border border-amber-500 px-4 py-1 mb-6">
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">г. Нарткала · КБР</span>
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-5xl md:text-7xl text-white uppercase tracking-wider leading-tight mb-6">
            Тротуарная<br />
            <span className="text-amber-400">Плитка</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Производство и укладка тротуарной плитки высокого качества. Прямые поставки с завода.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("catalog")}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm tracking-widest uppercase px-10 py-4 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollTo("calculator")}
              className="border border-white text-white hover:bg-white hover:text-stone-900 font-semibold text-sm tracking-widest uppercase px-10 py-4 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-stone-900/90">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15+", label: "Лет работы" },
              { value: "500+", label: "Объектов сдано" },
              { value: "50 000 м²", label: "Производство в год" },
              { value: "от 650 ₽", label: "Цена за м²" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl text-amber-400">{stat.value}</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-amber-500" />
                <span className="text-amber-600 text-sm tracking-widest uppercase">О компании</span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl text-stone-900 uppercase tracking-wide mb-6 leading-tight">
                Производство<br />
                <span className="text-amber-500">с 2009 года</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Компания «СтройПлит» — ведущий производитель тротуарной плитки в Кабардино-Балкарской Республике. Мы производим продукцию на современном оборудовании с использованием качественного сырья.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Наша плитка соответствует ГОСТ 17608-2017 и используется при благоустройстве дворов, парков, площадей и промышленных территорий. Работаем как с физическими лицами, так и с крупными подрядными организациями.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", label: "Гарантия 5 лет" },
                  { icon: "Truck", label: "Доставка по КБР" },
                  { icon: "Factory", label: "Собственное производство" },
                  { icon: "BadgeCheck", label: "Соответствие ГОСТ" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-stone-200">
                    <Icon name={item.icon} size={20} className="text-amber-500 shrink-0" />
                    <span className="text-sm text-stone-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={HERO_IMG} alt="Производство" className="w-full h-96 object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 p-6 hidden md:block">
                <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-3xl text-stone-900">15+</div>
                <div className="text-xs text-stone-800 uppercase tracking-wider mt-1">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section id="catalog" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-600 text-sm tracking-widest uppercase">Ассортимент</span>
              <div className="h-px w-12 bg-amber-500" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl text-stone-900 uppercase tracking-wide">Каталог продукции</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TILES.map((tile) => (
              <div key={tile.id} className="bg-white border border-stone-200 group hover:border-amber-400 transition-colors">
                <div className="overflow-hidden h-48">
                  <img src={tile.img} alt={tile.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-xl text-stone-900 uppercase tracking-wide mb-3">{tile.name}</h3>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Размер:</span>
                      <span className="text-stone-700">{tile.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Цвет:</span>
                      <span className="text-stone-700">{tile.color}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div>
                      <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl text-amber-500">{tile.price} ₽</span>
                      <span className="text-sm text-stone-500"> / {tile.unit}</span>
                    </div>
                    <button
                      onClick={() => { setSelectedTile(tile); scrollTo("calculator"); }}
                      className="bg-stone-900 hover:bg-amber-500 text-white hover:text-stone-900 text-xs tracking-wider uppercase px-4 py-2 transition-colors"
                    >
                      Рассчитать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-600 text-sm tracking-widest uppercase">Наши работы</span>
              <div className="h-px w-12 bg-amber-500" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl text-stone-900 uppercase tracking-wide">Галерея объектов</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((item) => (
              <div key={item.id} className="group relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white text-lg uppercase tracking-wide">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section id="calculator" className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-400 text-sm tracking-widest uppercase">Онлайн расчёт</span>
              <div className="h-px w-12 bg-amber-500" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl text-white uppercase tracking-wide">Калькулятор стоимости</h2>
            <p className="text-stone-400 mt-3">Рассчитайте стоимость заказа по площади объекта</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Выберите плитку</label>
              {TILES.map((tile) => (
                <button
                  key={tile.id}
                  onClick={() => setSelectedTile(tile)}
                  className={`w-full flex items-center justify-between px-4 py-3 border transition-colors text-left ${
                    selectedTile.id === tile.id
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-stone-700 hover:border-stone-500"
                  }`}
                >
                  <span className={`text-sm ${selectedTile.id === tile.id ? "text-amber-400" : "text-stone-300"}`}>
                    {tile.name}
                  </span>
                  <span style={{ fontFamily: "'Oswald', sans-serif" }} className={`text-base ${selectedTile.id === tile.id ? "text-amber-400" : "text-stone-400"}`}>
                    {tile.price} ₽/{tile.unit}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Площадь объекта (м²)</label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Введите площадь..."
                  className="w-full bg-stone-800 border border-stone-600 text-white text-lg px-5 py-4 focus:outline-none focus:border-amber-500 placeholder:text-stone-600 transition-colors"
                />
              </div>

              <div>
                <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">
                  Запас на отходы: <span className="text-amber-400">{waste}%</span>
                </label>
                <div className="flex gap-2">
                  {[5, 10, 15, 20].map((w) => (
                    <button
                      key={w}
                      onClick={() => setWaste(w)}
                      className={`flex-1 py-2 border text-sm transition-colors ${
                        waste === w
                          ? "border-amber-500 bg-amber-500/10 text-amber-400"
                          : "border-stone-700 text-stone-400 hover:border-stone-500"
                      }`}
                    >
                      {w}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-amber-500/40 bg-amber-500/5 p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-400">Тип плитки:</span>
                    <span className="text-stone-200">{selectedTile.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-400">Площадь:</span>
                    <span className="text-stone-200">{totalArea} м²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-400">С учётом запаса ({waste}%):</span>
                    <span className="text-stone-200">{areaWithWaste.toFixed(1)} м²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-400">Цена за м²:</span>
                    <span className="text-stone-200">{selectedTile.price} ₽</span>
                  </div>
                  <div className="h-px bg-stone-700 my-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300 text-sm uppercase tracking-wider">Итого:</span>
                    <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-3xl text-amber-400">
                      {totalCost > 0 ? `${totalCost.toLocaleString("ru-RU")} ₽` : "— ₽"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo("contacts")}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm tracking-widest uppercase py-4 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Оставить заявку
                </button>
                <p className="text-stone-500 text-xs text-center mt-3">
                  * Расчёт ориентировочный. Точная стоимость уточняется менеджером.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-600 text-sm tracking-widest uppercase">Связь с нами</span>
              <div className="h-px w-12 bg-amber-500" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl text-stone-900 uppercase tracking-wide">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["г. Нарткала,", "Кабардино-Балкарская Республика"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (000) 000-00-00", "+7 (000) 000-00-01"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 8:00 – 18:00", "Сб: 9:00 – 14:00"] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 border border-stone-200">
                <div className="w-14 h-14 bg-stone-900 flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={24} className="text-amber-400" />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-xl text-stone-900 uppercase tracking-wide mb-3">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-stone-600 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl text-stone-900 uppercase tracking-wide text-center mb-8">Оставьте заявку</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Ваше имя" className="col-span-2 md:col-span-1 border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors" />
              <input type="tel" placeholder="Номер телефона" className="col-span-2 md:col-span-1 border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors" />
              <textarea placeholder="Опишите ваш объект и задачу..." rows={4} className="col-span-2 border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors resize-none" />
            </div>
            <button
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm tracking-widest uppercase py-4 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-amber-500 flex items-center justify-center">
              <Icon name="Square" size={12} className="text-stone-900" />
            </div>
            <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white text-lg tracking-widest uppercase">СтройПлит</span>
          </div>
          <p className="text-stone-500 text-sm">© 2024 СтройПлит · Производство тротуарной плитки · г. Нарткала</p>
        </div>
      </footer>
    </div>
  );
}