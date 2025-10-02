import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Containar from "../../layout/Containar";
import { cartQuntity, removeFromCart } from "../../slices/cartSlice";
import { useState } from "react";
import { Link } from "react-router";

const CartPage = () => {
  const dispatch = useDispatch();
  const [couponText, setcouponText] = useState("")
  const [discount, setDiscount] = useState(0)
  const data = useSelector(state => state.cartDetails.cartItems)
  const totalPrice = data.reduce((prev, current) => {
    return prev + current.price * current.cartQun;
  }, 0)
  const handelIncrement = (id) => {
    dispatch(cartQuntity({ id: id, type: "increment" }))
  }
  const handelDecrement = (id) => {
    dispatch(cartQuntity({ id: id, type: "decrement" }))
  }
  const handleRemove = (id) => {
    dispatch(removeFromCart({id: id}))
  }
  const handelChange = (e) => {
    setcouponText(e.target.value);
  }

  const handleApplyCoupon = () => {
    if (couponText == "nayeb") {
      setDiscount(totalPrice * 0.2)
    }
  }
  return (
    <div>
      <Containar>
        <div>
          <div className="flex items-center py-[80px]">
            <p className="font-primary text-[14px] leading-[21px] text-[#808080]">
              Home
            </p>
            <span className="px-3">/</span>
            <p className="font-primary text-[14px] leading-[21px] text-black">
              Cart
            </p>
          </div>
          <div className=" flex flex-col gap-y-[40px] mb-6">
            <div className="flex items-center justify-between py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.25)]">
              <div className="w-[30%] text-start font-primary text-[16px] leading-[24px] text-black">
                Product
              </div>
              <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
                Price
              </div>
              <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
                Quantity
              </div>
              <div className="w-[20%] text-end font-primary text-[16px] leading-[24px] text-black">
                Subtotal
              </div>
            </div>
            {
              data.map((product, index) => (
                <div className="flex items-center justify-between py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.25)]">
                  <div className="w-[30%] text-center flex gap-x-5 items-center">
                    <img className="w-[50px]" src={product.thumbnail} alt="" />
                    <p className="font-primary text-[16px] leading-[24px] text-black">
                      {product.title}
                    </p>
                  </div>
                  <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
                    ${product.price}
                  </div>
                  <div className="w-[25%] text-center">
                    <div className="w-[76px] h-[52px] py-2.5 px-3 border border-[#999999] rounded inline-block">
                      <div className="flex items-center gap-x-4">
                        <p className="font-primary text-[16px] leading-[24px] text-black">
                          {product.cartQun}
                        </p>
                        <div>
                          <IoChevronUpSharp onClick={() => handelIncrement(index)} size={16} />
                          <IoChevronDownSharp onClick={() => handelDecrement(index)} size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] text-end flex items-center justify-end gap-x-4">
                    <p className="font-primary text-[16px] leading-[24px] text-black">
                      ${product.price * product.cartQun}
                    </p>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-black font-bold text-xl"
                      title="Remove from cart"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex items-center justify-between mb-[80px]">
            <Link to='/products' className="py-4 px-12 rounded border border-[#808080] font-primary font-medium text-[16px] leading-[24px] text-black">
              Return To Shop
            </Link>
            <button className="py-4 px-12 rounded border border-[#808080] font-primary font-medium text-[16px] leading-[24px] text-black">
              Update Cart
            </button>
          </div>
          <div className="flex justify-between pb-[140px]">
            <div className="flex items-start gap-x-4">
              <input
                onChange={handelChange}
                name="coupon"
                className="py-4 pl-6 pr-[164px] placeholder:font-primary placeholder:text-[16px] placeholder:leading-[24px] text-black outline-none border border-black rounded"
                type="text"
                placeholder="Coupon Code"
              />
              <button onClick={handleApplyCoupon} className="py-[17px] px-12 rounded bg-primary font-primary font-medium text-[16px] leading-[24px] text-white">
                Apply Coupon
              </button>
            </div>
            <div className="w-[470px] border-[1.5px] border-[#000000] py-[32px] px-6 rounded-[4px]">
              <p className="font-primary text-[20px] leading-7 font-medium">Cart Total</p>
              <div className="flex font-primary text-[16px] leading-6 justify-between mt-6 pb-4 border-b border-[#00000080]">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <div className="flex font-primary text-[16px] leading-6 justify-between mt-6 pb-4 border-b border-[#00000080]">
                <p>Disccount:</p>
                <p>{discount}</p>
              </div>
              <div className="flex font-primary text-[16px] leading-6 justify-between mt-6">
                <p>Total:</p>
                <p>{totalPrice - discount}</p>
              </div>
              <div className="mt-[32px] flex justify-center">
                <button className="py-4 px-12 rounded bg-primary font-primary font-medium text-[16px] leading-[24px] text-white">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Containar>
    </div>

  );
};

export default CartPage;
