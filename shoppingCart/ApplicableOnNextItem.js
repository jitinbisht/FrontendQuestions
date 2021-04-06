class ApplicableOnNextItem extends Coupon {

  
    constructor (id, name, percent) {
      super(id, name);

      this.percent = percent;
    }
  
    get getPercent() {
      return percent;
    }
  
    setPercent(percent) {
      this.percent = percent;
    }
  
    equals(coupon) {
      if (this.getId() == coupon.getId()) return true;
      else return false;
    }
  
     applyCoupon(products) {
      for(p of products) {
        if (p.isCoupon() && this.equals((Coupon) p)) {
          found = true;
        } else if (found == true && !p.isCoupon()) {
          let price = p.getPrice() - (p.getPrice() * percent) / 100;
          p.setPrice(price);
          break;
        }
      }
    }
  }
