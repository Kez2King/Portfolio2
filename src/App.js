import './App.css';
import Findme from './components/myInfo';
import Maintext from './components/moreInfo';
import Details from './components/specifics';

function App() {
  return (
    <div className="App">
      <header></header>
      <aside>
        <div class="Info">
            <div id="photo"></div>
            <div id="Contacts">
              <h1>Mar'Kez Carter</h1>
              <h2>Junior Software Engineer</h2>
              <h3>Phone# : 404-960-2850</h3>
              <h3>Email: markezbjc@gmail.com</h3>
              <Findme location="Github" src="https://github.com/Kez2King"/>
              <Findme location="LinkedIn" src="https://www.linkedin.com/in/MarkezCarter"/>
            </div>
        </div>
      </aside>
      <main>
        <div class="info">
          <h3><b>Scroll For More</b></h3>
          <Maintext title="Summary" content="Junior Software Engineer with the ability to adapt and progress through given challenges, striving to learn more."/>
          <Maintext title="Software Developer Skills" content="HTML || CSS || Javascript ||  React.js ||  Node.js || Python"/>
          <Maintext title="Experience" content={<Details place="DigitalCrafts, City of Refugee - Atlanta, GA"
                    term="August 2021 - Present"
                    text="A 16 week program dedicated to producing hardworking, talented  software engineers. Also, this 
                    program helps students gain the skills needed to continue learning and become efficient in their roles, as engineers."/>}/>
          <Maintext title="Education" content={<Details place="Barry University, Miami, FL - Computer Science/ BA" term="August 2019 - December 2020"
                    text="I majored in Computer Science and was a math minor. While in college, I was introduced to Python and spent my last semester 
                    trying to understand. After I returned home, my mom took her first development course and I helped her through it. This was the 
                    start of my journey."/>}/>
          <Maintext title="Projects" content=""/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;