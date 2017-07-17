export class Recipe {
  constructor(public name: string,
              public description: string,
              public imgURL: string) {
    // Automatic assignment of parameters to properties!
    console.log('Recipe model constructor called');
  }
}
