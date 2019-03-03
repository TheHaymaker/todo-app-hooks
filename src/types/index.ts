export type TrashIconProps = {
  deleteTodo: Function;
  todo: number;
};

export interface Todo {
  name: string;
  completed: boolean;
}

export type TodoListProps = {
  todos: Array<Todo>;
  deleteTodo: Function;
  completeTodo: Function;
};
