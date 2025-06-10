import { createMessage } from "./../controllers/MessageController.js"

export class Message{

    /**
     * 
     * @param {int} id 
     * @param {string} name 
     * @param {string} message 
     */
    constructor(id = null, name, message){
        this.id = id
        this.name = name
        this.message = message
    }

    // get id(){return this.id}
    get name(){return this.name}
    get message(){return this.message}

    /**
     * 
     * @param {Object} mes 
     * @property {string} nom
     * @property {string} message
     */
    
   static async insert(mes){
    try {
        const data = {
          nom: mes.nom,
          message: mes.message,
        };
        await createMessage(data);
      } catch (error) {
        console.log('Erreur dans Message')
        throw new Error(`Erreur dans insert: ${error.message}`);
      }
    }
}