
// Toggles a class based on a parameter
const toggleClass = (element: HTMLElement, className: string, isActive: boolean): boolean => {
    if (isActive) {
        element.classList.add(className);
    }
    else {
        element.classList.remove(className);
    }
    return isActive;
}

const getElementFloatValue = (element: HTMLInputElement): number => {
    return parseFloat(element.value);
}

const toggleBlockElement = (element: HTMLElement, visible: boolean): void => {
    element.style.display = visible ? 'block' : 'none';
}

const isPositiveNumber = (value: number): boolean => {
    return !isNaN(value) && value > 0;
}

export { toggleClass, getElementFloatValue, toggleBlockElement, isPositiveNumber }