import axios from "axios";

export const updateCat = (newCat) => {
  //return { type: "UPDATE_CAT", payload: newCat };
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_id=${newCat}`)
      .then((res) => {
        const getData = res.data[0].breeds[0];
        dispatch({
          type: "FETCH_QUOTE_SUCCESS",
          url: res.data[0].url,
          breed: getData.name,
          desc: getData.description,
        });
      })
      .catch((err) => {
        //console.log(err)
        dispatch({
            type: 'FETCH_QUOTE_FAILURE',
            payload: "please fill in first 4 characters of cat breed",
          });
      });
  };
};
