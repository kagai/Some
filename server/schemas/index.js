"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('apollo-server').gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type RandomJoke {\n        categories: [String]\n        created_at: String\n        icon_url: String\n        id: String\n        updated_at: String\n        url: String\n        value: String\n    }\n    type Query {\n        catagories: [String]\n        randomJoke(catagory: String): RandomJoke\n    }\n"], ["\n    type RandomJoke {\n        categories: [String]\n        created_at: String\n        icon_url: String\n        id: String\n        updated_at: String\n        url: String\n        value: String\n    }\n    type Query {\n        catagories: [String]\n        randomJoke(catagory: String): RandomJoke\n    }\n"])));
exports.default = typeDefs;
var templateObject_1;
