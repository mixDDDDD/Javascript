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

// Добавление новых методов к существующему объекту ToDoList с привязкой контекста
ToDoList.addTaskWithDescription = function(title, priority, description) {
    if (typeof description !== 'string') {
        throw new Error('Описание должно быть строкой');
    }
    const task = this.addTask.call(this, title, priority);
    task.description = description;
    return task;
}.bind(ToDoList);

ToDoList.updateTaskWithDescription = function(data) {
    if (data.description && typeof data.description !== 'string') {
        throw new Error('Описание должно быть строкой');
    }
    return this.updateTask.call(this, data);
}.bind(ToDoList);