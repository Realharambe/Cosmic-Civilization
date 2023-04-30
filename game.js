// Initialize resources
let energy = 0;
let minerals = 0;
let oil = 0;

// Resource gain per click
const manualGainButton = document.getElementById('manual-gain-button');
manualGainButton.addEventListener('click', () => {
    energy += 1;
    minerals += 1;
    oil += 1;
    updateResourceDisplay();
});

// Mine functionality
let mineLevel = 0;
let mineProduction = 0;
let mineUpgradeCostEnergy = 5;
let mineUpgradeCostMinerals = 15;

const mineButton = document.getElementById('mine-button');
const mineUpgradeButton = document.getElementById('mine-upgrade-button');

mineButton.addEventListener('click', () => {
    energy += mineProduction;
    updateResourceDisplay();
});

mineUpgradeButton.addEventListener('click', () => {
    if (energy >= mineUpgradeCostEnergy && minerals >= mineUpgradeCostMinerals) {
        energy -= mineUpgradeCostEnergy;
        minerals -= mineUpgradeCostMinerals;
        mineLevel++;
        mineProduction += 10;
        mineUpgradeCostEnergy += 5;
        mineUpgradeCostMinerals += 10;
        updateBuildingInfo('mine');
        updateResourceDisplay();
    }
});

// Power Plant functionality
let powerPlantLevel = 0;
let powerPlantProduction = 0;
let powerPlantUpgradeCostEnergy = 15;
let powerPlantUpgradeCostMinerals = 5;

const powerPlantButton = document.getElementById('powerPlant-button');
const powerPlantUpgradeButton = document.getElementById('powerPlant-upgrade-button');

powerPlantButton.addEventListener('click', () => {
    energy += powerPlantProduction;
    updateResourceDisplay();
});

powerPlantUpgradeButton.addEventListener('click', () => {
    if (energy >= powerPlantUpgradeCostEnergy && minerals >= powerPlantUpgradeCostMinerals) {
        energy -= powerPlantUpgradeCostEnergy;
        minerals -= powerPlantUpgradeCostMinerals;
        powerPlantLevel++;
        powerPlantProduction += 20;
        powerPlantUpgradeCostEnergy += 10;
        powerPlantUpgradeCostMinerals += 5;
        updateBuildingInfo('powerPlant');
        updateResourceDisplay();
    }
});

// Oil Pump functionality
let oilPumpLevel = 0;
let oilPumpProduction = 0;
let oilPumpUpgradeCostEnergy = 20;
let oilPumpUpgradeCostMinerals = 20;

const oilPumpButton = document.getElementById('oilPump-button');
const oilPumpUpgradeButton = document.getElementById('oilPump-upgrade-button');

oilPumpButton.addEventListener('click', () => {
    energy += oilPumpProduction;
    updateResourceDisplay();
});

oilPumpUpgradeButton.addEventListener('click', () => {
    if (energy >= oilPumpUpgradeCostEnergy && minerals >= oilPumpUpgradeCostMinerals) {
        energy -= oilPumpUpgradeCostEnergy;
        minerals -= oilPumpUpgradeCostMinerals;
        oilPumpLevel++;
        oilPumpProduction += 5;
        oilPumpUpgradeCostEnergy += 15;
        oilPumpUpgradeCostMinerals += 10;
        updateBuildingInfo('oilPump');
        updateResourceDisplay();
    }
});

// Update building information
function updateBuildingInfo(building) {
    const buildingLevelElement = document.getElementById(`${building}-level`);
    const buildingProductionElement = document.getElementById(`${building}-production`);
    const buildingUpgradeCostElement = document.getElementById(`${building}-upgrade-cost`);

    switch (building) {
        case 'mine':
            buildingLevelElement.textContent = mineLevel;
            buildingProductionElement.textContent = mineProduction;
            buildingUpgradeCostElement.textContent = `${mineUpgradeCostEnergy} Energy, ${mineUpgradeCostMinerals} Minerals`;
            break;
        case 'powerPlant':
            buildingLevelElement.textContent = powerPlantLevel;
            buildingProductionElement.textContent = powerPlantProduction;
            buildingUpgradeCostElement.textContent = `${powerPlantUpgradeCostEnergy} Energy, ${powerPlantUpgradeCostMinerals} Minerals`;
            break;
        case 'oilPump':
            buildingLevelElement.textContent = oilPumpLevel;
            buildingProductionElement.textContent = oilPumpProduction;
            buildingUpgradeCostElement.textContent = `${oilPumpUpgradeCostEnergy} Energy, ${oilPumpUpgradeCostMinerals} Minerals`;
            break;
        default:
            break;
    }
}

// Update resource display
function updateResourceDisplay() {
    const energyDisplay = document.getElementById('energy-display');
    const mineralsDisplay = document.getElementById('minerals-display');
    const oilDisplay = document.getElementById('oil-display');

    energyDisplay.textContent = energy;
    mineralsDisplay.textContent = minerals;
    oilDisplay.textContent = oil;
}

// Start generating resources
setInterval(() => {
    energy += mineProduction + powerPlantProduction;
    minerals += mineProduction + powerPlantProduction;
    oil += oilPumpProduction;
    updateResourceDisplay();
}, 4000);
