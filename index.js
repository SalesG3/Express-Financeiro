const { app, conn } = require('./server.js');

app.post('/login', async (req, res) => {
    let { login, senha } = req.body;

    let [query] = await conn.promise().execute(`CALL login_usuario ('${login}','${senha}')`);

    if(query[0]){
        res.send({ sucesso : query[0] })
        return
    }
    else if(!query[0]){
        res.send({ erro : "Login e Senha Inválidos!!" })
        return
    }

    res.send(query)
})