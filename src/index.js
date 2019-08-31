import Aznq from './aznq.js'
document.addEventListener('DOMContentLoaded', ()=>{
  let aznq = new Aznq({
    element: document.body
  })
  aznq.start()
  window.aznq = aznq
})
