class ApplicableOnAllItems extends Coupon {

    constructor ( id,  name,  percent) {
      super(id, name);
      this.percent = percent;
      
    }
    
    get getPercent() {
      return percent;
    }
  
    setPercent(percent) {
      this.percent = percent;
    }
  
    get equals(coupon) {
      return false;
    }
  
    applyCoupon(products) {
      for(p of products) {
        if (!p.isCoupon()) {
          let price = p.getPrice() - (p.getPrice() * this.percent) / 100;
          p.setPrice(price);
        }
      }
    }
  }
