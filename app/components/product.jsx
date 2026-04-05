import Image from 'next/image';

const features = [
  {
    status: 'Live now',
    title: 'Ecommerce experiences built to convert.',
    description:
      'From business websites to full-scale ecommerce and mobile apps, we build complete digital systems powered with secure payments and built for growth. Android and iOS are coming soon.',
    icon: 'atom',
  },
  {
    status: 'In progress',
    title: 'ERP modules are in progress.',
    description:
      'Create and customize your own ERP modules with ease. Design workflows that match your business, not the other way around.',
    highlight: 'No developers. No AWS. No extra infrastructure costs. Just a system built by you.',
    icon: 'globe',
  },
  {
    status: 'In progress',
    title: 'Automation tools are in progress.',
    description:
      'We are also building our automation solutions. This part is still under development while we focus on creating reliable tools that can support real teams and day-to-day operations.',
    icon: 'mesh',
  },
];

function AtomIcon() {
  return (
    <svg viewBox="0 0 160 160" className="h-28 w-28" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="commerceCore" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFE39A" />
          <stop offset="100%" stopColor="#F4B942" />
        </radialGradient>
        <linearGradient id="commerceStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E8CFF" />
          <stop offset="100%" stopColor="#162B52" />
        </linearGradient>
      </defs>
      <rect x="34" y="44" width="92" height="72" rx="18" stroke="url(#commerceStroke)" strokeWidth="2.5" />
      <path d="M52 58h56" stroke="url(#commerceStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 74h34" stroke="url(#commerceStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 90h26" stroke="url(#commerceStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M100 53c0-12 9-20 20-20s20 8 20 20" stroke="url(#commerceStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="78" r="12" fill="url(#commerceCore)" />
      <path d="M120 70v16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M112 78h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 160 160" className="h-28 w-28" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="erpStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E8CFF" />
          <stop offset="100%" stopColor="#162B52" />
        </linearGradient>
        <radialGradient id="erpCore" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFE39A" />
          <stop offset="100%" stopColor="#F4B942" />
        </radialGradient>
      </defs>
      <rect x="30" y="34" width="100" height="92" rx="22" stroke="url(#erpStroke)" strokeWidth="2.5" />
      <path d="M52 58h56" stroke="url(#erpStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 80h24" stroke="url(#erpStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 98h18" stroke="url(#erpStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="88" y="70" width="24" height="16" rx="5" stroke="url(#erpStroke)" strokeWidth="2.5" />
      <path d="M100 86v20" stroke="url(#erpStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M88 106h24" stroke="url(#erpStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="116" cy="50" r="10" fill="url(#erpCore)" />
    </svg>
  );
}

function MeshIcon() {
  return (
    <svg viewBox="0 0 160 160" className="h-28 w-28" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="automationStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E8CFF" />
          <stop offset="100%" stopColor="#162B52" />
        </linearGradient>
        <radialGradient id="automationCore" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFE39A" />
          <stop offset="100%" stopColor="#F4B942" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="30" stroke="url(#automationStroke)" strokeWidth="2.5" />
      <circle cx="80" cy="80" r="12" fill="url(#automationCore)" />
      <path d="M80 26v16" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 118v16" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 80h16" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M118 80h16" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M45 45l12 12" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M103 103l12 12" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M45 115l12-12" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M103 57l12-12" stroke="url(#automationStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="26" r="6" fill="white" stroke="url(#automationStroke)" strokeWidth="2" />
      <circle cx="134" cy="80" r="6" fill="white" stroke="url(#automationStroke)" strokeWidth="2" />
      <circle cx="80" cy="134" r="6" fill="white" stroke="url(#automationStroke)" strokeWidth="2" />
      <circle cx="26" cy="80" r="6" fill="white" stroke="url(#automationStroke)" strokeWidth="2" />
    </svg>
  );
}

function FeatureIcon({ icon }) {
  if (icon === 'atom') return <AtomIcon />;
  if (icon === 'globe') return <GlobeIcon />;
  return <MeshIcon />;
}

export default function Product() {
  return (
    <section
      id="product"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_32%,#f6f9fc_100%)] py-16 md:py-24"
    >
      <div className="absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-6rem] top-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-5">
            <div
              className="relative overflow-hidden rounded-[36px] border border-white/10 px-7 py-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.14)] md:px-10 md:py-12"
              style={{ backgroundColor: 'lab(27 25.17 -64.13)' }}
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

              <div className="relative">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-blue-100">
                  <span className="relative h-7 w-7 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                    <Image
                      src="/logo4.png"
                      alt="Digital Sloth logo"
                      fill
                      className="object-contain p-1"
                    />
                  </span>
                  Digital Sloth Solutions
                </span>

                <h2 className="mt-6 max-w-[12ch] text-4xl font-medium leading-tight tracking-[-0.05em] text-white md:text-6xl">
                  Digital solutions for your complex real business problems
                </h2>

                <p className="mt-6 max-w-[38ch] text-base leading-8 text-slate-300 md:text-lg">
                  We are building practical software around the way real teams sell, manage, and operate. Our focus is simple: launch what is useful now, and keep expanding with tools businesses can actually use every day.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">01</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Active service live for ecommerce projects.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">02</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">ERP and automation are being developed carefully.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">100%</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Built around practical business workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-white/85 px-6 py-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4169E1]">
                    What We Are Building
                  </p>
                  <p className="mt-3 max-w-[34ch] text-sm leading-7 text-slate-600 md:text-[0.98rem]">
                    One focused launch today, with ERP and automation expanding next. We are shaping a product suite that stays practical, flexible, and easy to adopt for real teams.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#4169E1]/8 px-4 py-3 text-right">
                  <div className="text-xl font-semibold tracking-[-0.04em] text-slate-900">Phase 1</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">Active rollout</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {features.map((feature, index) => {
              const active = feature.status === 'Live now';

              return (
                <article
                  key={feature.title}
                  className={`group relative overflow-hidden rounded-[30px] border px-6 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 md:px-8 md:py-8 ${
                    active
                      ? 'border-[#4169E1]/20 bg-white'
                      : 'border-slate-200/70 bg-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,105,225,0.08),transparent_46%)] opacity-60" />
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${
                      active
                        ? 'bg-gradient-to-r from-[#7ea6ff] via-[#4169E1] to-[#1f3fbf]'
                        : 'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200'
                    }`}
                  />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div
                        className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border shadow-sm ${
                          active
                            ? 'border-[#4169E1]/12 bg-[linear-gradient(135deg,#fbfdff_0%,#f1f5ff_100%)]'
                            : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <FeatureIcon icon={feature.icon} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                              active
                                ? 'bg-[#4169E1]/8 text-[#3359cf]'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {feature.status}
                          </span>
                          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-4 max-w-[15ch] text-2xl font-medium leading-tight tracking-[-0.04em] text-slate-900 md:text-[2rem]">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl border px-5 py-5 ${
                        active
                          ? 'border-[#4169E1]/12 bg-[#f8fbff]'
                          : 'border-slate-200/70 bg-slate-50/55'
                      }`}
                    >
                      <p className="text-base leading-8 text-slate-500 md:text-[1.05rem]">
                        {feature.description}
                      </p>
                      {feature.highlight ? (
                        <div className="mt-4 rounded-xl border border-[#4169E1]/15 bg-white px-4 py-3">
                          <p className="text-sm font-semibold leading-7 tracking-[-0.01em] text-[#2f56cf] md:text-[0.98rem]">
                            {feature.highlight}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
