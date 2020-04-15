const initialState = {
  breed: "",
  description: "",
  image:"",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_QUOTE_SUCCESS":
        return{
            ...state,
            breed: action.breed,
            description: action.desc,
            image:action.url,
            isFetching:false
        }
    default:
      return state;
  }
};
