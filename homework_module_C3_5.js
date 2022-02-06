class ParentElectroDevice
{
  constructor(powerСonsumptionW)
  {
    this.switchedOn = false;
    this.powerConsumptionW = powerСonsumptionW; 
  }
    
  switchOnDevice()
  {
    this.switchedOn = true;
    console.log('Прибор включен');
    return this.powerConsumptionW;  
  }
  
  switchOffDevice()
  {
    this.switchedOn = false;
    console.log('Прибор выключен');
    return 0; 
  }

  getCurrentPowerW()
  {
    if(this.switchedOn)
      return this.powerConsumptionW;
    else
      return 0;  
  }
}


class MusicCenter extends ParentElectroDevice
{
  constructor(name, brand, weightKg, powerСonsumptionW)
  { 
    super(powerСonsumptionW);
    this.name = name;
    this.brand = brand;
    this.weightKg = weightKg;
  }
  
  play()
  {
    if(this.switchedOn) console.log('Music played');      
    else console.log(this.name + ' Ошибка. Прибор выключен!');
  }
  
  stop()
  {
    if(this.switchedOn) console.log('Music stopped');
    else console.log(this.name + ' Ошибка. Прибор выключен!');
  }
}

class HeatingTank extends ParentElectroDevice
{
  constructor(name, brand, weightKg, volumeL, powerСonsumptionW)
  {
    super(powerСonsumptionW);
    this.name = name;
    this.brand = brand;
    this.weightKg = weightKg;
    this.volumeL = volumeL;
    this.minTempC = 45;
    this.maxTempC = 85; 
  }
  
  setMinTempC(temp)
  {
    if(temp > 40 && temp < this.maxTempC)
    {
      this.minTempC = temp;
      console.log('Минимальная температура прибора ' + this.name + ' установлена на ' + this.minTempC + ' градусов Цельсия');
      return true;
    }
    else
    {
      console.log(this.name + ' Ошибка установки минимальной температуры');
      return false;
    }
  }
  
  setMaxTempC(temp)
  {
    if(temp <= 85 && temp > this.minTempC)
    {
      this.maxTempC = temp;
      console.log('Максимальная температура прибора ' + this.name + ' установлена на ' + this.maxTempC + ' градусов Цельсия');
      return true;
    }
    else
    {
      console.log(this.name + ' Ошибка установки максимальной температуры');
      return false;    
    }
  } 
}

const boomBox = new MusicCenter('boomBox', 'Philips', 3, 40);
const aristonHeatingTank = new HeatingTank('Heating Tank', 'Ariston', 18, 30, 2000);

// тестируем функционал
// boomBox.switchOnDevice();
// boomBox.play();
// boomBox.stop();
// console.log('Текущая потребляемая мощность: ' + boomBox.getCurrentPowerW() + ' Ватт');
// boomBox.switchOffDevice();
// boomBox.play();
// boomBox.stop();
// console.log('Текущая потребляемая мощность: ' + boomBox.getCurrentPowerW() + ' Ватт');

// aristonHeatingTank.switchOnDevice();
// aristonHeatingTank.setMaxTempC(80);
// aristonHeatingTank.setMinTempC(50);
// console.log('Текущая потребляемая мощность: ' + aristonHeatingTank.getCurrentPowerW() + ' Ватт');
// aristonHeatingTank.switchOffDevice();
// aristonHeatingTank.setMaxTempC(90);
// aristonHeatingTank.setMinTempC(38);
// console.log('Текущая потребляемая мощность: ' + aristonHeatingTank.getCurrentPowerW() + ' Ватт');
// ---

let pwr = boomBox.switchOnDevice();
pwr += aristonHeatingTank.switchOnDevice();
console.log('Суммарная потребляемая мощность приборов: ' + pwr + ' Вт/час')

console.log(boomBox);
console.log(aristonHeatingTank);
