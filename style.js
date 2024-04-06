//1
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    displayInfo() {
      console.log(`Название: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Количество страниц: ${this.pages}`);
    }
  }
  
  const book1 = new Book("Название книги", "Имя автора", 200);
  book1.displayInfo();

  
  //2
  class Student {
    constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
    displayInfo() {
      console.log(`Имя: ${this.name}`);
      console.log(`Возраст: ${this.age}`);
      console.log(`Класс: ${this.grade}`);
    }
  }
  
  const student1 = new Student("John Smith", 16, "10-й класс");
  student1.displayInfo();
  
  const student2 = new Student("Jane Doe", 17, "11-й класс");
  student2.displayInfo();
  