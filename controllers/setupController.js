var Todos = require('../models/todoModels');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy phone',
                isDone: false,
                hasAttach: false
            },
            {
                username: 'test',
                todo: 'Buy cat',
                isDone: false,
                hasAttach: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttach: false
            }
        ];
        Todos.create(starterTodos, (err, results) => {
            res.send(results)
        });
    })
}