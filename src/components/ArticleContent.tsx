import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

type Props = {
  activeArticle: string | null;
  onClose: () => void;
};

const ArticleContent = ({ activeArticle, onClose }: Props) => {
  const [diaryData, setDiaryData] = useState<
    { id: string; date: string; title: string }[]
  >([]);

  useEffect(() => {
    const loadDiary = async () => {
      const snapshot = await getDocs(collection(db, "diary"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any;

      setDiaryData(data);
    };

    loadDiary();
  }, []);

  // 🔒 blokada scrolla tła
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeArticle]);

  if (!activeArticle) return null;

  const formatDate = (date: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("pl-PL");
  };

  const renderContent = () => {
    switch (activeArticle) {
      case "Bezpieczny kredyt 2%":
        return (
          <>
            <p>Czy słyszałeś o rewolucyjnym kredycie, który pozwala ci sięgnąć po marzenia o własnym mieszkaniu? Teraz
        jest to możliwe! Ten niesamowity kredyt oferuje maksymalną kwotę aż 500 tys. zł dla jednej osoby i aż 600
        tys. zł dla małżeństwa lub rodziców z dzieckiem! To szansa, której nie możesz przegapić.
      </p>
      <p>Co więcej, rządowe dopłaty do rat sprawiają, że spłata tego kredytu staje się jeszcze bardziej przystępna.
        Wyobraź sobie, że otrzymasz różnicę między stałą stopą oprocentowania a niesamowicie niską stopą 2% przez 10
        lat! To naprawdę niesamowite wsparcie, które pomoże ci zrealizować plany mieszkaniowe.
      </p>
      <p>Nie musisz się martwić o to, czy mieszkanie jest z rynku pierwotnego czy wtórnego - ten kredyt obejmuje
        obie opcje. I co najlepsze, nie ma limitów cen za metr kwadratowy mieszkania, więc masz pełną swobodę
        wyboru. Pozwoli ci na sfinansowanie zakupu mieszkania w Polkowicach.
      </p>
      <p>To jest właśnie ten moment, aby zacząć realizować swoje marzenia o własnym gniazdku. Złap tę szansę,
        skorzystaj z tego niesamowitego kredytu oprocentowanego na poziomie 2% i już dziś zdecyduj się na zakup Apartamentów przy Kaktusowej!
      </p>
      <div>
        <p>Po wieciej informacji oraz dodatkowe przykłady zajrzyj na
          <a
            href="https://www.gov.pl/web/rozwoj-technologia/bezpieczny-kredyt"
          >www.gov.pl/bezpieczny-kredyt
          </a>
        </p>
      </div>
      <div>
        <h3>Lista banków udzielających kredyty w ramach programu <span>Bezpieczny kredyt 2%</span></h3>
        <ul />
        <p>Aktualna lista banków współpracyjących w ramach programu <span>Bezpieczny kredyt 2%</span> dostępna jest
          na stronie <span>Banku gospodarstwa Krajowego</span>
          <a
            href="https://www.bgk.pl/osoby-prywatne/mieszkalnictwo/bezpieczny-kredyt-2/#c28119"
          >www.bgk.pl/bezpieczny-kredyt-2%
          </a>
        </p>
        <ol>
          <li>Alior Bank S.A.</li>
          <li>Bank BPS i Banki Spółdzielcze Zrzeszenia BPS</li>
          <li>Bank PEKAO S.A.</li>
          <li>Bank Spółdzielczy Rzemiosła w Krakowie</li>
          <li>Bank Spółdzielczy w Brodnicy</li>
          <li>PKO Bank Polski S.A.</li>
          <li>SGB-Bank S.A.</li>
          <li>VeloBank S.A.</li>
        </ol>
      </div>
      <div className="article__safe-credit-notion">
        <p>Oferujemy pomoc w uzyskaniu <span>Bezpiecznego kredytu 2%</span> ! Współpracujemy od momentu sprawdzenia
          spełaniania warunków programu, przez dopełnianie formalności i składanie dokumentów aż do uzyskania
          pozystywnej decyzji na zakup mieszkania.
        </p>
        <a className="contact-button" href="tel:+48507126941"><i className="fa-solid fa-phone" />507 126 941</a>
        <a className="contact-button" href="mailto:e-mail: cuf.polkowice@poczta.fm"><i
          className="fa-solid fa-envelope"
        /> cuf.polkowice@poczta.fm
        </a>
            <p>
              Maksymalna kwota to aż <strong>500 tys. zł</strong> dla jednej osoby i{" "}
              <strong>600 tys. zł</strong> dla rodzin.
            </p>

            <p>
              Dzięki dopłatom rządowym przez 10 lat płacisz realnie około <strong>2%</strong>.
            </p>

            <div className="bg-[var(--color-primary)]/10 p-4 rounded-lg">
              <p className="font-medium">
                Oferujemy pomoc w uzyskaniu kredytu – od analizy po decyzję.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="tel:+48507126941"
                  className="px-4 py-2 bg-[var(--color-primary)] text-white rounded"
                >
                  📞 507 126 941
                </a>
              </div>
            </div>
            </div>
          </>
        );

      case "Zmiany lokatorskie":
        return (
          <>
            <p>Zmiany lokatorskie to modyfikacje w oryginalnym planie mieszkania, które nabywca może wprowadzić na etapie
        budowy stanu deweloperskiego. Oferując tę opcję, dajemy klientom szansę dostosowania swojego przyszłego
        mieszkania w Polkowicach do własnych potrzeb i preferencji.
      </p>
      <h3>Oto kilka przykładów, jakie możliwości istnieją w ramach wprowadzenia zmian lokatorskich w Apartamentach Kaktusowa:</h3>
      <ul>
        <li><span>Ściany działowe i drzwi wewnętrzne:</span>
          <p>
            Można przemyślanie przesuwać, dodawać lub usuwać, aby
            uzyskać optymalny układ pomieszczeń. To pozwoli na stworzenie bardziej funkcjonalnej przestrzeni, np.
            przesunięcie ściany działowej w łazience, aby pomieścić wannę zamiast kabiny prysznicowej lub dodanie
            ściany, aby stworzyć garderobę. Zrezygnowanie z niektórych drzwi wewnętrznych może otworzyć przestrzeń i
            nadać mieszkania bardziej przestronny charakter.
          </p>
        </li>
        <li><span>Instalacje elektryczne:</span>
          <p>Możliwość dostosowania rozmieszczenia gniazdek elektrycznych, punktów oświetlenia i włączników do własnych
            preferencji. Warto zadbać o odpowiednią ilość gniazdek w miejscach, gdzie planujemy pracę lub umieścić je
            w dogodnych miejscach, aby uniknąć przedłużaczy. Zmiany w lokalizacji gniazdek, aby uniknąć ukrytych za
            meblami, mogą wpłynąć na funkcjonalność i estetykę mieszkania.
          </p>
        </li>
        <li><span>Instalacja wodno-kanalizacyjna i centralne ogrzewanie:</span>
          <p>Możliwość dostosowania umiejscowienia
            prysznica, wanny, zmywarki czy piekarnika, aby lepiej odpowiadało naszym potrzebom. Wybór alternatywnych
            rozwiązań.
          </p>
        </li>
      </ul>
      <p>Ważne jest, aby zmiany nie wpływały na konstrukcję budynku ani nie naruszały przepisów budowlanych. Zmiany
        lokatorskie są możliwe na etapie budowy stanu deweloperskiego i wymagają wcześniejszej akceptacji ze strony
        dewelopera.
      </p>
      <p>Apartamenty przy ul. Kaktusowej w Polkowicach zostały zaprojektowane z myślą o maksymalnej funkcjonalności i komforcie,
        jednak wiemy, że każdy ma indywidualne potrzeby, dlatego pozostajemy otwarci na wprowadzenie zmian.
      </p>
          
            <ul className="list-disc pl-5 space-y-2">
              <li>zmiana układu ścian</li>
              <li>modyfikacja instalacji</li>
              <li>dostosowanie łazienki/kuchni</li>
            </ul>

            <p>
              Wszystko odbywa się bez naruszania konstrukcji budynku.
            </p>
          </>
        );

      case "Dziennik budowy":
        return (
          <div className="space-y-4">

            {diaryData.length === 0 && (
              <p className="text-gray-400">Brak wpisów</p>
            )}

            {diaryData
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((entry) => (
                <div key={entry.id} className="border-b pb-3 last:border-none">

                  <div className="text-xs text-gray-400 mb-1">
                    {formatDate(entry.date)}
                  </div>

                  <div className="text-sm text-gray-700">
                    {entry.title}
                  </div>

                </div>
              ))}

          </div>
        );

      case "Doradztwo kredytowe":
        return (
          <>
           <p>
              Współpracujemy z ekspertami kredytowymi, którzy pomagają znaleźć najlepszą ofertę.
            </p>
W ramach inwestycji <span>Apartamenty Kaktusowa</span> podjeliśmy współpracę z renomowanym pośrednictwem kredytowym
      <a href="https://www.cuf.polkowice.pl/material,hipoteczne,269.html">Centrum usług finansowych w Polkowicach</a>
      , który pomaga naszym klientom zrealizować ich marzenia o własnym mieszkaniu.
      <p>Nasz zaufany partner to ekspert w dziedzinie kredytów hipotecznych. Dzięki ich wsparciu, nasi klienci otrzymują kompleksową pomoc w procesie aplikacji kredytowej, z uwzględnieniem indywidualnych potrzeb każdej osoby.</p>
      <ul>
        <li>Prowizje od 0 zł</li>
        <li>Marże od 1%</li>
        <li>Szybki proces decyzyjny</li>
        <li>Kredyty do 90% wartości nieruchomości</li>
        <li>Okres kredytowania do 35 lat</li>
        <li>Oferty kredytowe ponad 10 banków, aby dobrać tą nalepszą dla Ciebie</li>
      </ul>
      <p>Jeśli szukasz pewnego partnera w zakresie kredytów hipotecznych, który wesprze Cię na każdym kroku tego skomplikowanego procesu, zapewniamy, że nasz eksperci z Centrum Usług Finanowych są najlepszym wyborem! Skontaktuj się z nimi już dziś i przekonaj się, jak mogą pomóc Ci w realizacji Twoich planów mieszkaniowych. Razem z nimi, Twoje wymarzone mieszkanie staje się bliżej, niż myślisz!</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>prowizja od 0%</li>
              <li>oferty wielu banków</li>
              <li>szybkie decyzje</li>
            </ul>
          </>
        );

      default:
        return <p>Brak treści</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative bg-white w-full md:max-w-3xl
          rounded-t-2xl md:rounded-2xl
          shadow-xl
          max-h-[90vh] overflow-y-auto
        "
      >

        {/* HEADER (sticky = zawsze widoczny close) */}
        <div className="sticky top-0 bg-white z-20 flex justify-end p-4 border-b">
          <button
            onClick={onClose}
            className="bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 md:p-10 space-y-6">

          <h2 className="text-xl md:text-3xl font-semibold text-[var(--color-primary)]">
            {activeArticle}
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            {renderContent()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleContent;