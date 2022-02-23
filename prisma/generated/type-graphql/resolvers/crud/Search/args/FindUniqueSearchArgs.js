"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchWhereUniqueInput_1 = require("../../../inputs/SearchWhereUniqueInput");
let FindUniqueSearchArgs = class FindUniqueSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereUniqueInput_1.SearchWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereUniqueInput_1.SearchWhereUniqueInput)
], FindUniqueSearchArgs.prototype, "where", void 0);
FindUniqueSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueSearchArgs);
exports.FindUniqueSearchArgs = FindUniqueSearchArgs;
