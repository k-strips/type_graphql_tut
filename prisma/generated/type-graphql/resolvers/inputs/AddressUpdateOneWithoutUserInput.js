"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateOrConnectWithoutUserInput_1 = require("../inputs/AddressCreateOrConnectWithoutUserInput");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressUpdateWithoutUserInput_1 = require("../inputs/AddressUpdateWithoutUserInput");
const AddressUpsertWithoutUserInput_1 = require("../inputs/AddressUpsertWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneWithoutUserInput = class AddressUpdateOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressUpdateOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput)
], AddressUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpsertWithoutUserInput_1.AddressUpsertWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpsertWithoutUserInput_1.AddressUpsertWithoutUserInput)
], AddressUpdateOneWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AddressUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AddressUpdateOneWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput)
], AddressUpdateOneWithoutUserInput.prototype, "update", void 0);
AddressUpdateOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], AddressUpdateOneWithoutUserInput);
exports.AddressUpdateOneWithoutUserInput = AddressUpdateOneWithoutUserInput;
