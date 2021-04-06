class ApplicableOnCateogry extends Coupon {

    constructor (id,  name,  amount,  cateogryType,  countOfItem) {
      super(id, name);
      this.amount = amount;
      this.cateogryType = cateogryType;  // import from Category component
      this.countOfItem = countOfItem;
    }
  
    get equals(coupon) {
      return false;
    }
  
     applyCoupon(products) {
      let cnt = 0;
      for(p of products) {
        if (!p.isCoupon()) {
          const item = new Item(); // Import item class from its component
          if (this.getCateogryType().equals(item.getCateogryName())) cnt++;
          if (this.getCountOfItem() === cnt) {
            let price = p.getPrice() - this.amount;
            p.setPrice(price);
            break;
          }
        }
      }
  
    }
  
    get getAmount() {
      return amount;
    }
  
     setAmount(amount) {
      this.amount = amount;
    }
  
    get getCateogryType() {
      return cateogryType;
    }
  
     setCateogryType(cateogryType) {
      this.cateogryType = cateogryType;
    }
  
     get getCountOfItem() {
      return countOfItem;
    }
  
     setCountOfItem(countOfItem) {
      this.countOfItem = countOfItem;
    }
  
  }
