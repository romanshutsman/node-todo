var Todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todos/:uname', (req, res) => {
        Todos.find({username: req.params.uname}, 
            (err, todos) => {
                if(err) throw err;

                res.send(todos);
            })
    });

    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({_id: req.params.id}, (err, todo) => {
            if (err) throw err;

            res.send(todo)
        })
    });

    app.post('/api/todo', (req,  res) => {

        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { 
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttach: req.body.hasAttach}, (err, todo) => {
                    if (err) throw err;

                    res.send('Sucuees');
                })
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttach: req.body.hasAttach
            })
            newTodo.save((err) => {
                if (err) throw err;
                res.send('Success');
            })
        }

    });

    app.delete('/api/todo/', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err) => {
            if (err) throw err;
            res.send('Success');
        })
    })
}