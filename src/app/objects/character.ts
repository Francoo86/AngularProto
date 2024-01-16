export class Character {
    name: string = "";
    title: string = "";
    vision: string = "";
    weapon: string = "";
    nation: string = "";
    affiliation: string = "";
    rarity: number = -1;
    constellation: string = "";
    birthday: string = "";
    description: string = "";

    skillTalents? : SkillTalent;
    passiveTalents? : LeveledElement;
    constelations? : LeveledElement;
}

export interface IUnlockable {
    name : string;
    unlock : string;
    description : string;
}

//Skill and passive talents, also constellations.
export class SkillTalent implements IUnlockable {
    name: string = "";
    unlock: string = "";
    description: string = "";
    type : string = "";
}

export class LeveledElement implements IUnlockable {
    name: string = "";
    unlock: string = "";
    description: string = "";
    level : number = -1;
}