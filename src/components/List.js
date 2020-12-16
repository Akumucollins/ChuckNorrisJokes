import React from "react";
import Category from "./Category";

const List = (props) => {
  const { category } = props;
  if (!category || category.length === 0)
    return <p className="list-head">No category, sorry</p>;
  return (
    <ul>
      <h2 className="list-head">Available Public Categories</h2>
      {category.map((category, index) => {
        console.log(category);
        return (
          <li key={index} className="list">
            <span className="category-text">{category} </span>
            <Category />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
