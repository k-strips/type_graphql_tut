"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchWhereUniqueInput_1 = require("../../../inputs/SearchWhereUniqueInput");
let DeleteSearchArgs = class DeleteSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereUniqueInput_1.SearchWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereUniqueInput_1.SearchWhereUniqueInput)
], DeleteSearchArgs.prototype, "where", void 0);
DeleteSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteSearchArgs);
exports.DeleteSearchArgs = DeleteSearchArgs;
