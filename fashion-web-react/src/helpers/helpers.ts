
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

const serverStatistics = (payload: Measurement, onSuccess: () => void, onError: () => void) => {
    console.log("Statistics call", payload);

    fetch('http://localhost:5246/Measurement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Success:', response.statusText);
            onSuccess();
        } else {
            console.log('Error:', response.statusText);
            onError();
        }
    })
    .catch(error => console.error('Error:', error));
}

interface Subscription {
    id: string;
    fullName: string;
    email: string;
}

const serverSubscribeToGuide = (payload: Subscription, onSuccess: () => void, onError: () => void) => {
    console.log("Subscription call", payload);

    fetch('http://localhost:5246/Subscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Success:', response.statusText);
            onSuccess();
        } else {
            console.log('Error:', response.statusText);
            onError();
        }
    })
    .catch(error => console.error('Error:', error));
}

interface Product {
    id: string;
    title: string;
    image: string;
    tags: string[];
}

const readProducts = (filter: string, onSuccess: (products: Product[]) => void, onError: () => void) => {
    console.log("Products call");

    let url = 'http://localhost:5246/Product';
    if (filter) {
        url += `?tagFilter=${filter}`;
    }

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Success:', response.statusText);
            response.json().then(products => {
                onSuccess((products as any) as Product[]);
            });
        } else {
            console.log('Error:', response.statusText);
            onError();
        }
    })
    .catch(error => console.error('Error:', error));
}

export {
    getElementFloatValue,
    getElementStringValue,
    toggleBlockElement,
    isPositiveNumber,
    isAtoZString,
    isEmail,
    serverStatistics,
    serverSubscribeToGuide,
    readProducts
}