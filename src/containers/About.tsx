import Description from "../components/Description";

const About = () => {
  return (
    <section id="about">
      {/* 🔥 SEO SECTION (NAJWAŻNIEJSZE) */}
<section className="py-20 lg:py-28">
  <div className="max-w-5xl mx-auto px-6 lg:px-10">

    <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden">

      {/* subtle accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)]" />

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Nowe mieszkania w Polkowicach
        <span className="block text-[var(--color-primary)] mt-1">
          Apartamenty Kaktusowa
        </span>
      </h2>

      <div className="space-y-5 text-gray-600 leading-relaxed">

        <p>
          Apartamenty Kaktusowa to nowoczesna inwestycja mieszkaniowa w Polkowicach,
          zaprojektowana z myślą o komforcie i wygodzie mieszkańców. To idealne miejsce
          dla osób, które szukają spokojnej lokalizacji, ale nie chcą rezygnować
          z dostępu do miasta.
        </p>

        <p>
          W inwestycji dostępne są <span className="text-[var(--color-primary)] font-medium">
          miejsca parkingowe podziemne oraz zewnętrzne</span>, dzięki czemu każdy mieszkaniec
          może dopasować rozwiązanie do swoich potrzeb.
        </p>

        <p>
          Polkowice to zadbane, zielone miasto z rozwiniętą infrastrukturą –
          szkołami, sklepami i terenami rekreacyjnymi. To miejsce, które łączy
          wygodę życia z kameralnym charakterem.
        </p>

        <p className="font-medium text-gray-800">
          Jeśli szukasz mieszkania w Polkowicach od dewelopera,
          Apartamenty Kaktusowa to wybór, który łączy jakość,
          funkcjonalność i dobrą lokalizację.
        </p>

      </div>

    </div>

  </div>
</section>
      {/* STICKY HERO */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <div className="parallax-section min-h-[70vh] flex items-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30">

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center text-white">

            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl mb-6 drop-shadow-lg">
              O inwestycji Apartamenty Kaktusowa
            </h2>

            <p className="text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-md">
              Wyjątkowa inwestycja w spokojnej okolicy, gdzie przyroda spotyka się
              z nowoczesnością. Tworzymy przestrzeń pełną harmonii, komfortu i wysokiego standardu życia.
            </p>

            <div className="max-w-3xl mt-6">
              <p className="text-lg leading-relaxed">
                Inwestycja podzielona jest na trzy etapy, obejmujące starannie zaprojektowane budynki,
                tworzące spójną i estetyczną zabudowę z zieloną przestrzenią wspólną.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-[var(--color-bg-soft)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <Description
              title="Dostęp i parking"
              img="car.webp"
              alt="Samochód na drodze"
              text="Wygodne drogi dojazdowe oraz parking zewnętrzny i podziemny zapewniają komfort i bezpieczeństwo."
            />

            <Description
              title="Różnorodność"
              img="window.webp"
              alt="Okno"
              text="Przestronne mieszkania z dużą ilością światła i wysoką jakością wykonania."
            />

            <Description
              title="Natura"
              img="jogging.webp"
              alt="Jogging"
              text="Bliskość terenów zielonych sprzyja aktywnemu i spokojnemu stylowi życia."
            />

          </div>

        </div>
      </div>



    </section>
  );
};

export default About;