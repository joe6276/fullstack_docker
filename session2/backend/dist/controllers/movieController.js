"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = exports.addMovies = void 0;
const mssql_1 = __importDefault(require("mssql"));
const config_1 = __importDefault(require("../config"));
const uuid_1 = require("uuid");
const addMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image } = req.body;
        const pool = yield mssql_1.default.connect(config_1.default); // create a Pool
        // Make a request and run proceducre
        yield pool.request()
            .input("id", (0, uuid_1.v4)())
            .input("title", title)
            .input("description", description)
            .input("image", image)
            .execute("addMovie");
        return res.status(201).json({ message: "Movie Added" });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.addMovies = addMovies;
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.default); // create a Pool
        // Make a request and run proceducre
        let movies = yield (yield pool.request().execute("getMovies")).recordsets;
        return res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getMovies = getMovies;
