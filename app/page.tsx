export default function WhatsAppSalesLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm mb-6 shadow-lg">
            Transform Your Child’s Brain Power
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Kids Brain Development <span className="text-yellow-400">Coach</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
            Help your child improve memory, concentration, focus, confidence, and learning speed through powerful brain activation techniques inspired by ancient wisdom and modern neuroscience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919686323317"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl text-center text-lg"
            >
              Join on WhatsApp
            </a>

            <a
              href="#benefits"
              className="border border-white/30 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl text-center text-lg"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-200">
            <div>✔ Improve Focus</div>
            <div>✔ Better Memory</div>
            <div>✔ Faster Learning</div>
            <div>✔ Increased Confidence</div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative bg-white/10 backdrop-blur-xl rounded-[32px] p-6 border border-white/20 shadow-2xl max-w-sm w-full">
            <img
              src="/Proper without background.png"
              alt="Naveen S H"
              className="rounded-2xl mb-5 w-full h-[420px] object-contain bg-gradient-to-b from-blue-900 to-black p-2"
            />

            <h2 className="text-2xl font-bold mb-2">Naveen S H</h2>
            <p className="text-yellow-300 mb-4">Kids Brain Development Coach</p>

            <div className="space-y-3 text-blue-100 text-sm">
              <div className="bg-white/10 rounded-xl p-3">🧠 Brain Activation Exercises</div>
              <div className="bg-white/10 rounded-xl p-3">👁️ Focus & Concentration Training</div>
              <div className="bg-white/10 rounded-xl p-3">⚡ Memory Enhancement Techniques</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="px-6 py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Parents Choose This Program
          </h2>
          <p className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
            A unique combination of concentration exercises, memory techniques, and brain development methods designed especially for children.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Better Concentration',
                desc: 'Train children to stay focused for longer periods during study and daily activities.'
              },
              {
                title: 'Powerful Memory',
                desc: 'Help kids remember faster and retain information more effectively.'
              },
              {
                title: 'Confidence Boost',
                desc: 'Build self-confidence through engaging brain training activities.'
              },
              {
                title: 'Ancient + Modern Methods',
                desc: 'Blend traditional wisdom with neuroscience-based learning approaches.'
              },
              {
                title: 'Fun Learning',
                desc: 'Interactive and enjoyable techniques children love to practice.'
              },
              {
                title: 'Parent Friendly',
                desc: 'Easy guidance and support system for parents through WhatsApp.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-blue-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">
            What Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'My child’s concentration improved significantly within a few weeks.  Pavithra, Chitradurga',
              'Amazing techniques! My son now remembers things much faster.  Manoj, Banglore',
              'The WhatsApp guidance and daily support made a huge difference.  Harshvardhan, Hassan'
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
                <p className="text-blue-100 leading-relaxed">“{quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Video Testimonials */}
<section className="px-6 py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-12">
      Students Video Testimonials
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Video 1 */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://drive.google.com/file/d/1M1WT1rrkp3vVcDcI8ZXXboBfniOb1HXh/preview"
          width="100%"
          height="300"
          allow="autoplay"
        ></iframe>
      </div>

      {/* Video 2 */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://drive.google.com/file/d/1O7nsVb23hdvHrXen31OxUtfMwK4DEjUR/preview"
          width="100%"
          height="300"
          allow="autoplay"
        ></iframe>
      </div>

      {/* Video 3 */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://drive.google.com/file/d/1pFtdyk0ZEsfR2OHM-oTdGaDr3rNOR8jc/preview"
          width="100%"
          height="300"
          allow="autoplay"
        ></iframe>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-[40px] p-10 text-black shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Unlock Your Child’s Brain Potential?
          </h2>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Join our WhatsApp program today and start your child’s transformation journey.
          </p>

          <a
            href="https://wa.me/919686323317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 transition-all duration-300 text-white font-bold px-10 py-5 rounded-2xl shadow-xl text-xl"
          >
            Chat on WhatsApp Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-blue-200 text-sm">
        © 2026 Kids Brain Development Coach • Naveen S H
      </footer>
    </div>
  )
}
