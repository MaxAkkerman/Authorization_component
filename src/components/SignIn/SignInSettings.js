export const SignInSettings = [
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
];
export const dataForLocalStorage = ["login", "password"];
export const dataNeededToValidate = ["login", "password"];