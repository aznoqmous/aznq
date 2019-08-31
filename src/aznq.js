import Dot from './dot.js'
import Faction from './faction.js'
import {Rifle} from './weapon.js'
export default class Aznq{
  constructor(config){
    this.config = Object.assign(config, {
      element: document.body,
      backgroundColor: 'rgba(247,247,247,0.2)',
      peerColor: '#272727',
      waveSpeed: 500
    })
    this.factions = [
      new Faction(0, '#ea4335'),
      new Faction(1, '#FFBC05'),
      // new Faction(2, '#34A853'),
      // new Faction(3, '#4285f4'),
    ]

    this.init()
    this.build()
    this.bind()


    this.character = new Dot(this.c.width/2, this.c.height/2, false, 0)
    this.dots = [this.character]
    this.character.weapon = new Rifle()
    this.shots = []
    setInterval(()=>{
      this.addFoe()
    }, this.config.waveSpeed)
  }

  init(){}
  build(){
    this.c = document.createElement('canvas')
    this.c.width = window.innerWidth
    this.c.height = window.innerHeight
    this.ctx = this.c.getContext('2d')
    this.config.element.appendChild(this.c)
  }
  bind(){
    this.c.addEventListener('mousedown', (e)=>{
      this.mouse = 'down'
    })
    this.c.addEventListener('mouseup', ()=>{ this.mouse = 'up' })
    this.c.addEventListener('mousemove', (e)=>{
      this.cursX = e.clientX
      this.cursY = e.clientY
    })
  }
  start(){
    this.isRunning = true
    this.loop()
  }
  stop(){
    this.isRunning = false
  }
  loop(){
    let loop = ()=>{this.loop()}
    this.run()
    if(this.isRunning) requestAnimationFrame(loop)
  }
  run(){
    this.clear()
    this.dots.map( dot => {
      this.doDot(dot)
      this.drawDot(dot)
    })
    this.shots.map( shot =>{
      if(!shot.live) return false
      this.doShot(shot)
      this.drawDot(shot)
    } )
    this.cleanEntities(this.dots)
    this.cleanEntities(this.shots)
    this.drawScores()
    if(this.mouse == 'down') this.moveDot(this.character, this.cursX, this.cursY)
  }
  cleanEntities(entities){
    let deadEntities = []
    entities.map((e, i)=>{
      if(!e.live) deadEntities.push(i)
    })
    deadEntities.map((dIndex, i)=>{
      entities.splice(dIndex+i, 1)
    })
  }

  clear(){
    this.ctx.fillStyle = this.config.backgroundColor
    this.ctx.fillRect(0, 0, this.c.width, this.c.height)
  }
  drawDot(dot){
    this.ctx.fillStyle = this.factions[dot.faction].color
    this.ctx.beginPath()
    this.ctx.arc(dot.x, dot.y, dot.size, 0, 2*Math.PI)
    this.ctx.fill()
  }

  addFoe(){
    let faction = Math.floor(Math.random() * (this.factions.length))
    let x, y
    if(faction == 0 || 4 ){
      x = this.c.width * Math.random()
      y = this.c.height + 10
    }
    if(faction == 1){
      x = this.c.width * Math.random()
      y = -10
    }
    if(faction == 2){
      x = this.c.width + 10
      y = this.c.height * Math.random()
    }
    if(faction == 3){
      x = -10
      y = this.c.height * Math.random()
    }

    this.newDot(x, y, faction)
  }
  newDot(x, y, faction){
    let newDot = new Dot(x, y, false, faction)
    newDot.weapon = this.factions[faction].getWeapon()
    this.dots.push(newDot)
  }
  newShot(dot, spx, spy){
    let newShot = new Dot(dot.x, dot.y, dot.weapon.bulletSize, dot.faction)
    newShot.spx = spx
    newShot.spy = spy
    this.shots.push(newShot)
  }
  moveDot(dot, x, y){
    let totx = x - dot.x
    let toty = y - dot.y
    let tot = Math.abs(totx) + Math.abs(toty)
    let spx = totx / tot
    let spy = toty / tot
    dot.spx += spx
    dot.spy += spy
  }
  wanderDot(dot, dist){
    let x = dot.x + (2 * Math.random() - 1) * dist
    let y = dot.y + (2 * Math.random() - 1) * dist
    if(x > 0 && x < this.c.width && y > 0 && y < this.c.height) this.moveDot(dot, x, y)
  }
  doDot(dot){
    dot.x += dot.spx * dot.speed
    dot.y += dot.spy * dot.speed
    dot.spx *= 0.9
    dot.spy *= 0.9
    if(dot.weapon) this.dotShoot(dot)
    if(dot != this.character && Math.random() < 0.1) {
      this.wanderDot(dot, 200)
    }
  }
  dotShoot(dot){
    // fire shot at nearest ennemy
    if(Date.now() - dot.weapon.lastFire < dot.weapon.fireRate) return false
    dot.weapon.lastFire = Date.now()
    let target = this.getNearestOpponent(dot)
    if(!target) return false
    let totx = target.x - dot.x
    let toty = target.y - dot.y
    let tot = Math.abs(totx) + Math.abs(toty)
    let spx = totx / tot * dot.weapon.shotSpeed
    let spy = toty / tot * dot.weapon.shotSpeed
    this.newShot(dot, spx, spy)
  }
  doShot(shot){
    shot.x += shot.spx * shot.speed
    shot.y += shot.spy * shot.speed
    if(  shot.x + shot.size < 0
      || shot.x - shot.size > this.c.width
      || shot.y + shot.size < 0
      || shot.y - shot.size > this.c.height
    ) shot.live = false
    let nearest = this.getNearestOpponent(shot)
    if(this.getDist(shot, nearest) < shot.size * 2){
       nearest.live = false
       shot.live = false
       this.factions[shot.faction].addPoint(1)
    }
  }

  getDist(a, b){
    return Math.sqrt( (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) )
  }
  getNearestOpponent(dot){
    let opponents = this.dots.filter(d=>{ return (dot.faction != d.faction) })
    let nearestDist = 1000
    let nearestDot = false
    opponents.map(o=>{
      let dist = this.getDist(dot, o)
      if ( dist < nearestDist ){
        nearestDist = dist
        nearestDot = o
      }
    })
    return nearestDot
  }

  drawScores(){
    let factions = JSON.parse(JSON.stringify(this.factions)).sort((a,b)=>{return b.totalPoints - a.totalPoints})
    factions.map((f,i)=>{
      this.ctx.fillStyle = f.color
      this.ctx.fillText("Faction "+ f.id + " lvl " + f.level + " : " + f.totalPoints, 10, i * 20 + 20)
    })
  }
}
