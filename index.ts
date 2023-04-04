class recipe{
    title
    servings
    ingredients
    constructor(title,servings,ingredients) {
        this.title=title
        this.servings=servings
        this.ingredients=ingredients
    }


}
let recipe1= new recipe("sườn xào chua ngọt",2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)'])

recipe1.ingredients.forEach(elements=>console.log(`- ${elements}`))