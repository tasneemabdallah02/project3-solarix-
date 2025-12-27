function calculate() {
  const wattage = Number(document.getElementById("wattage").value);
  const panels = Number(document.getElementById("panels").value);
  const efficiency = Number(document.getElementById("efficiency").value) / 100;

  if (!wattage || !panels || !efficiency) {
    alert("Please enter all values");
    return;
  }

  const sunHours = 5; // average daily sun hours

  const systemPower = (wattage * panels) / 1000; // kW
  const dailyEnergy = systemPower * sunHours * efficiency;
  const monthlyEnergy = dailyEnergy * 30;

  document.getElementById("power").textContent =
    systemPower.toFixed(2) + " kW";

  document.getElementById("daily").textContent =
    dailyEnergy.toFixed(2) + " kWh";

  document.getElementById("monthly").textContent =
    monthlyEnergy.toFixed(2) + " kWh";
}
