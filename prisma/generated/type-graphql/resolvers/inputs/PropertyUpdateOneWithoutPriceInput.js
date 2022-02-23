"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateOneWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutPriceInput_1 = require("../inputs/PropertyCreateOrConnectWithoutPriceInput");
const PropertyCreateWithoutPriceInput_1 = require("../inputs/PropertyCreateWithoutPriceInput");
const PropertyUpdateWithoutPriceInput_1 = require("../inputs/PropertyUpdateWithoutPriceInput");
const PropertyUpsertWithoutPriceInput_1 = require("../inputs/PropertyUpsertWithoutPriceInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateOneWithoutPriceInput = class PropertyUpdateOneWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput)
], PropertyUpdateOneWithoutPriceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutPriceInput_1.PropertyCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutPriceInput_1.PropertyCreateOrConnectWithoutPriceInput)
], PropertyUpdateOneWithoutPriceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpsertWithoutPriceInput_1.PropertyUpsertWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpsertWithoutPriceInput_1.PropertyUpsertWithoutPriceInput)
], PropertyUpdateOneWithoutPriceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutPriceInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutPriceInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateOneWithoutPriceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutPriceInput_1.PropertyUpdateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutPriceInput_1.PropertyUpdateWithoutPriceInput)
], PropertyUpdateOneWithoutPriceInput.prototype, "update", void 0);
PropertyUpdateOneWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateOneWithoutPriceInput", {
        isAbstract: true
    })
], PropertyUpdateOneWithoutPriceInput);
exports.PropertyUpdateOneWithoutPriceInput = PropertyUpdateOneWithoutPriceInput;
