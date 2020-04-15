import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchCat, updateCat } from "../store/actions/fetchAction";

// import { fetchQuote } from "../store/actions/quoteActions";
const Cat = (props) => {
  console.log("props", props);
  useEffect(() => {
    // call an action creator
    props.fetchCat();
  }, []);

  const [catBreed, setCatBreed] = useState("");

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
      <h1>🐈 Meow 🐱</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="first 4 characters"
          value={catBreed}
          onChange={handleChange}
        />
        <button onClick={() => props.updateCat(catBreed)}>find more cat</button>
        <p>*please fill in first 4 characters of cat breed</p>
      </form>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={20} width={20} />
      )}
      <h3>{props.breed}</h3>
      <img src={props.image} alt="cat" className="catImage" />
      <p>Description: {props.description}</p>
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
export default connect(mapStateToProps, { fetchCat, updateCat })(Cat);
