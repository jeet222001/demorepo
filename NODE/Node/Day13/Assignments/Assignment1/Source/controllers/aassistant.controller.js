var express = require('express');
var router = express.Router();
var AssistantDomain = require('../domain/assistant.domain');

class AssistantController {
    static async getAllAssistant(req, res) {
        const assistant = new AssistantDomain();
        assistant.getAllAssistant(req, res);
    }

    static async getAssistantById(req, res) {
        const assistant = new AssistantDomain();
        assistant.getAssistantById(req, res);
    }

    static async insertAssistant(req, res) {
        const assistant = new AssistantDomain();
        assistant.insertAssistant(req, res);
    }
    static async deleteAssistant(req, res)
    {
        const assistant = new AssistantDomain();
        assistant.deleteAssistant(req, res);
    }

}

router.get('/', AssistantController.getAllAssistant);
router.get('/:AstId', AssistantController.getAssistantById);
router.post('/', AssistantController.insertAssistant);
router.delete('/:AstId', AssistantController.deleteAssistant);

module.exports = router;