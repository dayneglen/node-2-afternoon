const messages = [];
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        message = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        messages.push(message);
        id += 1;
        res.status(200).send(messages);
    },
    readMessages: (req, res) => {
        res.status(200).send(messages);
    },
    updateMessage: (req, res) => {
        let message = messages.find((message) => message.id === +req.params.id );
        message.text = req.body.text;
        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        let index = messages.findIndex((message) => message.id === +req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}