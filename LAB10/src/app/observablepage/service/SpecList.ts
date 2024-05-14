import { Spec } from "./Spec";
export class SpecList{
    
    spec = new Map();
    constructor()
    {
        this.spec.set(0,{id:0, name: "Комп'ютерні науки"});
        this.spec.set(1,{id:1, name: "Аналітитка даних"});
        this.spec.set(2,{id:2, name: "Прикладне програмування"})
    }
    addSpec(specialization:Spec)
    {
        this.spec.set(specialization.id,{id:specialization.id, name: specialization.name})
    }
}
