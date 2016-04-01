'user strict'

describe('Thermostat:', function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat()
  })

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  })

  it('can increase the temperature', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  })

  it('can decrease the temperature', function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i <= 11; i++) {
      thermostat.down()
    }
    expect(thermostat.temperature).toEqual(10)
  })

  it('has power saving on by default', function(){
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it('can reset the temperature to default', function(){
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  describe('when power savings mode is on', function(){

    it('has a maximum temperature of 25 degrees', function(){
      for (var i = 0; i <= 6; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(25)
    })

  })

  describe('when power savings mode is off', function(){

    it('has a maximum temperature of 32 degrees', function(){
      thermostat.psmOff()
      for (var i = 0; i <= 13; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(32)
    })

  })

  describe('displays energy consumption level', function(){

    it('shows consumption as low below 18 degrees', function(){
      for (var i = 0; i <= 2; i++) {
        thermostat.down()
      }
      expect(thermostat.consumption()).toEqual('low')
    })

    it('shows consumption as medium below 25 degrees', function(){
      for (var i = 0; i <= 4; i++) {
        thermostat.up()
      }
      expect(thermostat.consumption()).toEqual('medium')
    })

    it('shows consumption as high above 25 degrees', function(){
      thermostat.psmOff()
      for (var i = 0; i <= 10; i++) {
        thermostat.up()
      }
      expect(thermostat.consumption()).toEqual('high')
    })
  })


})
