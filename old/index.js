import express from "express";

const app = express();

app.get('/health',(req, res) =>{
    res.json({message : 'Hello World'})
});

// middle verb that converts req body to json 
app.use(express.json());

const tasks = [
    {id: 1, name: "tushar"},
    {id: 2, name: "mykhailo"},
    {id: 3, name: "Arun"}
]
//show all tasks

app.get('/tasks',(req,res) =>{
    res.json(tasks);
});

//show a specific task depending on id

app.get('/tasks/:id',(req,res)=>{
    const id = req.params.id;

    // returns the index of the item in the array 
    const idx = tasks.findIndex(item => item.id === parseInt(id));

    if (idx !== -1){
        res.json(tasks[idx])
    }
    else{
        res.status(404).json({message: "resource not found"})
    }
});

//create a new Task

app.post('/tasks',(req,res) => {
    const task = req.body;
    tasks.push({
        id: tasks.length,
        name: tasks.name,
    });
    res.json(tasks[tasks.length - 1]);
});


app.listen(5501, () => {
    console.log('server is running')
});


// delete a new task

app.delete('/tasks/:id',(req,res)=>{
    const id = req.params.id
    const idx = tasks.findIndex(item => item.id == id);

    if (idx !== -1){
        tasks.splice(idx,1);
        res.json({message: 'OK'});
    }
    else{
        res.status(404).json({message: "resource not found"})
    }
});

// Edit existing task
app.put('/tasks/:id',(req,res)=>{
    const id = req.params.id;
    const idx = tasks.findIndex(item => item.id == id);

    if (idx !== -1){
        tasks[idx].name = req.body.name;
        res.json(tasks[idx]);
    }
    else{
        res.status(404).json({message: "resource not found"});
    }
});


app.get('/student')