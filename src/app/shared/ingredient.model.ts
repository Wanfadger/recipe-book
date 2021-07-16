
export class Ingredient{
    name:String;
    amount:Number;
    id:number

    constructor(_id:number , _name:String , _amount:Number){
        this.amount = _amount;
        this.name = _name;
        this.id = _id
    }

}