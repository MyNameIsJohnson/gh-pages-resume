import React, { Component } from "react";
import Home from "./components/Home"
// import Header from "./Header";
import Summary from "./Summary";
import Work from "./Work";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";

class App extends Component {
  state = {
    counters: 0,
    summary: 0
  }
  
  increaseCounters = () => {
    this.setState({ counters: this.state.counters + 1 })
  }
  
  decreaseCounters = () => {
    this.setState({ counters: this.state.counters - 1 })
  }
  addSummary = () => {
    this.setState({ summary: this.state.summary + 1 })
  }
  
  delSummary = () => {
    this.setState({ summary: this.state.summary - 1 })
  }
    
  render() {
    return (
      <div className="App">
        <Home />

        {/* <Header 
          // counters={this.state.counters}
          // summary={this.state.summary}
          // increaseCounters={this.increaseCounters}
          // decreaseCounters={this.decreaseCounters}
          // addSummary={this.addSummary}
          // delSummary={this.delSummary}           
        /> */}
        {/* <Summary 
          // counters={this.state.counters} 
          // summary={this.state.summary}
        />
        <Work 
        /> 
        <Projects 
        />
        <Education 
        />
        <Footer /> */}
        </div>
    );
  }
}

export default App;