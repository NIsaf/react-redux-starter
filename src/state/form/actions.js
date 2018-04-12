export const UPDATE_FORM_FIELD = 'UPDATE FORM FIELD';
export const RESET_FORM = 'RESET FORM';

export const updateFormField = ({
    field,
    value,
}) => ({
    type: UPDATE_FORM_FIELD,
    payload: {
        field,
        value,
    }
});

export const resetForm = () => ({
    type: RESET_FORM,
});