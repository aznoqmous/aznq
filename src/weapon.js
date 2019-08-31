export default class Weapon{
  constructor(bulletSize, fireRate, shotSpeed){
    this.shotSpeed = shotSpeed || 5
    this.fireRate = fireRate || 1000
    this.bulletSize = bulletSize || 3
    this.lastFire = Date.now()
  }
}

export class Rifle extends Weapon{
  constructor(){
    super(2, 500, 5)
  }
}

export class Bazooka extends Weapon{
  constructor(){
    super(10, 1500, 4)
  }
}

export class Laser extends Weapon{
  constructor(){
    super(5, 1000, 20)
  }
}
