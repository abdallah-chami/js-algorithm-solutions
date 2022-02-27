/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
    element.value = state.value;

    element.addEventListener('change', function (e) {
        state.value = this.value
    });

    Object.defineProperty(state, 'value', {
        set: val => element.value = val,
        get: () => element.value
    });

}