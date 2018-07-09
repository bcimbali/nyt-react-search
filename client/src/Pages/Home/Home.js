import React, { Component } from 'react';
import API from './../../utils/API.js';
import Article from './../../Components/Article';

class Home extends Component {
    state = {
        articles: [],
        savedArticles: [],
        q: "",
        start_year: "",
        end_year: ""
    }

    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
    }

    // my methods here
    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
        .then(res => 
        this.setState({
            articles: res.data,
        })
      )
      .catch(err => console.log(err));
    }

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => {this.getSavedArticles();this.getArticles()});
    }
    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
            this.setState({
                savedArticles: res.data
            })
        )
        .catch(err => console.log(err));
    }

    // Render gets called when state changes
    render() {
        return (
                <div className="d-flex justify-content-center p-2 row">
                    <div className="d-flex justify-content-center p-2 row">
                    <div className="border bg-info col-10 mx-auto text-center">
                        <h3>Results</h3>
                    </div>
                    {this.state.articles.map(article => (
                        <div className="border col-10">
                            <Article
                                key={article._id}
                                _id={article._id}
                                title={article.headline.main}
                                url={article.web_url}
                                date={article.pub_date}
                                handleClick={this.handleArticleSave}
                                buttonText="Save Article"
                            />
                        </div>
                    ))}
                    </div>
                    <div className="d-flex justify-content-center p-2 row">
                        <div className="border bg-info col-10 mx-auto text-center">
                            <h3>Saved Articles</h3>
                        </div>
                    {this.state.savedArticles.map(article => (
                        <div className="border col-10 mx-auto text-center">
                            <Article
                                key={article._id}
                                _id={article._id}
                                title={article.title}                  
                                buttonText="Delete Article"
                            />
                        </div>
                    ))}
                    </div>
                </div>
        )
    }
};

export default Home;