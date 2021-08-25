import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>;
}

// propsTypes는 number, string, bool, func, node등 다양하게 존재
Movie.ProtoType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;
// export해줘야 다른 js에서 Movie라는 component를 사용가능