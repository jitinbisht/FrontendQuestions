class Product {

   constructor(id, name, price) {
      this.id = id; // integer value
      this.name = name; // str
      this.price = price; // float
    }

    get getId() {
      return id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    get getName() {
      return name;
    }
  
    setName(name) {
      this.name = name;
    }
   // public
  
    getPrice() {
      return price;
    }
  
    setPrice(price) {
      this.price = price;
    }
  }
