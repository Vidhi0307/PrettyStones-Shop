import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { QUERY_CATEGORIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

function CategoryMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;
  //fetching Categories from back end
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      //if not loaded from backend fetch from index db
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  //function handling filtering items based on categories chosen.
  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <Nav className="me-auto">
        {categories.map((item) => (
          <Nav.Link
            className="navbar m-1 fs-5"
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </Nav.Link>
        ))}
      </Nav>

      {}
    </div>
  );
}

export default CategoryMenu;
