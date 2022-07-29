const Assistant = require('../models/assistant.model');

class AssistantDomain{
    async getAllAssistant(req, res){
        try{
            const assistants = await Assistant.find();
            if(!assistants){
                return res.status(404).json({
                    message: 'No assistants found'
                });
            }
            res.json(assistants);
        }catch(err){ res.send(err)}
    }

    async getAssistantById(req, res){
        try{
            let id = req.params.AstId;
            const assistant = await Assistant.findById(id);
            if(!assistant){
                res.status(404).send('Assistant not found');
            }
            res.json(assistant);
        }catch(err){ res.send(err)}
    }

    async insertAssistant(req, res){
        try{
            let data = req.body;
            const assistant = new Assistant(data);
          const result =  await assistant.save();
            res.json(result);
        }catch(err){ res.send(err)}
    }

    async deleteAssistant(req, res){
        try{
            let id = req.params.AstId;
            const assistant = await Assistant.findByIdAndRemove(id);
            if(!assistant){
                res.status(404).send('Assistant not found');
            }
            res.json({message: 'Assistant deleted'});
        }catch(err){ res.send(err)}
    }
}
module.exports =AssistantDomain