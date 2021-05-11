import React ,{ Component} from 'react' ;
import './style__morra.css';


class MorraCard extends Component {
    render() {
    return (
        <div className='Contenitore' id={this.props.card.titolo} >
            <h6>{this.props.card.titolo}</h6>
            <img src={this.props.card.immagine} className='Image' alt='' width='60' height='50'/>
            <button onClick={()=>this.props.onGame(this.props.card.titolo)} className='inputScelta'>Choose {this.props.card.titolo}</button>
        </div>
    );
}
}

export default MorraCard;