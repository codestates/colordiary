const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    case "ADD_POST":
      return [action.payload, ...state];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          post = action.payload;
          post.editing = false;
          return post;
        } else return post;
      });
    case "FAILED_INIT":
      return state;
    default:
      return state;
  }
};

export default postReducer;
