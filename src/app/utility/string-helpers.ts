export class StringHelpers {
    //i liek oop 
    private static allSpacesPattern : RegExp = /\s/g;

    public static remSpaces(target : string) : string {
        return target.replace(this.allSpacesPattern, "-");
    }

    public static makeSuitable(target : string) : string {
        return this.remSpaces(target.trim().toLowerCase());
    }
}
