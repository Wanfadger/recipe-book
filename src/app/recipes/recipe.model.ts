import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name:String;
    public description:String
    public imageUrl:String;
    public  ingredients:Ingredient[]
    public id:string|number

    constructor( _id:string|number ,_name:String , _description:String , _imageUrl:String , _ingredients:Ingredient[]){
        this.name = _name
        this.description = _description
        this.imageUrl = _imageUrl
        this.ingredients = _ingredients
        this.id = _id
    }

}