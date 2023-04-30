import './index.css';
import Card from './components/Card';

function App() {
  return (
    <main>
      <div className='intro'>
        <h2>Reliable, efficient delivery</h2>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <Card
        title='Supervisor'
        subTitle='Monitors activity to identify project roadblocks'
        img='./icon-supervisor.svg'
      />
      <Card
        title='Team Builder'
        subTitle='Scans our talent network to create the optimal team for your project'
        img='./icon-team-builder.svg'
      />
      <Card
        title='Karma'
        subTitle='Regularly evaluates our talent to ensure quality'
        img='./icon-karma.svg'
      />
      <Card
        title='Calculator'
        subTitle='Uses data from past projects to provide better delivery estimates'
        img='./icon-calculator.svg'
      />
    </main>
  );
}

export default App;
