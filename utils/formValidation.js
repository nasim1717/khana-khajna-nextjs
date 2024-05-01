export const registerValidation = (data) => {
    const error = {};
    let flagCheckError = false;
    for (let [key, value] of Object.entries(data)) {
        if (!value.trim()) {
            flagCheckError = true;
            error[key] = `${key} is required`
        } else {
            error[key] = "";
        }
    }
    if (flagCheckError) {
        return error;
    } return null;

}