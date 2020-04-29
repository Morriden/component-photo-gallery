import React, { Component } from 'react'
import hornData from './data.js';
import Animal from './animal.js'
import app from './App.css'



export default class App extends Component { 
  
  state = { selected: null, selected2: null, selected3: null}

  AnimalTypeChange = (e) => {
    this.setState({ selected: e.target.value });
  };
  HornTypeChange = (e) => {
    this.setState({ selected2: e.target.value });
  };
  AnimalNameChange = (e) => {
    this.setState({ selected3: e.target.value });
  };


  render() {
    return (
      <div>
        <header>
          {/* <img src="" alt=""/> */}
          <h1>The Horn to Rule All Horns</h1>
        </header>

        <main>
          <section className="allheaders">
            <section className="hornOptions">
              <select className="horn-filter" onChange={this.AnimalTypeChange}>
                <option value="" defaultValue>
                  All Animals
                </option>
                <option value="narwhal">Narwhal Horns</option>
                <option value="rhino">Rhino Horns</option>
                <option value="unicorn">Unicorn Horns</option>
                <option value="unilego">Unilego Horns</option>
                <option value="triceratops">Triceratops Horns</option>
                <option value="markhor">Markhor Horns</option>
                <option value="mouflon">Mouflon Horns</option>
                <option value="addax">Addax Horns</option>
                <option value="chameleon">Chameleon Horns</option>
                <option value="lizard">Lizard Horns</option>
                <option value="dragon">Dragon Horns</option>
              </select>
            </section>
            <section className="numOfHorns">
              <select className="numOfHorns-filter" onChange={this.HornTypeChange}>
                <option value="" defaultValue>
                  Number Of Horns
                </option>
                <option value={1}>One Horn</option>
                <option value={2}>Two Horns</option>
                <option value={3}>Three Horns</option>
                <option value={100}>100 Horns</option>
              </select>
            </section>
            <section className="nameofanimal">
              <select className="nameofanimal-filter" onChange={this.AnimalNameChange}>
                <option value="" defaultValue>
                  All Choices
                </option>
                <option value="UniWhal">UniWhal</option>
                <option value="Rhino Family">Rhino Family</option>
                <option value="Unicorn Head">Unicorn Head</option>
                <option value="UniLego">UniLego</option>
                <option value="Basically a unicorn">Basically a unicorn</option>
                <option value="#truth">#truth</option>
                <option value="Baby Rhino">Baby Rhino</option>
                <option value="Cera">Cera</option>
                <option value="Narwhal costume">Narwhal costume</option>
                <option value="Rhino costume">Rhino costume</option>
                <option value="Believe">Believe</option>
                <option value="Markhor">Markhor</option>
                <option value="Baby markhor">Baby markhor</option>
                <option value="Mouflon">Mouflon</option>
                <option value="Addax">Addax</option>
                <option value="Baby mouflon">Baby mouflon</option>
                <option value="Happy Jackson's Chameleon">Happy Jackson's Chameleon</option>
                <option value="Serious Jackson's Chameleon">Serious Jackson's Chameleon</option>
                <option value="Horned Lizard">Horned Lizard</option>
                <option value="Smaug">Smaug</option>
                
              </select>
            </section>
          </section>
          <section className="list-section">
            <ul className="horns">
              {
                hornData
                  .filter(animal => {
                    if (!this.state.selected) return true;

                    return animal.keyword === this.state.selected;
                  })
                  .filter(animal => {
                    if (!this.state.selected2) return true;
                    console.log(animal.horns === Number(this.state.selected2), animal.horns)
                    return animal.horns === Number(this.state.selected2);
                  })
                  .filter(animal => {
                    if (!this.state.selected3) return true;
                    console.log(animal.title === this.state.selected3, animal.title)
                    return animal.title === this.state.selected3;
                  })
                  .map(animal => {
                    return <Animal animal={animal} />
                  })
              }

            </ul>
            </section>

        </main>

      </div>            





    );
  }
}

