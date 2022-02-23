"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchCreateInput_1 = require("../../../inputs/SearchCreateInput");
let CreateSearchArgs = class CreateSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchCreateInput_1.SearchCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchCreateInput_1.SearchCreateInput)
], CreateSearchArgs.prototype, "data", void 0);
CreateSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateSearchArgs);
exports.CreateSearchArgs = CreateSearchArgs;
