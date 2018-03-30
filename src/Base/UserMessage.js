class UserMessage {
    constructor(message, id_interaction) {
        this.sender = 'user',
        this.type = 'text',
        this.id_interction = id_interaction,
        this.message = message,
        this.class_used = 'right'
    }
}


export default UserMessage;