export default function WhatsAppSalesLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white px-6 py-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>

      <div className="inline-block px-5 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm mb-6 shadow-lg">
        FREE 1-Hour Gandhari Vidya Demo Class
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        Is Your Child Struggling With{" "}
        <span className="text-yellow-400">
          Focus, Concentration, or Memory?
        </span>
      </h1>

      <p className="text-xl text-blue-100 leading-relaxed mb-8">
        What if the problem is NOT your child… but the way they are being taught?
      </p>

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/10 mb-8">

        <p className="text-lg text-blue-50 mb-6 leading-relaxed">
          Join our{" "}
          <span className="text-yellow-400 font-bold">
            FREE 1-Hour Gandhari Vidya Demo Class
          </span>{" "}
          and discover how children can improve:
        </p>

        <div className="grid grid-cols-2 gap-4 text-white text-lg font-medium">

          <div>✅ Concentration</div>
          <div>✅ Memory Power</div>

          <div>✅ Focus</div>
          <div>✅ Confidence</div>

          <div>✅ Learning Speed</div>
          <div>✅ Brain Activation</div>

        </div>

        <p className="mt-6 text-blue-100 text-lg">
          Without pressure, punishment, or long study hours.
        </p>

        <p className="mt-5 text-yellow-300 font-semibold text-lg">
          This is not tuition. This is Brain Activation Training by Chetana Kendra Brain Solution.
        </p>

        <p className="mt-5 text-white font-semibold text-lg">
          🎯 Specially designed for children aged 8–14 years.
        </p>

      </div>

      <a
        href="https://wa.me/919686323317"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-5 rounded-2xl shadow-2xl transition duration-300 text-lg"
      >
        Book Your Free Seat Now
      </a>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative bg-white/10 backdrop-blur-xl rounded-[32px] p-6 border border-white/20">

        <img
          src="/Proper without background.png"
          alt="Naveen S H"
          className="rounded-3xl w-full max-w-md h-[500px] object-contain bg-gradient-to-b from-blue-950 to-black"
        />

        <h2 className="text-3xl font-bold mt-6 mb-2">
          Naveen S H
        </h2>

        <p className="text-yellow-400 text-lg font-semibold">
          Kids Brain Development Coach
        </p>

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
            Book Your Free Seat Now
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
