import React from 'react';

const Article = ({title, url, _id, date, handleClick, buttonText, saved}) => (
    <div className="d-flex justify-content-between">
        <a href={url} target="_blank">{title}</a>
        <button className="btn btn-dark" onClick={() => handleClick(_id)}>
            {buttonText}
        </button>
    </div>
);

export default Article;