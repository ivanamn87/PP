// Task 1: Create an object that represents your favourite coffee. 
// Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "nescaffe",
    strenght: "light",
    flavour: "vanilla",
    milk: true,
    sugar: true,
}

console.log(coffee.flavour);





// Task 2: Create an object that represents your favourite movie. 
// Please include title, actors, director, genre, popularity. 
//Here we will see for what are used constructors functions

var titanic = {
    tittle: "Titanic",
    director: "James Cameron",
    genre: "thriller",
    imdbGrade: 7.8,
}

var reservoirOfDogs = {
    tittle: "Reservoir of Dogs",
    director: "Quentin Tarantino",
    genre: "thriller",
    imdbGrade: 8.3,
}

var theLordOfTheRings = {
    tittle: "The Lord of the Rings",
    director: "Peter Jackson",
    genre: "Fantasy/Adventure",
    imdbGrade: 8.7,
}

//This function is used to create a movie - its a constructors function

function createMovie(t, d, g, im) {
    var movie = {
        title: t,
        director: d,
        genre: g,
        imdbGrade: im,
    }
    return movie;
}
function createMovie(t, d, g, im) {
    var movie = {
        title: t,
        director: d,
        genre: g,
        imdbGrade: im,
    }
    return movie;
}


var stepmom = createMovie("Stepmom", "Chris Columbus", "drama", 7.8);
console.log(stepmom);





/* Task 3: Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  
a method that checks if the project is written in JavaScript 
as well as a method that checks if the project is in development or not.     */

        function createProject(ds, pl, gr, inDev) {

            var project = {
                description: ds,
                programingLanguage: pl,
                gitRepository: gr,
                inDevelopment: inDev,
                printGitRepository: function () {
                    console.log(project.gitRepository);
                },
                isInJS: function () {
                    if (this.programingLanguage === 'Java Script') {
                        console.log('Project is writen in JavaScript')
                    } else {
                        console.log('Project is NOT writen in JavaScript')
                    }
                },
                isInDEvelopment: function () {
                    if (inDev === true) {
                        console.log('Project is in development');
                    } else {
                        console.log('Project is NOT in development');
                    }
                }
            }
            return project;
        }

        var web = createProject('BIT project', 'Java Script', 'https://github.com/ivanamn87/WEB', true);
        console.log(web);

        var pp = createProject('BIT project', 'Java Script', 'https://github.com/ivanamn87/PP', false);
        console.log(web);

        web.printGitRepository();
        pp.printGitRepository();

        web.isInDEvelopment();






/* Task 4:  
Write a function that creates an object that represents a culinary recipe.
Each recipe is described by: name, type of cuisine, complexity 
(value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients
*/

        function createCulinaryRecipe(dish, cuisine, complexity, ingredients, time, instruction) {

            var recipe = {
                name: dish,
                typeOfCuisine: cuisine,
                howComplex: complexity,
                listOfIngredients: ingredients,
                preparingTime: time,
                preparingInstruction: instruction,
                printIngrediants: function () {
                    console.log(recipe.listOfIngredients);
                }

            }
            return recipe;
        };

        var torta = createCulinaryRecipe('torta', 'srpska', 'teska', ['jaja', 'slag', 'secer'], 60, 'uputstvo');
        console.log(torta);

        torta.printIngrediants();


        /*   Darkov zadatak   */

        function createRecipe(name, cuisine, complexity, ingredients, time, instruction) {
            var recipe = {
                name: name,
                typeOfCuisine: cuisine,
                complexity: complexity,
                ingredients: ingredients,
                preparingTime: time,
                preparingInstruction: instruction,
                mealIngredients: function () {
                    return console.log(ingredients);
                },
                timeOfPreparing: function () {
                    return time <= 15 ? console.log("Can be prepared in 15 minutes") : console.log("Can\'t be prepared in 15 minutes");
                },
                changeCuisine: function (newCuisine) {
                    cuisine = newCuisine;
                    recipe.typeOfCuisine = cuisine;
                    return console.log(recipe.typeOfCuisine);
                },
                deleteIngredient: function (ingredient) {
                    var newIngredients = [];
                    var j = 0;
                    for (var i = 0; i < ingredients.length; i++) {
                        if (ingredient !== ingredients[i]) {
                            newIngredients[j] = ingredients[i];
                            j++;
                        } else {
                            continue;
                        }
                    }
                    recipe.ingredients = newIngredients;
                    return console.log(newIngredients);
                },
            }
            return recipe;
        }
        var recipe = createRecipe("Punjene paprike", "Serbian", 5, ['paprika', 'luk', 'meso', 'pirinac', 'sargarepa', 'vegeta', 'paradajz sok', 'so', 'biber'], 120, 'Paprike izdubiti i napuniti nadevom od mesa i zacina. U serpicu dodati sok od paradajza, vodu, so i staviti na vatru da se prokuva. Pred kraj kuvanja dodati zaprsku. Vreme pripreme 2 sata.');