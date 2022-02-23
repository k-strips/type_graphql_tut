"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchCreateManyInput_1 = require("../../../inputs/SearchCreateManyInput");
let CreateManySearchArgs = class CreateManySearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchCreateManyInput_1.SearchCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManySearchArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManySearchArgs.prototype, "skipDuplicates", void 0);
CreateManySearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManySearchArgs);
exports.CreateManySearchArgs = CreateManySearchArgs;
