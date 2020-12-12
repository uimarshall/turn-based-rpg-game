class Helper {
  constructor() {

  }
  getRandInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
  }
}

export default Helper;