
const getElementFloatValue = (element: HTMLInputElement): number => {
    return parseFloat(element.value);
}

const getElementStringValue = (element: HTMLInputElement): string => {
    return element.value.trim();
}

const toggleBlockElement = (element: HTMLElement, visible: boolean): void => {
    element.style.display = visible ? 'block' : 'none';
}

const isPositiveNumber = (value: number): boolean => {
    return !isNaN(value) && value > 0;
}

const isAtoZString = (value: string): boolean => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value);
}

const isEmail = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(value);
}

interface Measurement {
    id: string;
    shoulder: number;
    bust: number;
    waist: number;
    hips: number
}

const serverStatistics = (payload : Measurement) => {
    console.log("Statistics call", payload);
}

interface Subscription {
    id: string;
    fullname: string;
    email: string;
}

const serverSubscribeToGuide = (payload: Subscription) => {
    console.log("Subscription call", payload);
}

export {
    getElementFloatValue,
    getElementStringValue,
    toggleBlockElement,
    isPositiveNumber,
    isAtoZString,
    isEmail,
    serverStatistics,
    serverSubscribeToGuide
}