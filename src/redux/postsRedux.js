/* selectors */
export const getAll = ({posts}) => posts.data;
// export const getPost = (posts, id) => posts.filter(item => item.id == id)[0];

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const DELETE_POST = createActionName('DELETE_POST');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const deletePost = payload => ({ payload, type: DELETE_POST });
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });
export const addPost = payload => ({ payload, type: ADD_POST });


/* thunk creators */
// export const fetchPosts = () => dispatch => {

// }

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_STATUS: {
      const index = statePart.data.findIndex(post=>post.id == action.payload.id);
      const newArray = [...statePart.data];
      newArray[index] = action.payload;
      return {
        ...statePart,
        data: newArray,
      };
    }
    case DELETE_POST: {

      return {
        ...statePart,
        data: statePart.data.filter(post => post !== action.payload),
      };
    }
    case ADD_POST: {
      return { ...statePart, data: [...statePart.data, action.payload]};
    }
    default:
      return statePart;
  }
};
