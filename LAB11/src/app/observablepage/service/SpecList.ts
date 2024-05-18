import { Spec } from "./Spec";
export class SpecList{
    
    spec = new Array();
    constructor(){}
    addSpec(specialization:Spec)
    {
        this.spec.push(specialization)
    }
}
