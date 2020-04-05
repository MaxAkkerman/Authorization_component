export const SignUpSettings = [
    {
        error: false,
        value: "",
        label: "email",
        id:"email",
        onChange: {},
        placeholder: "email",
        required: true,
        size: "small",
        helperText: "please fill with correct login",
        fullWidth: true,
    },
    {
        error: false,
        label: "login",
        id:"login",
        value: "",
        onChange: {},
        placeholder: "login",
        required:true,
        size: "small",
        helperText: "please fill with correct login",
        fullWidth: true,
    },
    {
        error: false,
        id:"password",
        value: "",
        label: "password",
        onChange: {},
        placeholder: "Password",
        required:true,
        size: "small",
        helperText: "password should be more then 6 characters",
        fullWidth: true,
    },
    {
        error: false,
        value:"",
        id:"confpass",
        label: "confpass",
        onChange: {},
        placeholder: "Confirm password",
        required:true,
        size: "small",
        helperText: "not confirmed",
        fullWidth: true,
    }
];
export const dataForLocalStorage = ["email", "login", "password"];
export const dataNeededToValidate = ["email", "login", "password", "confpass"];