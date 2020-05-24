import React, { Component } from 'react';
import CollectionPreview from './components/collection-preview/collection-preview.component';
// import { SearchBox } from './components/search-box/search-box.component';
import NavBar from './components/navBar/navBar.component';
import SideMenu from './components/sideMenu/sideMenu.component';
import Brands from './components/brands/brands.component';
import Footer from './components/footer/footer.component';
import { SearchBox } from './components/search-Box/search-Box.component';
import COLLECTIONS from './data/collections.data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: COLLECTIONS,
      searchField: ''
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { items, searchField } = this.state;
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <NavBar />
        <Brands />
        <SideMenu />
        <SearchBox placeholder="Search brands"
          handleChange={this.handleChange} />
        <CollectionPreview items={filtered} />
        <Footer />
      </div>
    );
  }
}
export default App;
