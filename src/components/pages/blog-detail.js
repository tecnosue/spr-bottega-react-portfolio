import React, { Component } from 'react';
import axios from 'axios';
export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
    }

    handleUpdateFormSubmission(blog) {
        this.setState({
        blogItem: blog,
        editMode: false
        });
    }

    handleFeaturedImageDelete() {
        this.setState({
            blogItem: {
                featured_image_url: ""
            }
        });
    }

    handleEditClick() {
        if (this.props.loggedInStatus === "LOGGED_IN") {
        this.setState({ editMode: true });
        }
    }

    getBlogItem() {
        axios
        .get(
        `https://susanap.devcamp.space/portfolio/portfolio_blogs/${
          this.state.currentId}`
        )
        .then(response => {
            this.setState({
                blogItem: response.data.portfolio_blog
            });
        })
        .catch(error => {
            console.log("getBlogItem error", error);
        });
    }

    componentDidMount() {
      this.getBlogItem();
    }
    
    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        }= this.state.blogItem
        return (
            <div className='blog-container'>
                <div className='content-container'>
                    <h1>{title}</h1>
                    <div className='featured-image-wrapper'>
                        <img src={featured_image_url} />
                    </div>
                
                    <div className='content'>
                        {content}
                    </div>
                </div>




            </div>
            
        );
    }
}

