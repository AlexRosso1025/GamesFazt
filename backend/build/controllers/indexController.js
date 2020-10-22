"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.status(200).json({ 'message': 'Welcome to Ng Games' });
    }
}
exports.indexController = new IndexController();
