function Thermostat() {

  this.DEFAULT_TEMP = 20
  this.MIN_TEMP = 10
  this.MAX_TEMP = 32
  this.POWER_SAVINGS_MAX_TEMP = 25
  this.MEDIUM_CONSUMPTION = 18


  this.temperature = this.DEFAULT_TEMP
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(){
  if (this.powerSavingMode && this.temperature < this.POWER_SAVINGS_MAX_TEMP){
    this.temperature += 1
  }
  if (!this.powerSavingMode && this.temperature < this.MAX_TEMP){
    this.temperature += 1
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MIN_TEMP){
    this.temperature -= 1
  }
}

Thermostat.prototype.psmOff = function(){
  this.powerSavingMode = false
}

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMP
}

Thermostat.prototype.consumption = function(){
  if (this.temperature < this.MEDIUM_CONSUMPTION) {
    return 'low'
  }
  if (this.temperature > this.MEDIUM_CONSUMPTION && this.temperature <= this.POWER_SAVINGS_MAX_TEMP) {
    return 'medium'
  }
  return 'high'
}
