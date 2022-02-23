"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedManyWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOwnerInputEnvelope_1 = require("../inputs/PropertyCreateManyOwnerInputEnvelope");
const PropertyCreateOrConnectWithoutOwnerInput_1 = require("../inputs/PropertyCreateOrConnectWithoutOwnerInput");
const PropertyCreateWithoutOwnerInput_1 = require("../inputs/PropertyCreateWithoutOwnerInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedManyWithoutOwnerInput = class PropertyCreateNestedManyWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOwnerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateOrConnectWithoutOwnerInput_1.PropertyCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOwnerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateManyOwnerInputEnvelope_1.PropertyCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateManyOwnerInputEnvelope_1.PropertyCreateManyOwnerInputEnvelope)
], PropertyCreateNestedManyWithoutOwnerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOwnerInput.prototype, "connect", void 0);
PropertyCreateNestedManyWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedManyWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyCreateNestedManyWithoutOwnerInput);
exports.PropertyCreateNestedManyWithoutOwnerInput = PropertyCreateNestedManyWithoutOwnerInput;
