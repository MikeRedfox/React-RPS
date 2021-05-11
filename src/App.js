import React ,{ Component} from 'react' ;
import './App.css';
import MorraCard from "./components/morra" ;
import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';
import lizard from './images/lizard.png';
import spock from './images/spock.png';
import regole from './images/regole.png'


class App extends Component {
  state = {cards:[{ id:0,titolo:'Rock',immagine:rock},{ id:1,titolo:'Paper',immagine:paper},{ id:2,titolo:'Scissors',immagine:scissors},{ id:3,titolo:'Lizard',immagine:lizard},{ id:4,titolo:'Spock',immagine:spock}]}; 
  dict = {'Rock':{'Rock':0,'Paper':-1,'Scissors':1,'Lizard':1,'Spock':-1},
          'Paper':{'Rock':1,'Paper':0,'Scissors':-1,'Lizard':-1,'Spock':1},
          'Scissors':{'Rock':-1,'Paper':1,'Scissors':0,'Lizard':1,'Spock':-1},
          'Lizard':{'Rock':-1,'Paper':1,'Scissors':1,'Lizard':-1,'Spock':1},
          'Spock':{'Rock':1,'Paper':-1,'Scissors':1,'Lizard':-1,'Spock':0}};
  handleGame = (cardTitolo) => {
   const  Scelta = ['Rock','Paper','Scissors','Lizard','Spock'];
   let pcChoice = Scelta[Math.floor(Math.random()*Scelta.length)];
   document.getElementById('myChoice').innerHTML=cardTitolo;
   document.getElementById('CpuChoice').innerHTML=pcChoice;
   let score = parseInt(this.dict[cardTitolo][pcChoice]);
   document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + score ;
    
  }
  render () {
   let  rules = () => {
    const close = document.getElementById('close');
    const modal = document.getElementById('mymodal')
    modal.style.height = "100%";
    close.onclick = () => {
      modal.style.height = "0";
  }
  window.onclick = (e) => {
    if (e.target === modal){
      modal.style.height = "0";
    }
  }
    };
  return (
    <div className='m'>
      <div className="modal" id="mymodal">
        <div className="modal__content">
           <span id='close' className="close">&times;</span>
          <img id='regole__image' src = {regole} alt ='' height = '350'/>
       </div>
     </div>
      <h2 >Score : <span id = 'score'>0</span></h2>
      <button onClick={rules} className = 'regole'>Rules</button>
      {this.state.cards.map(card => (
        <MorraCard key={card.id} card={card} onGame={this.handleGame}/>
      ))}
      <h4 id='res'>Your choice : <span id ='myChoice'></span><br></br> CPU's choice: <span id = 'CpuChoice'></span></h4>
        <a id ='creatore' target='_/blank' href='https://twitter.com/GuardaMichele'> Creator</a>
    </div>
  );
}
}

export default App;
