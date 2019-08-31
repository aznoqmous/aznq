import Weapon from './weapon.js'
import {Rifle, Bazooka, Laser} from './weapon.js'

export default class Faction{
  constructor(id, color){
    this.id = id
    this.points = 0
    this.totalPoints = 0
    this.color = color
    this.weaponTable = [new Weapon(), new Rifle(), new Bazooka(), new Laser()]
    this.level = 0
    this.weapons = [this.weaponTable[0]]
    this.nextLevel = 10
  }
  addPoint(point){
    this.points += point
    this.totalPoints += point
    if(this.points > this.nextLevel) this.levelUp()
  }
  levelUp(){
    this.points = 0
    this.level++
    console.log('Faction '+this.id+' get to lvl '+this.level+' !')
    this.nextLevel = Math.round(this.nextLevel * 1.3)
    this.weapons.push(this.weaponTable[this.level])
  }
  getWeapon(){
    let selection = this.level
    if(this.level > this.weapons.length) selection = this.weapons.length
    return this.weapons[ Math.floor(Math.random() * selection) ]
  }
}
