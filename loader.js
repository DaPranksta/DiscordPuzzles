const fs = require('fs')
const _ = require('lodash')

//THIS IS IMPORTANT:
// IF A JSON FILE IS INVALID, IT WILL THROW AN ERROR AND CRASH THE PROCESS

function loadFile(path) {
  let file = fs.readFileSync(`./${path}`)
  return JSON.parse(file.toString())
}

function loadDir(path) {
  let files = fs.readdirSync(`./${path}`)
  let loadedJson = {}
  files.forEach((fileName, i) => {
    try {
      console.log(fileName)
        let file = fs.readFileSync(`./${path}/${fileName}`)
        console.log(file)
        loadedJson[fileName] =  JSON.parse(file.toString())
      } catch(e) {
        console.log(`FAILED TO LOAD ${fileName}! WILL CLEANLY EXIT`)
        process.exit(0)
      }
    })
    console.log(loadedJson)
    return loadedJson
}

module.exports = {
  importDir: loadDir,
  importFile: loadFile
}
/* example output:
loader.importDir('puzzles') returns:
{
  '1.json': {
    name: 'Puzzle 1',
    intro: 'Welcome to level 1! The text is `N synfu bs entr naq ur frrf erq, jvgubhg n cnhfr V ghearq naq syrq`! Unscramble it, it is encoded using a variant of ROT',
    answer: 'A flash of rage and he sees red, without a pause I turned and fled'
  },
  '2.json': {
    name: 'Floor 2',
    intro: 'Welcome to Floor 2! The text is `Gbezragrq jvgu avtugznerf ur arire fyrrcf, eriratr vf n cebzvfr n zna fubhyq xrrc`! Unscramble it, it is encoded using a variant of ROT',
    answer: 'Tormented with nightmares he never sleeps, revenge is a promise a man should keep'
  },
  'template.json': {
    name: 'name',
    intro: 'spoken at beginning of level',
    answer: 'user says to end level'
  }
}
*/
