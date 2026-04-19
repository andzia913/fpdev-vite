const Faq = () => {
    return (<section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">

  <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
    Najczęściej zadawane pytania
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition">
      <h3 className="font-semibold mb-2 group-hover:text-[var(--color-primary)] transition">
        Czy warto kupić mieszkanie w Polkowicach?
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Polkowice to spokojne i zadbane miasto z dużą ilością zieleni,
        dobrą infrastrukturą i komfortowym stylem życia.
      </p>
    </div>

    <div className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition">
      <h3 className="font-semibold mb-2 group-hover:text-[var(--color-primary)] transition">
        Czy są dostępne miejsca parkingowe?
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Tak, inwestycja oferuje miejsca parkingowe podziemne oraz zewnętrzne,
        co zapewnia wygodę i bezpieczeństwo.
      </p>
    </div>

    <div className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition">
      <h3 className="font-semibold mb-2 group-hover:text-[var(--color-primary)] transition">
        Czym różnią się miejsca podziemne od zewnętrznych?
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Miejsca podziemne chronią samochód przed warunkami atmosferycznymi,
        a zewnętrzne zapewniają szybki dostęp i wygodę.
      </p>
    </div>

    <div className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition">
      <h3 className="font-semibold mb-2 group-hover:text-[var(--color-primary)] transition">
        Jakie mieszkania są dostępne?
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Oferujemy mieszkania 2-, 3- i 4-pokojowe w Polkowicach,
        zaprojektowane z myślą o wygodzie mieszkańców.
      </p>
    </div>

  </div>

</section>
    );
}

export default Faq;