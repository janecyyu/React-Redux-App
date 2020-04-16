import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { updateCat } from "../store/actions/fetchAction";

// import { fetchQuote } from "../store/actions/quoteActions";
const Cat = (props) => {
  const [catBreed, setCatBreed] = useState("beng");

  useEffect(() => {
    // call an action creator
    props.updateCat(catBreed);
    setCatBreed("")
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCatBreed(e.target.value.slice(0, 4).toLowerCase());
    // console.log('catBreed',catBreed)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCatBreed("");
  };
  return (
    <div>
      <div className="header">
        <h1>🐈 Meow Kingdom🐱</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="first 4 characters"
            value={catBreed}
            onChange={handleChange}
          />
          <button onClick={() => props.updateCat(catBreed)}>
            find more breeds
          </button>
        </form>
        {props.error && <p className="error">{props.error}</p>}
        {props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={20} width={20} />
        )}
      </div>
      <div className="content">
        <div className="left">
          <img src={props.image} alt="cat" className="catImage" />
        </div>
        <div className="right">
          <h3>{props.breed}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.reducer);
  return {
    breed: state.reducer.breed,
    description: state.reducer.description,
    isFetching: state.reducer.isFetching,
    error: state.reducer.error,
    image: state.reducer.image,
  };
};
export default connect(mapStateToProps, { updateCat })(Cat);
