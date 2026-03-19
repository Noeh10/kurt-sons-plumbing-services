export default function KurtAndSonsPlumbingServices() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-950" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Kurt & Sons</div>
            <div className="text-xl font-semibold tracking-wide text-white">Plumbing Services</div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#reviews" className="transition hover:text-white">Reviews</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+17087192825"
              className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 backdrop-blur transition hover:bg-cyan-400/15"
            >
              Call (708) 719-2825
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
            >
              Book Service
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-28 lg:pt-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
              Premium Residential & Commercial Plumbing
            </div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Luxury-level plumbing service that feels fast, clean, and reliable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Kurt & Sons Plumbing Services delivers refined workmanship, rapid response times, and honest service for homeowners and businesses who expect the job done right the first time.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+17087192825"
                className="rounded-full border border-amber-300/30 bg-amber-300/10 px-7 py-4 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/15"
              >
                Call Now: (708) 719-2825
              </a>
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
              >
                Schedule an Appointment
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["24/7", "Emergency support"],
                ["5-Star", "Customer-first service"],
                ["Family-Owned", "Crafted with pride"],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                {typeof window !== 'undefined' && window.location.search.includes('success=true') ? (
                  <div className="mb-4 w-full rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    Thank you — your request was sent successfully. Kurt & Sons Plumbing will contact you shortly.
                  </div>
                ) : null}
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">Fast Request</div>
                  <div className="mt-1 text-2xl font-semibold">Need service today?</div>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <form action="https://formspree.io/f/mlgpzrnw" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Kurt & Sons Plumbing lead" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/?success=true#contact" />
                <input
                  name="name"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                  placeholder="Full name"
                  required
                />
                <input
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                  placeholder="Phone number"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                  placeholder="Email address"
                />
                <textarea
                  name="message"
                  className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                  placeholder="Tell us what’s going on"
                  required
                />
                <button className="w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-105">
                  Request Premium Service
                </button>
                <p className="text-center text-xs text-zinc-500">
                  Same-day availability for many plumbing emergencies.
                </p>
                <p className="text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Premium response • Clean scheduling • Trusted local service
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-zinc-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4 lg:px-10">
          {[
            "Leak Detection",
            "Drain Cleaning",
            "Water Heaters",
            "Emergency Repairs",
          ].map((item) => (
            <div key={item} className="text-sm uppercase tracking-[0.22em] text-zinc-400">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Services</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Plumbing solutions designed to feel effortless.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            From urgent repairs to high-end fixture installs, we combine practical expertise with a polished service experience your home or business deserves.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Emergency Plumbing",
              text: "Burst pipes, sudden leaks, backups, and urgent repair calls handled with speed and calm precision.",
            },
            {
              title: "Water Heater Service",
              text: "Installation, repairs, and replacement for traditional and tankless systems with reliable performance in mind.",
            },
            {
              title: "Drain & Sewer Care",
              text: "Clogs, slow drains, camera inspections, and line clearing for cleaner, smoother plumbing systems.",
            },
            {
              title: "Fixture Upgrades",
              text: "Luxury faucets, sinks, toilets, showers, and custom plumbing enhancements installed beautifully.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400/25 to-amber-300/20" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gradient-to-b from-zinc-950 to-zinc-900/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="text-sm uppercase tracking-[0.35em] text-amber-300">Why Kurt & Sons</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Built on trust, craftsmanship, and family pride.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Kurt & Sons Plumbing Services is positioned as a premium, family-run plumbing company that values responsiveness, clean work, honest pricing, and long-term customer relationships.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["White-glove service", "Respectful, tidy, and detail-oriented work from arrival to completion."],
              ["Transparent communication", "No vague explanations, no runaround, just clear next steps and real solutions."],
              ["Premium positioning", "A more elevated brand for customers who want reliability and a polished experience."],
              ["Strong call-to-action flow", "Designed to convert visitors into booked jobs with confidence and speed."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Testimonials</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The kind of experience people talk about.
            </h2>
          </div>
          <div className="text-zinc-400">Crafted to feel premium, trustworthy, and easy to say yes to.</div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            "They showed up fast, explained everything clearly, and left the space cleaner than they found it. The whole experience felt first-class.",
            "Finally, a plumbing company that feels professional from the first call to the final fix. Smooth, honest, and incredibly reliable.",
            "Kurt & Sons made a stressful issue feel easy. Great communication, great work, and a premium experience all around.",
          ].map((quote, i) => (
            <div key={i} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-2xl text-amber-300">★★★★★</div>
              <p className="mt-5 leading-8 text-zinc-300">“{quote}”</p>
              <div className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">Local Customer</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-10">
        <a
          href="tel:+17087192825"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-2xl shadow-cyan-950/40 transition hover:scale-[1.03] lg:hidden"
        >
          Call (708) 719-2825
        </a>
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-zinc-900 to-amber-300/10 p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to make plumbing problems disappear?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Make your first impression count with a premium plumbing brand presence that feels established, trustworthy, and built to convert.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-7 backdrop-blur-sm">
              <div className="space-y-4 text-zinc-300">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Call</div>
                  <a href="tel:+17087192825" className="mt-1 block text-lg font-medium transition hover:text-cyan-300">(708) 719-2825</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Email</div>
                  <a href="mailto:service@kurtandsonsplumbing.com" className="mt-1 block text-lg font-medium transition hover:text-cyan-300">service@kurtandsonsplumbing.com</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Service Area</div>
                  <div className="mt-1 text-lg font-medium">Oak Lawn & Surrounding Areas</div>
                </div>
              </div>
              <a
                href="#top"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
              >
                Request Service Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
