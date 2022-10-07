import React, { Component } from "react";
import axios from "axios";



export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };

  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://susanap.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { whithCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        });
      })
      .catch((error) => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      id,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no repeat",
      backgroundPosition: "center center"

    }

    const logoStyles = {
      width: "200 px"
    };


    return (
      <div className="portfolio-detail-wrapper">
        
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description">
          <div className="description">
            {description}
          </div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            <h1>Visit {name}</h1>
          </a>
        </div>
         
      </div>
    );
  }
}
