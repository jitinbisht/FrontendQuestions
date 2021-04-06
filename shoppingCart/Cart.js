class Cart {
  constructor() {
    let products = new Array();
  }
  //final functionality
  get getPrice(){
    let totalPrice = 0;
    products.forEach(prod => {
      if (prod.isCoupon()) {
        Coupon cp = (Coupon) prod;
        cp.applyCoupon(products);
      }
    });
    for(p of products) {

        totalPrice += p.getPrice();
    }
    return totalPrice;
  }
  get addProduct(product) {
    products.push(product);
  }

}
  const it1 = new Item(1, "black Tshirt", Cateogry.TSHIRT, 100.00);
    const it2 = new Item(2, "white Jeans", Cateogry.JEANS, 150.00);
    const it3 = new Item(6, "white Tshirt", Cateogry.JEANS, 200.00);
    const cp1 = new ApplicableOnAllItems(3, "cp1", 10.00);
    const cp2 = new ApplicableOnNextItem(4, "cp2", 20.00);
    const cp3 = new ApplicableOnCateogry(5, "cp3", 20.00, Cateogry.JEANS, 2);
    const cart = new Cart();
    cart.addProduct(it1);
    cart.addProduct(cp1);
    cart.addProduct(cp2);
    cart.addProduct(it2);
    cart.addProduct(cp3);
    cart.addProduct(it3);
    console.log("Price is " + cart.getPrice());
