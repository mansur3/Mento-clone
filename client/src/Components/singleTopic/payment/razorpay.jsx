import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

export default function Pay() {
  const Razorpay = useRazorpay();

  const handlePayment =  useCallback(async () => {
    const order = {
        "amount": 50000,
        "currency": "INR",
        "receipt": "rcptid_11"
    }

    const options: RazorpayOptions = {
      key: "rzp_test_WVl89PSwPNGgbZ",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "piyushgarg.dev@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#f09951",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}