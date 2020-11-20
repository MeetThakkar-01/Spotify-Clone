export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token: null,
  // token:
  //   "BQCYDvF0F6pr1BGOnrUMU2lLOKyt4P43OXCbI8NQEDvdllOZpkCBRJfeKAglL8dgeP1jCO0tjROhCCuN_Md4wtsWtb7qpJh8ey6VKszdfsyVDoS778kt1s18iwGj3F4i2W_oGXDztBJr2CBCqTUZ_15BjLAtppwoM6heKhTYC5a_eCNYDj4_",
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
    case "SET_PLAYLISTS":
      console.log("++++++++++", action.playlists);
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      console.log("**************", action.discover_weekly);
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
