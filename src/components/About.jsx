const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">About Atlas Explorer</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Welcome to <span className="font-semibold">Atlas Explorer</span>, your gateway to discovering the world! 
          Our platform provides in-depth details about countries, including their geography, culture, economy, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-500">Our Mission</h2>
            <p className="text-gray-600">
              We aim to provide accurate and insightful information about every country, 
              helping travelers, students, and enthusiasts explore the world from their screens.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-500">Why Choose Us?</h2>
            <p className="text-gray-600">
              With real-time updates, interactive maps, and engaging facts, Atlas Explorer 
              offers a seamless experience for anyone looking to learn about different nations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
