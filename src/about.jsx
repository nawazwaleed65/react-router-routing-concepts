function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to our platform! We are dedicated to providing the best user
          experience through innovative technology and seamless design. Our goal
          is to make your journey simple, efficient, and enjoyable.
        </p>
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
