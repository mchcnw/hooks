export const SUBMIT_FORM_DATA = "SUBMIT_FORM_DATA";
export const RESET_FORM_DATA = "RESET_FORM_DATA";

export const submitFormData = data => ({
    type: SUBMIT_FORM_DATA,
    payload: data
});

export const resetFormData = data => ({
    type: RESET_FORM_DATA,
    payload: {}
});