const initState = {
  // 배열로 설정하는 것보다 객체로 설정하는게 여러 값을 관리하기 편함
  // 프로퍼티에 따라서 각각의 state를 따라서 관리하는게 보통의 바법

  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리 하기',
      done: false,
    },
  ],
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

// 바뀔 수 있으니까 let 으로 설정
let counts = initState.todoList.length;
initState['nextID'] = counts;

// 액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        // 전개구문의 힘, 얘는 안전하기 위해서도 무조건 추가해줘야 함
        // redux 짤 때 무지성으로 넣고 시작하는게 정신건강에 좋음
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.tet,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        // 위의  배열을 리턴해주는거니까 [], 배열 뒤에다 새로운 객체 추가
        nextID: action.payload.id + 1,
      };
    case DONE:
      // 완료 버튼 눌렀을 때 호출시켜줘야 함
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              // id랑 TEXT는 걔가 가지고 있던 값이 고대로 들어가있음
              // 우리가 바꾸고 싶은건 DONE 이니까 얘만 바꿀게요 하는 것임
              done: true,
            };
          } else {
            return el;
            // id랑 같은 애는 true, 아닌 애는 그냥 고대로 return 시켜준다는 뜻
          }
        }),
      };
    default:
      return state;
  }
}
