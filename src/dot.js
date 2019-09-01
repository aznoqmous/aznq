import Weapon from './weapon.js'
export default class Dot{
  constructor(x, y, size, faction, origin){
    this.x = x || 0
    this.y = y || 0
    this.size = size || 5
    this.spx = 0
    this.spy = 0
    this.speed = 1
    this.faction = faction ? faction : 0
    this.live = true
    this.weapon = new Weapon()
    this.origin = origin || false
  }
}
