"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateOrConnectWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateWithoutPropertyInput_1 = require("../inputs/SaveCreateWithoutPropertyInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveCreateOrConnectWithoutPropertyInput = class SaveCreateOrConnectWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveCreateOrConnectWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput)
], SaveCreateOrConnectWithoutPropertyInput.prototype, "create", void 0);
SaveCreateOrConnectWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateOrConnectWithoutPropertyInput", {
        isAbstract: true
    })
], SaveCreateOrConnectWithoutPropertyInput);
exports.SaveCreateOrConnectWithoutPropertyInput = SaveCreateOrConnectWithoutPropertyInput;
