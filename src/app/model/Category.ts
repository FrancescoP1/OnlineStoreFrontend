export class Category {
    categoryName!: String;
    constructor(categoryName: String) {
        this.categoryName = categoryName;
    }
    public getCategoryName() {
        return this.categoryName;
    }
    public setCategoryName(newName: String) {
        this.categoryName = newName;
    }
}