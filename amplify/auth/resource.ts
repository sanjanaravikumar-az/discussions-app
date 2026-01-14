import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
    loginWith: {
        email: true
    },
    userAttributes: {
        phoneNumber: {
            required: true,
            mutable: true
        },
        email: {
            required: true,
            mutable: true
        }
    },
    multifactor: {
        mode: "OFF"
    }
});
