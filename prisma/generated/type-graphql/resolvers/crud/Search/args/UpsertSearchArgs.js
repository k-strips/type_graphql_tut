"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchCreateInput_1 = require("../../../inputs/SearchCreateInput");
const SearchUpdateInput_1 = require("../../../inputs/SearchUpdateInput");
const SearchWhereUniqueInput_1 = require("../../../inputs/SearchWhereUniqueInput");
let UpsertSearchArgs = class UpsertSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereUniqueInput_1.SearchWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereUniqueInput_1.SearchWhereUniqueInput)
], UpsertSearchArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchCreateInput_1.SearchCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchCreateInput_1.SearchCreateInput)
], UpsertSearchArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchUpdateInput_1.SearchUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchUpdateInput_1.SearchUpdateInput)
], UpsertSearchArgs.prototype, "update", void 0);
UpsertSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertSearchArgs);
exports.UpsertSearchArgs = UpsertSearchArgs;
