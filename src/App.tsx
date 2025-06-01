import Header from './components/Header';
import Properties from './components/Properties';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* New Launch Section */}
        <section id="new-launch" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center text-blue-975 mb-8">
              New Launch
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="New Launch Project"
                className="w-full max-w-3xl h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Introducing our latest project in the heart of Rajahmundry. Stay tuned for exclusive villas and open sites launching soon!
            </p>
          </div>
        </section>

        {/* Our Properties Section */}
        <Properties id="properties" />
      </main>
    </div>
  );
}

export default App;
