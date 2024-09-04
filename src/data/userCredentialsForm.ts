import { InputProps } from '../types';

export const userCredentialsForm:  InputProps[]  =
    [
        {
            label: "New username",
            type: "text",
            name: "username",
            placeholder: "New username",
            value: "",
            typeValue: 'string',
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "Username is required"
                },
            ],

        },
        {
            label: "New Password",
            type: "password",
            name: "password",
            placeholder: "New password",
            value: "",
            typeValue: 'string',
            validations: [
                {
                    type: "required",
                    message: "Password is required"
                },
                {
                    type: "minLength",
                    value: 8,
                    message: "Min. 8 characters",
                }
            ],

        },
        {
            label: 'Repeat your password',
            type: "password",
            name: "repeat_password",
            placeholder: "Repeat password",
            value: "",
            typeValue: 'string',
            validations: [
                {
                    type: "required",
                    message: "Repeat password is required"
                },
                {
                    type: "minLength",
                    value: 8,
                    message: "Min. 5 characters",
                },
                {
                    type: 'oneOf',
                    message: 'Passwords must match',
                    ref: 'password'
                }
            ],

        },

    ];