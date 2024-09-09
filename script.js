// script.js

const unitsData = {
    length: ['Meter', 'Centimeter', 'Kilometer', 'Inch', 'Foot'],
    weight: ['Kilogram', 'Gram', 'Pound', 'Ounce'],
    volume: ['Liter', 'Milliliter', 'Gallon'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
};

document.addEventListener('DOMContentLoaded', () => {
    const measureDropdown = document.getElementById('measure');
    const sourceUnitDropdown = document.getElementById('sourceUnit');
    const targetUnitDropdown = document.getElementById('targetUnit');

    populateDropdown(measureDropdown, ['length', 'weight', 'volume', 'temperature']);

    measureDropdown.addEventListener('change', () => {
        const unit = measureDropdown.value;
        populateDropdown(sourceUnitDropdown, []);
        populateDropdown(targetUnitDropdown, []);
        if (unit) {
            const units = unitsData[unit];
            populateDropdown(sourceUnitDropdown, units);
            populateDropdown(targetUnitDropdown, units);
        }
    });
});

function populateDropdown(dropdown, units) {
    dropdown.innerHTML = '<option value="">Select Unit</option>'; // Clear existing options
    units.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.text = unit;
        dropdown.add(option);
    });
}

function convertUnits() {
    const measureDropdown = document.getElementById('measure');
    const quantityInput = document.getElementById('quantity');
    const sourceUnitDropdown = document.getElementById('sourceUnit');
    const targetUnitDropdown = document.getElementById('targetUnit');
    const resultContainer = document.getElementById('result');

    const quantity = parseFloat(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        resultContainer.innerText = 'Please enter a valid quantity';
        return;
    }

    const sourceUnit = sourceUnitDropdown.value;
    const targetUnit = targetUnitDropdown.value;

    if (!sourceUnit || !targetUnit) {
        resultContainer.innerText = 'Please select both source and target units';
        return;
    }

    let convertedResult;

    switch (measureDropdown.value) {
        case 'length':
            convertedResult = performLengthConversion(quantity, sourceUnit, targetUnit);
            break;
        case 'weight':
            // Placeholder for weight conversion logic
            break;
        case 'volume':
            // Placeholder for volume conversion logic
            break;
        case 'temperature':
            // Placeholder for temperature conversion logic
            break;
        default:
            resultContainer.innerText = 'Invalid conversion';
            return;
    }

    resultContainer.innerText = `${quantity} ${sourceUnit} is approximately ${convertedResult} ${targetUnit}`;
}

function performLengthConversion(quantity, sourceUnit, targetUnit) {
    const conversionFactors = {
        Meter: 1,
        Centimeter: 100,
        Kilometer: 0.001,
        Inch: 39.3701,
        Foot: 3.28084
    };
    const quantityInMeter = quantity / conversionFactors[sourceUnit];
    const convertedResult = quantityInMeter * conversionFactors[targetUnit];
    return convertedResult.toFixed(4); // Return rounded result
}
