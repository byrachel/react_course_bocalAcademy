export function UserReducer(
  state: any,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case 'ADD_DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'OPEN_EDIT_USER':
      return {
        ...state,
        edit: action.payload,
      };
    case 'EDIT_USER': {
      delete state['edit'];
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    }
    case 'REMOVE_PROP': {
      delete state[action.payload];
      return { ...state };
    }
    case 'UPPERCASE': {
      delete state['edit'];
      const obj = action.payload;
      Object.keys(obj).forEach((o) => (obj[o] = obj[o].toUpperCase()));
      return { ...obj };
    }
    default:
      return state;
  }
}
