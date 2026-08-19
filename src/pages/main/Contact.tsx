function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
        <div className="md:w-1/2 p-12 flex justify-center items-end">
          <div className="w-80">
            <img
              src="https://img.magnific.com/premium-vector/girl-employee-cartoon-character-typing-keyboard-working-with-computer_7081-4971.jpg?semt=ais_hybrid&w=740&q=80"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 p-10">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full border border-gray-300 outline-none rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full border border-gray-300 outline-none rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Feedback</label>
              <textarea
                rows={5}
                placeholder="Tell us what you think..."
                className="w-full border border-gray-300 outline-none rounded-xl p-4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 hover:bg-gray-600 py-4 rounded-xl text-white text-lg font-semibold cursor-pointer"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
