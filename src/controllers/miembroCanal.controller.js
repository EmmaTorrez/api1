async function getmiembroCanal(req, res) {
    res.send('lista de miembros en el canal');
}

async function createmiembroCanal(req, res) {
    res.send('crear lista de miembros');
}

export default{
    getmiembroCanal,
    createmiembroCanal,
}