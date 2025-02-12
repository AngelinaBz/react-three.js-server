"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.post('/api/box', function (req, res) {
    var scaleFactor = 0.1;
    var width = req.body.width * scaleFactor;
    var height = req.body.height * scaleFactor;
    var length = req.body.length * scaleFactor;
    var vertices = [
        -length / 2, -height / 2, width / 2,
        length / 2, -height / 2, width / 2,
        length / 2, height / 2, width / 2,
        -length / 2, height / 2, width / 2,
        -length / 2, -height / 2, -width / 2,
        length / 2, -height / 2, -width / 2,
        length / 2, height / 2, -width / 2,
        -length / 2, height / 2, -width / 2,
    ];
    var indices = [
        0, 1, 2,
        0, 2, 3,
        4, 5, 6,
        4, 6, 7,
        3, 2, 6,
        3, 6, 7,
        0, 4, 5,
        0, 5, 1,
        0, 3, 7,
        0, 7, 4,
        1, 5, 6,
        1, 6, 2
    ];
    res.json({ vertices: vertices, indices: indices });
});
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
