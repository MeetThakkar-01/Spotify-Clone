export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQDP3c6qd_-ALb6FAOu1nao4BmdpR3e5CcC923qW7Ud97yQOv8TDOr-4xAPnrqJ-KHwC2FEhYpjSZuMwGo3y4Xfj6PkmIndZZ1uUK6Q-sfHApW_WnrD9q-Xi7cnHqoccImgUmHlIg6GqyCASHwEPGC_LhmrdUOs45JzGRFSO2ndcm9UNSccT",
};

const reducer = (state, action) => {
  console.log(action);

  //   Action > type, [PayLoad]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
