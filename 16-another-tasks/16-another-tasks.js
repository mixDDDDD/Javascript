'use strict';

// Исходный объект ToDoList (без изменений)
const ToDoList = {
    tasks: [],
    lastId: 0,

    // Добавить задачу
    addTask(title, priority) {
        if (typeof title !== 'string' || title.trim() === '') {
            throw new Error('Заголовок должен быть непустой строкой');
        }
        if (!Number.isInteger(priority) || priority < 0) {
            throw new Error('Priority должен быть неотрицательным целым числом');
        }
        const task = { 
            title, 
            id: ++this.lastId, 
            priority 
        };
        this.tasks.push(task);
        return task;
    },

    // Поиск задачи по id
    getTaskById(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            console.log(`Задача с id = ${id} не найдена`);
        }
        return task;
    },

    // Удалить задачу по id
    removeTask: function(id) {
        const task = this.getTaskById(id);
        if (task) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
        return this.tasks;
    },

    // Обновить задачу по id
    updateTask: function(data) {
        const { id, ...otherData } = data;
        const task = this.getTaskById(id);
        if (Object.keys(otherData).length === 0) {
            return task;
        }
        Object.assign(task, otherData);
        console.log(`задача с id = ${ id } - успешно обновлена`);
        return task;
    },

    // Сортировать задачи
    sortTasks() {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

// Расширенный объект ToDoList
const ExtendedToDoList = Object.create(ToDoList);

// Новый метод для добавления задачи с описанием
ExtendedToDoList.addTaskWithDescription = function(title, description, priority) {
    if (typeof description !== 'string' || description.trim() === '') {
        throw new Error('Описание должно быть непустой строкой');
    }
    const task = this.addTask(title, priority);
    task.description = description;
    return task;
};

// Пример использования
const task1 = ExtendedToDoList.addTaskWithDescription('тест', 'описание', 0);
console.log(task1);