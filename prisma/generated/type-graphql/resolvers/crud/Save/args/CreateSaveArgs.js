"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateInput_1 = require("../../../inputs/SaveCreateInput");
let CreateSaveArgs = class CreateSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateInput_1.SaveCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateInput_1.SaveCreateInput)
], CreateSaveArgs.prototype, "data", void 0);
CreateSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateSaveArgs);
exports.CreateSaveArgs = CreateSaveArgs;
