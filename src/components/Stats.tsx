
const Stats = () => {
  const stats = [
    { value: "150", label: "People Helped" },
    { value: "1", label: "Countries" },
    { value: "3", label: "Languages" },
    { value: "200+", label: "Volunteers" }
  ];

  return (
    <section className="bg-brand-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
