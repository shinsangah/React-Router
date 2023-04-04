const weight = 100;

let today = new Date();

export default function weightReducer(state = weight, action) {
  if (action.type === '증가') {
    state += today.getDate();
    return state;
  } else if (action.type === '감소') {
    state -= today.getMonth() + 1;
    return state;
  } else {
    return state;
  }
}
