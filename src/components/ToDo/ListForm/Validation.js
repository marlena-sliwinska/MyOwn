export const titleErrorMessage = "! Title cannot be empty."
export const titleValidationFn = function (title) {
    if (title.length > 0) return true
    else return false
}