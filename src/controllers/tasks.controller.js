
async function getTasks(req, res) {
    res.send('lista de tareas');
}

async function createTasks(req, res) {
    res.send('crear lista de tareas');
}

export default {
    getTasks,
    createTasks,  
};
