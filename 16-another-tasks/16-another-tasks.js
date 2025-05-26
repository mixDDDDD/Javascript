'use strict';

function isValidData(data) {
    if (!data) {
        console.log('Данные не переданы');
        return false;
    }
    if (typeof data !== 'object') {
        console.log('Переданные данные не являются объектом');
        return false;
    }
    return true;
}

function getTaskById(taskId) {
    if(!this){
        console.log('Необходима связка this. Используйте методы call/apply/bind');
        return;
    }
    if (!taskId) {
        console.log(`Значение ID не передано или передано некорректно`);
        return;
    }
    if(!this.tasks){
        console.log('Ничего не найдено. tasks не существует в данном контексте');
        return;
    }
    const task = this?.tasks?.find(({ id }) => id === taskId) ?? null;
    if (!task) {
        console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
    }
    return task;
}

const toDoList = {
    tasks: [],

    addTask(data) {
        const isValid = isValidData(data);
        if (!isValid) {
            return this;
        }
        if (!this.tasks) {
            this.tasks = [];
        }
        if (!this.lastId) {
            this.lastId = 0;
        }

        this.tasks.push({ ...data, id: ++this.lastId, createdAt: Date.now(), updatedAt: null });
        return this;
    },
    addTask2(...args) {
        const [title, priority, ...other] = args;
        const data = {};
        if (typeof title === 'string') {
            if (!title) {
                console.log('Тайтл не может быть пустым');
                return this;
            }
            if (!priority) {
                console.log('Приоритет не заполнен');
                return this;
            }
            data.title = title;
            data.priority = priority;
            if (other.length > 0) {
                data.descriptiion = [...other];
            }
        } else {
            const isValid = isValidData(title);
            if (!isValid) {
                return this;
            }
            Object.assign(data, title);
        }
        if (!this.tasks) {
            this.tasks = [];
        }
        if (!this.lastId) {
            this.lastId = 0;
        }

        this.tasks.push({ ...data, id: ++this.lastId, createdAt: Date.now(), updatedAt: null });
        return this;
    },
    removeTask: function (id) {
        const task = getTaskById.call(this, id); // call как раз для связки контекста с внешней функцией
        if (task) {
            console.log(`Задача с id ${id} успешно удалена.`);
            this.tasks = this.tasks.filter((el) => el.id !== id);
        }
        return this;
    },

    updateTask(taskId, newData) {
        const { id, ...data } = newData;
        const isValid = isValidData(data);
        if (!isValid) {
            return this;
        }
        const task = getTaskById.call(this, taskId);

        if (task) {
            console.log(`Задача с id ${taskId} успешно обновлена.`);
            Object.assign(task, { ...data, updatedAt: Date.now() });
        }
        return this;
    },
    updateTask2(newData) {
        const { id, ...data } = newData;
        const isValid = isValidData(data);
        if (!isValid) {
            return this;
        }
        const task = getTaskById.call(this, id);

        if (task) {
            console.log(`Задача с id ${id} успешно обновлена.`);
            Object.assign(task, { ...newData, updatedAt: Date.now() });
        }
        return this;
    },

    sortTasks: function (desc = false, sortBy = 'id') {
        const ALLOW_KEYS = [...new Set(this.tasks.map(Object.keys).flat())];

        if (!ALLOW_KEYS.includes(sortBy)) {
            console.log(`Нет такого ключа, доступные ключи: [${ALLOW_KEYS.join(', ')}]`);
            return;
        }

        this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) => (desc ? b - a : a - b));
    },
};