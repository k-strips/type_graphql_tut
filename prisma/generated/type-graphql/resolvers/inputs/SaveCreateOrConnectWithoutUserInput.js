"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateWithoutUserInput_1 = require("../inputs/SaveCreateWithoutUserInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveCreateOrConnectWithoutUserInput = class SaveCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput)
], SaveCreateOrConnectWithoutUserInput.prototype, "create", void 0);
SaveCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], SaveCreateOrConnectWithoutUserInput);
exports.SaveCreateOrConnectWithoutUserInput = SaveCreateOrConnectWithoutUserInput;
