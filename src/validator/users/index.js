const InvariantError = require("../../exceptions/InvariantError");
const { UserPayloadSchema } = require("./schema")

const UsersValidator = {
    validateUsersPayload: (payload) => {
        const validationResult = UserPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = UsersValidator;