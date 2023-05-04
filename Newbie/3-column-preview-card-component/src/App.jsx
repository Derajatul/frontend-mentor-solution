import CardTemplate from './components/Card';
import './index.css';

const App = () => {
  const CARD = [
    {
      car: 'Sedans',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: 'hsl(31, 77%, 52%)',
      icon: 'icon-sedans.svg',
    },
    {
      car: 'SUVs',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: 'hsl(184, 100%, 22%)',
      icon: 'icon-suvs.svg',
    },
    {
      car: 'Luxury',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: 'hsl(179, 100%, 13%)',
      icon: 'icon-luxury.svg',
    },
  ];
  return (
    <main className='flex h-auto min-h-screen items-center justify-center'>
      <div className='cards my-5 rounded-2xl overflow-hidden flex flex-col sm:flex-row mx-5'>
        {CARD.map((n, index) => (
          <CardTemplate
            key={index + 1}
            car={n.car}
            description={n.description}
            color={n.color}
            icon={n.icon}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
