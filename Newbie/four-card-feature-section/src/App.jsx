import './index.css';
import Card from './components/Card';

function App() {
  const cardColors = {
    cyan: 'hsl(180, 62%, 55%)',
    red: 'hsl(0, 78%, 62%)',
    orange: 'hsl(34, 97%, 64%)',
    blue: 'hsl(212, 86%, 64%)',
  };
  const { cyan, red, orange, blue } = cardColors;
  return (
    <main>
      <div className='intro'>
        <h1 className='thin'>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p className='thin'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className='cards'>
        <Card
          title='Supervisor'
          subTitle='Monitors activity to identify project roadblocks'
          img='./icon-supervisor.svg'
          border={cyan}
        />
        <Card
          title='Team Builder'
          subTitle='Scans our talent network to create the optimal team for your project'
          img='./icon-team-builder.svg'
          border={red}
        />
        <Card
          title='Karma'
          subTitle='Regularly evaluates our talent to ensure quality'
          img='./icon-karma.svg'
          border={orange}
        />
        <Card
          title='Calculator'
          subTitle='Uses data from past projects to provide better delivery estimates'
          img='./icon-calculator.svg'
          border={blue}
        />
      </div>
    </main>
  );
}

export default App;
