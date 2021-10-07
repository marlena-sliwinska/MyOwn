export const taskErrorMessage = "! Task cannot be empty."
export const taskValidationFn = function (content) {
    if (content.length > 0) return true
    else return false
}