export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg tracking-tight">
            <span className="text-[#C8102E]">SELF</span>
            <span className="text-gray-400 font-normal ml-2">by Sivana</span>
          </div>
          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-[#C8102E] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#C8102E] mb-8 leading-tight">
            Redefining human readiness for aviation
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Today, we introduce <strong>SELF</strong> by Sivana Innovations. Our goal is simple and ambitious:
            to make sure every flight begins with a clear, focused, and truly ready human at the controls.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-10">
            Aviation has spent decades perfecting aircraft, engines, and avionics. But most incidents
            still trace back to one fragile component: the human mind under pressure. With SELF, we are
            building an AI-powered readiness system that treats the mental state of pilots and crew with
            the same seriousness as any critical system on the aircraft.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#C8102E] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#A00D24] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* How Safety Works Today */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            How safety works today
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Aviation is one of the safest industries in the world. Checklists, training, simulators,
              and regulations have reduced risk to levels that were once unimaginable.
            </p>

            <p>
              But beneath all of this, one thing has not changed: every flight depends on the
              moment-to-moment state of the pilots and crew. Fatigue, stress, distraction, and cognitive
              overload are still among the most common contributing factors in incidents and near-misses.
            </p>

            <p>
              Today, we rely on self-reporting, manual observation, and crude screening. These are
              important, but they are not enough. A pilot can pass every checklist and still be one bad
              night of sleep, one personal crisis, or one moment of lapse away from a mistake.
            </p>

            <p className="font-medium text-gray-900">
              SELF exists to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Our View of Readiness */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Readiness is not a form. It&apos;s a state.
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>
              A ticked box does not guarantee clarity.<br />
              A signature does not guarantee focus.
            </p>

            <p>
              Human readiness is a dynamic state: it lives in how quickly you react, how calmly you
              decide, how well you recover from stress, and whether your mind is fully present in
              the moments that matter.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-lg text-gray-900 font-medium mb-4">We believe readiness must be:</p>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span><strong>Measured continuously</strong>, not assumed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span><strong>Grounded in data</strong>, not just intuition.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span><strong>Respectful and human</strong>, never punitive or invasive.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span><strong>Simple to use</strong>, but scientifically deep.</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-900 font-medium">
            That belief is the foundation of SELF.
          </p>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            SELF: a five-minute cognitive readiness ritual
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            SELF is a five-minute, AI-powered evaluation that happens before duty. A pilot or crew
            member steps up to a dedicated kiosk. It verifies who they are, guides them through a
            calm sequence of tasks and questions, and quietly measures how ready they are for the
            day&apos;s mission.
          </p>

          {/* What it looks like */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What it looks like to them is simple:
            </h3>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>A short set of natural questions about rest, alertness, and mood.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>A handful of light, almost game-like tasks that test focus, reflexes, memory, and decision-making.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>One or two spoken prompts that capture their voice and expression.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>A brief reflection: anything affecting your concentration today?</span>
              </li>
            </ul>
          </div>

          {/* What happens underneath */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What happens underneath is not simple:
            </h3>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>Computer vision reads micro-expressions, blink patterns, gaze stability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>Audio analysis tracks subtle changes in tone, tremor, and breathing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>Cognitive tasks are scored for consistency, not just speed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8102E] mr-3 mt-1">—</span>
                <span>Results are compared against that person&apos;s historical baseline, not a generic average.</span>
              </li>
            </ul>
          </div>

          {/* Outcome */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-600 mb-6">
              At the end, SELF produces a single <strong>readiness index</strong> and a clear outcome:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-900"><strong>Fit to fly</strong></span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-900"><strong>Monitor</strong> <span className="text-gray-600">(mild fatigue or stress, needs mitigation)</span></span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-[#C8102E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-900"><strong>Hold for review</strong> <span className="text-gray-600">(requires human supervisory decision)</span></span>
              </li>
            </ul>
            <p className="text-base text-gray-500 mt-6 pt-6 border-t border-gray-100">
              No raw video or audio leaves the kiosk. Only encrypted scores and signals are stored,
              under strict governance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Aviation */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Why begin with the cockpit
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Aviation is unforgiving. Small mistakes can have large consequences. At the same time,
            it is one of the most structured and safety-conscious domains on earth.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            That combination makes it the ideal place to build SELF:
          </p>

          <ul className="space-y-4 text-lg text-gray-600 mb-8">
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span><strong>High stakes:</strong> every improvement in human performance has outsized impact.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span><strong>Structured operations:</strong> standard procedures and duty cycles make it possible to integrate a repeatable readiness ritual.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span><strong>Data-rich environment:</strong> flight schedules, duty time, and operational context give powerful signals for modelling fatigue and risk.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span><strong>Strong safety culture:</strong> airlines and regulators already think deeply about human factors.</span>
            </li>
          </ul>

          <p className="text-lg text-gray-900 font-medium">
            If we can raise the standard of human readiness here, we can later extend the same
            foundation to air traffic control, emergency response, space operations, and defence.
          </p>
        </div>
      </section>

      {/* Beyond Aviation */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            From the flight deck to space and beyond
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We do not see SELF as a point solution. We see it as the beginning of a broader
            human readiness infrastructure.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The same principles that apply to a cockpit also apply to:
          </p>

          <ul className="space-y-3 text-lg text-gray-600 mb-8">
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Long-duration missions in space.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Defence and intelligence operations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>High-risk industrial environments.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Any domain where human judgement and attention are critical.</span>
            </li>
          </ul>

          <p className="text-lg text-gray-900 font-medium">
            Starting with aviation lets us prove SELF in one of the toughest environments first,
            then scale horizontally into other high-stakes fields.
          </p>
        </div>
      </section>

      {/* Where We Are Now */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Where we are now
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            SELF is no longer just an idea.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We have:
          </p>

          <ul className="space-y-3 text-lg text-gray-600 mb-10">
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Designed the full end-to-end experience as a calm, repeatable pre-flight ritual.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Built a working prototype of the kiosk experience and core evaluation engine.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Tested the system with early users to validate flow, usability, and signal stability.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#C8102E] mr-3 mt-1">—</span>
              <span>Developed an expanded library of cognitive, behavioural, and emotional tasks that can adapt over time, without overwhelming the crew.</span>
            </li>
          </ul>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-900 font-medium mb-4">
              Early results are consistent:
            </p>
            <p className="text-lg text-gray-600">
              we can measure meaningful differences in attention, reaction, and stability across
              sessions, and we can do it in a way that users describe as &ldquo;smooth&rdquo;, &ldquo;respectful&rdquo;,
              and &ldquo;not stressful&rdquo;.
            </p>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Who we&apos;re looking to work with
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            To turn SELF from a prototype into an operational standard, we need partners who care
            as deeply about human performance as we do.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are currently seeking:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Airline and aviation partners
              </h3>
              <p className="text-lg text-gray-600">
                to pilot SELF in controlled environments and help shape operational integration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Regulatory and safety stakeholders
              </h3>
              <p className="text-lg text-gray-600">
                to co-design frameworks around privacy, ethics, and readiness thresholds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Investors and strategic partners
              </h3>
              <p className="text-lg text-gray-600">
                who understand deeptech, trust, and safety — and are comfortable with long-term,
                non-flashy, infrastructure-style work.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-900 font-medium mt-10">
            With the right partners, SELF can move from a single kiosk to a quiet, reliable layer
            in aviation&apos;s safety stack.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Who we are
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Sivana Innovations is an early-stage deeptech company focused on human readiness,
            safety, and performance.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are builders who care less about hype and more about endurance: systems that can
            run quietly, every day, in the background of critical operations — and simply do their job.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Founded by <strong>Aaron Rose</strong>, Sivana Innovations is based in the United Arab Emirates
            and is assembling a small, focused team across AI, human factors, and aviation.
          </p>
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="py-24 px-6 bg-[#C8102E] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Get in touch
          </h2>

          <p className="text-lg leading-relaxed mb-10 opacity-90">
            If you work in aviation, safety, regulation, defence, or space, and this resonates
            with you, we would be glad to talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@sivana.io"
              className="inline-block bg-white text-[#C8102E] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
            >
              hello@sivana.io
            </a>
            <a
              href="https://linkedin.com/company/sivana-innovations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sivana Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
