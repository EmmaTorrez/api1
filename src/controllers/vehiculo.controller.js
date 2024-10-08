async function getvehiculo(req, res) {
    res.send('lista vehiculos');
}

async function createvehiculo(req, res) {
    res.send('crear lista vehiculos');
}

export default{
    getvehiculo,
    createvehiculo,
}