export function validate(cron, msg, cron2) {

    if (cron === undefined && cron2 === undefined) {
        return
    }
    if (msg === "login") {
        return !(cron.length >= 2 && cron.length <= 15)
    }
    if (msg === "email") {

        let regExp = /.+@.+\..+/i;
        return !cron.match(regExp)
    }
    if (msg === "confpass") {
        if (cron.length === 0) {
            return true
        }
        return !(cron === cron2)
    }

    if (msg === "password") {
        return !(cron.length >= 6);
    }
    return true
}

export const toJson = {
    S: JSON.stringify
};

export const DataOnChangeCounter = (x) => {
    let k = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].value === '') {
            k++
        }
    }
    return k === 0
};

export const errorCounter = (settings) => {
    let k = 0;
    for (let i = 0; i < settings.length; i++) {
        if (settings[i].error === true) {
            k++
        }
    }
    return k === 0
};