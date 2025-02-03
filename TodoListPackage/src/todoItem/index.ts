class TodoItem {
    constructor(
        public id: number,
        public title: string,
        public completed: boolean = false) {}
}

export default TodoItem;