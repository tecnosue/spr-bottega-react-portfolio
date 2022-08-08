import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      PageTitle: "Bienvenido a mi portafolio",
      isLoading: false,
      data: [
        { title: "Quip", category:"eCommerce", slug:"Quip" },
        { title: "Eventbrite", category:"Scheduling", slug:"Eventbrite" },
        { title: "Ministry Safe", category: "Enterprise", slug:"Ministry Safe"},
        { title: "SwingAway", category:"eCommerce", slug:"SwingAwa" },
      ]
    };
    this.handleFilter = this.handleFilter.bind(this);

  }
  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS"){
      this.getPortfolioItems(filter);
    } else {
      this.getPortfolioItems(filter);
    } 
  
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })

    })

  }
  portfolioItems() {

    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("eCommerce")}
          >
            eCommerce
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Scheduling")}
          >
            Scheduling
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Enterprise")}
          >
            Enterprise
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}