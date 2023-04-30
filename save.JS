// Save game data
function saveGame() {
    const gameData = {
      energy,
      minerals,
      oil,
      mineLevel,
      mineProduction,
      mineUpgradeCostEnergy,
      mineUpgradeCostMinerals,
      powerPlantLevel,
      powerPlantProduction,
      powerPlantUpgradeCostEnergy,
      powerPlantUpgradeCostMinerals,
      oilPumpLevel,
      oilPumpProduction,
      oilPumpUpgradeCostEnergy,
      oilPumpUpgradeCostMinerals,
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }
  
  // Load game data
  function loadGame() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
      const gameData = JSON.parse(savedData);
  
      energy = gameData.energy;
      minerals = gameData.minerals;
      oil = gameData.oil;
      mineLevel = gameData.mineLevel;
      mineProduction = gameData.mineProduction;
      mineUpgradeCostEnergy = gameData.mineUpgradeCostEnergy;
      mineUpgradeCostMinerals = gameData.mineUpgradeCostMinerals;
      powerPlantLevel = gameData.powerPlantLevel;
      powerPlantProduction = gameData.powerPlantProduction;
      powerPlantUpgradeCostEnergy = gameData.powerPlantUpgradeCostEnergy;
      powerPlantUpgradeCostMinerals = gameData.powerPlantUpgradeCostMinerals;
      oilPumpLevel = gameData.oilPumpLevel;
      oilPumpProduction = gameData.oilPumpProduction;
      oilPumpUpgradeCostEnergy = gameData.oilPumpUpgradeCostEnergy;
      oilPumpUpgradeCostMinerals = gameData.oilPumpUpgradeCostMinerals;
  
      updateBuildingInfo('mine');
      updateBuildingInfo('powerPlant');
      updateBuildingInfo('oilPump');
      updateResourceDisplay();
    }
  }
  