'use strict';
'use strict';

import { Person, Student } from './models';
import { GridOverlayElement } from './grid';
import { DataObject } from './projects';

class App {
  constructor () {
    console.log('Constructor of the class');

    document.registerElement('grid-overlay', GridOverlayElement);

    this._gridOverlayElement = document.createElement('grid-overlay');
    document.body.appendChild(this._gridOverlayElement);
    this.resizeWindow();

    window.addEventListener('resize', () => this.resizeWindow());
  }

  resizeWindow () {
    this._gridOverlayElement.updateRendering(window.innerWidth, Math.max(
      window.innerHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight
    ), 24);
  }

  init () {
    console.log('Initialization of the class App');

    const ps1 = new Person('Philippe', 'De Pauw - Waterschoot');
    console.log(ps1.toString());

    const st1 = new Student('362453', 'philippe.depauw@arteveldehs.be', 'Philippe', 'De Pauw - Waterschoot');
    console.log(st1.toString());
  }

/*   importProjects () {
    const project = new DataObject();
    const loadedJSON = project.fetchProjects('https://datatank.stad.gent/4/cultuursportvrijetijd/bibliotheekexemplaar.json');
    return loadedJSON;
    } */
    
};

window.addEventListener('load', (ev) => {
  const app = new App();
  app.init();

/*   const projects = app.importProjects();
  console.log(app.importProjects());
  if(document.getElementById("jsonImport") != true){
    document.getElementById("jsonImport").innerHTML = projects;
  } */
})