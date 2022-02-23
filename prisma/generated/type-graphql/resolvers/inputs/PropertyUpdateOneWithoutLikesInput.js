"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateOneWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutLikesInput_1 = require("../inputs/PropertyCreateOrConnectWithoutLikesInput");
const PropertyCreateWithoutLikesInput_1 = require("../inputs/PropertyCreateWithoutLikesInput");
const PropertyUpdateWithoutLikesInput_1 = require("../inputs/PropertyUpdateWithoutLikesInput");
const PropertyUpsertWithoutLikesInput_1 = require("../inputs/PropertyUpsertWithoutLikesInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateOneWithoutLikesInput = class PropertyUpdateOneWithoutLikesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput)
], PropertyUpdateOneWithoutLikesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutLikesInput_1.PropertyCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutLikesInput_1.PropertyCreateOrConnectWithoutLikesInput)
], PropertyUpdateOneWithoutLikesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpsertWithoutLikesInput_1.PropertyUpsertWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpsertWithoutLikesInput_1.PropertyUpsertWithoutLikesInput)
], PropertyUpdateOneWithoutLikesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutLikesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutLikesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateOneWithoutLikesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutLikesInput_1.PropertyUpdateWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutLikesInput_1.PropertyUpdateWithoutLikesInput)
], PropertyUpdateOneWithoutLikesInput.prototype, "update", void 0);
PropertyUpdateOneWithoutLikesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateOneWithoutLikesInput", {
        isAbstract: true
    })
], PropertyUpdateOneWithoutLikesInput);
exports.PropertyUpdateOneWithoutLikesInput = PropertyUpdateOneWithoutLikesInput;
