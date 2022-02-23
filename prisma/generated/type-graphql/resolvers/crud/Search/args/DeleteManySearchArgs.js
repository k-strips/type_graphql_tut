"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchWhereInput_1 = require("../../../inputs/SearchWhereInput");
let DeleteManySearchArgs = class DeleteManySearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereInput_1.SearchWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereInput_1.SearchWhereInput)
], DeleteManySearchArgs.prototype, "where", void 0);
DeleteManySearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManySearchArgs);
exports.DeleteManySearchArgs = DeleteManySearchArgs;
