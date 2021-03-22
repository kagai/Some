"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helpers/helper");
var chuckNorisService = new helper_1.ChuckNorisService();
exports.default = {
    Query: {
        catagories: function () { return chuckNorisService.getCatagories(); },
        randomJoke: function (parent, args, context, info) {
            return chuckNorisService.getCategory(args.catagory);
        }
    },
};
