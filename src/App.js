import React, { Component } from 'react';
import './App.css';
import Sound from 'react-sound';
import soundFile from './sound/silverman-ft-warped-telman-dous.mp3';
import SuscribeForm from './subcribeForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Results from './Results'
import Forum from './Forum'
import Promotion from './Promotion'
import createBrowserHistory from "history/createBrowserHistory";
import SelectArtist from './SelectArtist';
import Vote from './Vote'
const history = createBrowserHistory()

function About() {
  return <h2>About</h2>;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
    <Router history={history}>
        <div className="App" style={{backgroundColor:"#303030",height:'1000px', position:'relative'}}>
        <div style={{backgroundColor:"black",height:'2em', width:'100%', color:'white', textAlign:'right', position:'absolute', marginBottom:'10px', display:'block'}}>
            <span style={{marginRight:'10%'}}>SONY</span>
        </div>
        <div style={{marginRight:'auto',marginLeft:'auto', width:'70%', backgroundColor:'white', height:'1000px', display:'block', position:'relative', top:'2em'}}>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={SuscribeForm} />
          <Route path="/results" component={Results} />
          <Route path="/forum" component={Forum} />
          <Route path="/select" component={SelectArtist} />
          <Route path="/promotion" component={Promotion} />
          <Route path='/vote' component={Vote}/>

        </div>
        </div>
      </Router>

    );
  }
}

export default App;
