import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_40%,#f8fbff_100%)]">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#4169E1]/45 to-transparent" />
      <div className="absolute left-[-7rem] bottom-0 h-44 w-44 rounded-full bg-[#4169E1]/10 blur-3xl" />
      <div className="absolute right-[-5rem] top-0 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="w-full px-6 py-14 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 rounded-[32px] border border-slate-200/80 bg-white/80 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo4.png"
                    alt="Digital Sloth logo"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4169E1]">
                  Digital Sloth
                </p>
              </div>
              <h2 className="mt-4 max-w-[15ch] text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
                Simple contact, clear communication, real solutions.
              </h2>
              <p className="mt-4 max-w-[42rem] text-base leading-8 text-slate-600 md:text-lg">
                We build websites, ecommerce systems, and digital products for businesses that want practical results and clean execution.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Contact Number
                </p>
                <a
                  href="tel:+919272526806"
                  className="mt-3 block text-xl font-semibold tracking-[-0.03em] text-slate-900 transition-colors hover:text-[#4169E1]"
                >
                  +91 92725 26806
                </a>
                <p className="mt-2 text-sm text-slate-500">
                  Available for business inquiries and project discussions.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email Address
                </p>
                <a
                  href="mailto:hello@digitalsloth.in"
                  className="mt-3 block text-xl font-semibold tracking-[-0.03em] text-slate-900 transition-colors hover:text-[#4169E1]"
                >
                  hello@digitalsloth.in
                </a>
                <p className="mt-2 text-sm text-slate-500">
                  Reach out anytime for collaborations, questions, or new work.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p className="font-medium text-slate-600">Digital Sloth</p>
            <p>All rights reserved by Digital Sloth, 2026.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
