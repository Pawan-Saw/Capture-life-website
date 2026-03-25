import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const paymentMethods = [
  { id: 'upi', label: 'UPI', hint: 'GPay / PhonePe / Paytm' },
  { id: 'card', label: 'Card', hint: 'Credit / Debit Cards' },
  { id: 'netbanking', label: 'Net Banking', hint: 'All major banks' },
  { id: 'wallet', label: 'Wallet', hint: 'Paytm / Amazon Pay' },
  { id: 'emi', label: 'EMI', hint: 'No-cost EMI options' },
];

const PaymentGatewayDemo = () => {
  const [searchParams] = useSearchParams();

  const packageName = searchParams.get('package') || 'Photography Package';
  const packagePrice = searchParams.get('price') || '₹0';

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    phone: '',
    email: '',
    shootDate: '',
    location: '',
  });

  const amountNumber = useMemo(() => {
    const parsed = packagePrice.replace(/[^\d]/g, '');
    return parsed || '0';
  }, [packagePrice]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    setIsProcessing(false);
    setIsPaid(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-[#F5F1EB] via-[#EFE7DC] to-[#F5F1EB] px-4 pt-24 pb-10 md:pt-24 md:pb-12">
        <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              window.location.href = '/#pricing';
            }}
            className="rounded-full border border-[#D8C8B5] bg-white px-4 py-2 text-sm font-semibold text-[#2C2C2C] hover:bg-[#f2ebe2] transition"
          >
            ← Back to Pricing
          </button>
          <p className="text-sm font-poppins text-[#8A6F54]">Secure Demo Checkout</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 rounded-3xl border border-[#D8C8B5] bg-white p-5 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
          >
            <h1 className="text-2xl md:text-3xl font-playfair text-[#2C2C2C] mb-1">Complete Your Booking</h1>
            <p className="font-poppins text-sm md:text-base text-[#6B6B6B] mb-6">
              Fill your details and choose a payment method.
            </p>

            <form onSubmit={handleDemoPayment} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  required
                  value={bookingData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-[#D8C8B5] px-4 py-3 font-poppins text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-[#D8C8B5] px-4 py-3 font-poppins text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                value={bookingData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#D8C8B5] px-4 py-3 font-poppins text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="shootDate"
                  required
                  value={bookingData.shootDate}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-[#D8C8B5] px-4 py-3 font-poppins text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
                <input
                  type="text"
                  name="location"
                  required
                  value={bookingData.location}
                  onChange={handleInputChange}
                  placeholder="Shoot Location"
                  className="w-full rounded-xl border border-[#D8C8B5] px-4 py-3 font-poppins text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div className="pt-2">
                <p className="font-poppins font-semibold text-[#2C2C2C] mb-3">Choose Payment Method</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`rounded-xl border p-3 text-left transition ${
                        selectedMethod === method.id
                          ? 'border-[#C8A97E] bg-[#fff7ef]'
                          : 'border-[#D8C8B5] bg-white hover:bg-[#faf6f0]'
                      }`}
                    >
                      <p className="font-poppins font-semibold text-[#2C2C2C]">{method.label}</p>
                      <p className="font-poppins text-xs text-[#8A6F54]">{method.hint}</p>
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isProcessing || isPaid}
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#2C2C2C] py-3 text-white font-poppins font-semibold disabled:opacity-70"
              >
                {isProcessing ? 'Processing payment...' : isPaid ? 'Payment Successful' : `Pay ₹${amountNumber} (Demo)`}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 rounded-3xl border border-[#D8C8B5] bg-[#fffaf5] p-5 md:p-6 shadow-[0_12px_45px_rgba(0,0,0,0.06)]"
          >
            <p className="text-xs uppercase tracking-widest font-poppins text-[#8A6F54] mb-2">Order Summary</p>
            <h2 className="text-2xl font-playfair text-[#2C2C2C] mb-2">{packageName}</h2>
            <p className="font-poppins text-[#6B6B6B] mb-5">Premium photography booking package</p>

            <div className="rounded-2xl border border-[#E5D7C6] bg-white p-4 space-y-3">
              <div className="flex justify-between font-poppins text-sm text-[#6B6B6B]">
                <span>Package amount</span>
                <span>{packagePrice}</span>
              </div>
              <div className="flex justify-between font-poppins text-sm text-[#6B6B6B]">
                <span>Platform fee (demo)</span>
                <span>₹0</span>
              </div>
              <div className="h-px bg-[#EFE2D3]" />
              <div className="flex justify-between font-poppins font-semibold text-[#2C2C2C]">
                <span>Total payable</span>
                <span>{packagePrice}</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#F3E9DC] p-4">
              <p className="font-poppins text-sm text-[#5f4f3f]">
                Demo only: this page simulates a real payment gateway flow (Razorpay-style UX) without charging money.
              </p>
            </div>

            {isPaid && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-2xl border border-green-300 bg-green-50 p-4"
              >
                <p className="font-poppins font-semibold text-green-700">Payment received successfully (Demo)</p>
                <p className="font-poppins text-sm text-green-700 mt-1">Booking confirmation has been generated.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentGatewayDemo;
