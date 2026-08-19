export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Koki Store
          </h1>

          <p className="mt-3 text-gray-600">
            Your simple and trusted online shopping store.
          </p>
        </div>

        {/* About */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Welcome to Koki Store! We are an online store focused on
            providing quality products at affordable prices. Our goal is
            to make shopping simple, convenient, and enjoyable.
          </p>

          <p className="text-gray-600 leading-7">
            Browse our products, add your favorite items to your cart,
            and enjoy a simple shopping experience from the comfort of
            your home.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl mb-3">🛍️</div>

            <h3 className="font-semibold text-lg mb-2">
              Quality Products
            </h3>

            <p className="text-gray-600 text-sm">
              We offer carefully selected products for our customers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl mb-3">💰</div>

            <h3 className="font-semibold text-lg mb-2">
              Affordable Prices
            </h3>

            <p className="text-gray-600 text-sm">
              Great products at prices that fit your budget.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl mb-3">❤️</div>

            <h3 className="font-semibold text-lg mb-2">
              Customer First
            </h3>

            <p className="text-gray-600 text-sm">
              We care about creating a simple and enjoyable shopping
              experience.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}