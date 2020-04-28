import React, { Component } from 'react'
import hornData from './data.js';
import Horn from './horn.js'



export default class App extends Component { 
  
  state = { selected: null };

  hornChange = (e) => {
    this.setState({ selected: e.target.value });
  };
  render() {
    return (
      <div>
        <header>
          <img src="" alt=""/>
          <h1>The Horn to Rule All Horns</h1>
        </header>

        <main>
          <section className="hornOptions">
            <select className="cat-type-filter" onChange={this.hornChange}>
              <option value="" defaultValue>
                All Types
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
          <section className="list-section">
            <ul className="horns">
              {
                hornData
                  .filter(horn => {
                    if (!this.state.selected) return true;

                    return horn.keyword === this.state.selected;
                  })
                  .map(horn => {
                    return <Horn horn={horn} />
                  })
              }

            </ul>

          </section>

        </main>

      </div>            





    );
  }
}

