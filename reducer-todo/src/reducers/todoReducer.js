export const initialTodosState = [
    {
      item: 'Todos Project',
      completed: false,
      id: 1569028263662
    }, 
    {
      item: 'Eat Dinner',
      completed: false,
      id: 1569028288640
    },
    {
      item: 'Read Book',
      completed: false,
      id: 1569028363524
    }
  ];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      default: 
        return state;
    }
  };