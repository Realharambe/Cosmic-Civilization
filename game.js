// Initialize resources
let energy = 0;
let minerals = 0;
let oil = 0;
let researchPoints = 0;

// Resource gain per click
const manualGainButton = document.getElementById('manual-gain-button');
manualGainButton.addEventListener('click', () => {
    energy += 1;
    minerals += 1;
    oil += 0;
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
    minerals += mineProduction;
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
    oil += oilPumpProduction;
    updateResourceDisplay();
});

oilPumpUpgradeButton.addEventListener('click', () => {
    if (energy >= oilPumpUpgradeCostEnergy && minerals >= oilPumpUpgradeCostMinerals) {
        energy -= oilPumpUpgradeCostEnergy;
        minerals -= oilPumpUpgradeCostMinerals;
        oilPumpLevel++;
        oilPumpProduction += 30;
        oilPumpUpgradeCostEnergy += 15;
        oilPumpUpgradeCostMinerals += 15;
        updateBuildingInfo('oilPump');
        updateResourceDisplay();
    }
});

// VAB functionality
const vabButton = document.getElementById('vab-button');
const vabUnlockCostEnergy = 15;
const vabUnlockCostMinerals = 15;
const vabUnlockCostOil = 15;
let researchpoints = 0;
let vabUnlocked = false;

vabButton.addEventListener('click', () => {
    if (!vabUnlocked && energy >= vabUnlockCostEnergy && minerals >= vabUnlockCostMinerals && oil >= vabUnlockCostOil) {
        energy -= vabUnlockCostEnergy;
        minerals -= vabUnlockCostMinerals;
        oil -= vabUnlockCostOil;
        vabUnlocked = true;
        unlockResearchPoints();
        updateBuildingInfo('vab');
        updateResourceDisplay();
    }
});

function unlockResearchPoints() {
    if (vabUnlocked) {
        setInterval(() => {
            researchPoints++;
            updateResourceDisplay();
        }, 1000);
    }
}


function unlockResearchPoints() {
    if (vabUnlocked) {
        // Generate research points
        setInterval(() => {
            researchPoints += 1;
            updateResourceDisplay();
        }, 1000);
    }
}


// Update building info
function updateBuildingInfo(building) {
    switch (building) {
        case 'mine':
            document.getElementById('mine-level').textContent = mineLevel;
            document.getElementById('mine-production').textContent = mineProduction;
            document.getElementById('mine-upgrade-cost').textContent = `${mineUpgradeCostEnergy} Energy, ${mineUpgradeCostMinerals} Minerals`;
            break;
        case 'powerPlant':
            document.getElementById('powerPlant-level').textContent = powerPlantLevel;
            document.getElementById('powerPlant-production').textContent = powerPlantProduction;
            document.getElementById('powerPlant-upgrade-cost').textContent = `${powerPlantUpgradeCostEnergy} Energy, ${powerPlantUpgradeCostMinerals} Minerals`;
            break;
        case 'oilPump':
            document.getElementById('oilPump-level').textContent = oilPumpLevel;
            document.getElementById('oilPump-production').textContent = oilPumpProduction;
            document.getElementById('oilPump-upgrade-cost').textContent = `${oilPumpUpgradeCostEnergy} Energy, ${oilPumpUpgradeCostMinerals} Minerals`;
            break;
        case 'vab':
            document.getElementById('vab-unlock-cost').textContent = `${vabUnlockCostEnergy} Energy, ${vabUnlockCostMinerals} Minerals, ${vabUnlockCostOil} Oil`;
            break;
        default:
            break;
    }
}

// Unlock Research Points
function unlockResearchPoints() {
    // Add functionality to unlock Research Points
    researchPoints = 0; // Set initial Research Points to 0
    updateResourceDisplay();
}

// Update resource display
function updateResourceDisplay() {
    document.getElementById('energy-display').textContent = energy;
    document.getElementById('minerals-display').textContent = minerals;
    document.getElementById('oil-display').textContent = oil;
    document.getElementById('research-points-display').textContent = researchPoints;
}
