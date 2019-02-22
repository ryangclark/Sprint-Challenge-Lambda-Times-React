import React, { Component } from 'react';

import Cards from './Cards';
import Carousel from '../Carousel/Carousel';
import Tabs from './Tabs';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedTab: 'all',
      tabs: []
    };
  }

  componentDidMount() {
    this.setState({
      cards: cardData,
      tabs: tabData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selectedTab: tab
    })
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    switch (this.state.selectedTab) {
      case 'all':
        return this.state.cards;
      default:
        return this.state.cards.filter(card => card.tab === this.state.selectedTab);
    }
  };

  selectTabHandler = event => {
    console.log('selectTabHandler event.target:', event.target.id);
    this.changeSelected(event.target.id);
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          selectedTab={this.state.selectedTab}
          selectTabHandler={this.selectTabHandler}
          tabs={this.state.tabs}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
