'use strict';

const ToDoList = {
    tasks: [],

    // Добавить задачу
    addTask(title, priority) {
        if (typeof title !== 'string' || title.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        if (!Number.isInteger(priority) || priority < 0) {
            throw new Error('Priority must be a non-negative integer');
        }

        const id = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
        const task = { id, title: title.trim(), priority };
        this.tasks.push(task);
        return task;
    },

    // Удалить задачу по id
    removeTask(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('ID must be a positive integer');
        }
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new Error(`Task with ID ${id} not found`);
        }
        return this.tasks.splice(index, 1)[0];
    },

    // Обновить задачу по id
    updateTask(id, updates) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('ID must be a positive integer');
        }
        if (!updates || typeof updates !== 'object') {
            throw new Error('Updates must be an object');
        }

        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found`);
        }

        if (updates.title !== undefined) {
            if (typeof updates.title !== 'string' || updates.title.trim() === '') {
                throw new Error('Title must be a non-empty string');
            }
            task.title = updates.title.trim();
        }
        if (updates.priority !== undefined) {
            if (!Number.isInteger(updates.priority) || updates.priority < 0) {
                throw new Error('Priority must be a non-negative integer');
            }
            task.priority = updates.priority;
        }

        return task;
    },

    // Сортировать задачи
    sortTasks(by = 'priority', ascending = true) {
        if (!['priority', 'id'].includes(by)) {
            throw new Error('Sort field must be one of: priority, id');
        }
        if (typeof ascending !== 'boolean') {
            throw new Error('Ascending must be a boolean');
        }

        this.tasks.sort((a, b) => ascending ? a[by] - b[by] : b[by] - a[by]);
        return this.tasks;
    }
};

// Пример использования:
// try {
//     ToDoList.addTask("Помыть посуду", 1); // { id: 1, title: "Помыть посуду", priority: 1 }
//     ToDoList.addTask("Купить продукты", 2); // { id: 2, title: "Купить продукты", priority: 2 }
//     // console.log(ToDoList.tasks);
//     ToDoList.updateTask(1, { title: "Убраться", priority: 3 }); // { id: 1, title: "Убраться", priority: 3 }
//     // console.log(ToDoList.sortTasks('priority', true));
//     ToDoList.removeTask(2); // { id: 2, title: "Купить продукты", priority: 2 }
//     // console.log(ToDoList.tasks);
//     // Ошибочные вызовы:
//     // ToDoList.addTask("", -1); // Error: Title must be a non-empty string
//     // ToDoList.removeTask(999); // Error: Task with ID 999 not found
//     ToDoList.sortTasks('invalid'); // Error: Sort field must be one of: priority, id
// } catch (error) {
//     console.error(error.message);
// }