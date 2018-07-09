import React from 'react';

const Article = ({title, url, _id, date, handleClick, buttonText, saved}) => (
    <div className="d-flex justify-content-between">
        <em>{title}</em>
        <button className="btn btn-dark" onClick={() => handleClick(_id)}>
            {buttonText}
        </button>
    </div>
);

export default Article;