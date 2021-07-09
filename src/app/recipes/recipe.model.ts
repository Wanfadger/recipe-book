
export class Recipe{
    public name:String;
    public description:String;
    public imageUrl:String;

    constructor(_name:String , _description:String , _imageUrl:String){
        this.name = _name;
        this.description = _description;
        this.imageUrl = _imageUrl;
    }

}