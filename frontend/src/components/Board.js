
import FieldSelf from './FieldSelf'
import FieldOpponent from './FieldOpponent'
import Opponent from './Opponent'
import Self from './Self'
import Hand from './Hand'
import React, {Component} from 'react'
import axios from 'axios'
import { isConstructorDeclaration } from 'typescript'




class Board extends React.Component { 
//  function Board({parentToChild}){
  constructor(props) {
    super(props);
    this.state = {game: ''};
    this.getGame = this.getGame.bind(this);
  }

    componentDidMount() {
        this.timer = setInterval(()=> this.getGame(), 1000);
        console.log(this.props.parentToChild);
        
      }
    
    //   componentWillUnmount() {
    //     this.timer = null;
    //   }

      
    
      getGame() {
        
        // if(this.props.parentToChild != ''){
        //   let url = `http://localhost:8080/game/games/${this.props.parentToChild}`;
        //   axios.get(`${url}`).then(function (response) { console.log(response); this.setState({game: response}); } );
        // }
        if(this.props.parentToChild != ''){
          let url = `http://localhost:8080/game/games/${this.props.parentToChild}`;
          axios.get(`${url}`).then( response => { console.log(response); this.setState({game: response}); } );
        }
        
        console.log(this.state.game);
      }

    render(props) {
      return (<header className="App-header">
      <div className='container'>
        <Opponent/>
        <FieldOpponent/>
        <FieldSelf/>
        <Self/>
      </div>
      <div className='container'>
        <Hand/>
      </div>
    </header>);
    }
  }
  export default Board