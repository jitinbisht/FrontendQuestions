 class Item extends Product {
 
   constructor ( id,  name,  cateogry,  price) {
     super(id, name, price);
     this.cateogryName = cateogry;
    // this.price = price;
   }
 
   get isCoupon() {
     return false;
   }
 
   get getCateogryName() {
     return cateogryName;
   }
 
    setCateogryName(cateogryName) {
     this.cateogryName = cateogryName;
   }
 }
