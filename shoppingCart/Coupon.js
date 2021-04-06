class Coupon extends Product {

    constructor( id,  name) {
      super(id, name, 0);
    }
  
   get isCoupon() {
      return true;
    }
  
  }
  
  /*
  Items {
    int id;
    price,
    Type,
    name,
  }
  Coupon {
    int id;
    int percentageOff,
    int dollarOff,
    apliedOnNextItem, -- expired
    appiledToAllItem, isExpired,
    particularTypewithNumber - expired
  }
  List<Item>
  List<Coupon>
  Item ->
  it1, it2, c1, c2, c3, c3, it3
  */
