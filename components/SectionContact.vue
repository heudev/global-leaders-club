<template>
  <section id="contact" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Full-width CTA banner -->
      <div class="relative rounded-2xl overflow-hidden mb-16 min-h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
          alt="Join our community"
          class="w-full h-full object-cover absolute inset-0"
        />
        <div class="absolute inset-0 bg-brand-950/65" />
        <div class="relative flex flex-col items-center justify-center text-center p-10 min-h-[360px]">
          <h3 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ $t('contact.joinTitle') }}</h3>
          <p class="text-base text-slate-300 max-w-md mb-8 leading-relaxed">{{ $t('contact.joinDesc') }}</p>
          <a
            href="#"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-950 bg-white hover:bg-slate-100 rounded-lg transition-colors"
          >
            {{ $t('contact.joinBtn') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Contact details -->
      <div class="grid md:grid-cols-3 gap-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div class="text-xs text-slate-400 mb-0.5">{{ $t('contact.email') }}</div>
            <a href="mailto:kuresellideler@ieu.edu.tr" class="text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors">
              kuresellideler@ieu.edu.tr
            </a>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div class="text-xs text-slate-400 mb-0.5">{{ $t('contact.location') }}</div>
            <div class="text-sm font-semibold text-slate-900">{{ $t('contact.locationValue') }}</div>
            <div class="text-xs text-slate-400 mt-0.5">Balcova, Izmir</div>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <div>
            <div class="text-xs text-slate-400 mb-1">{{ $t('contact.social') }}</div>
            <div class="flex gap-2">
              <a href="https://www.instagram.com/global.leadersiue?igsh=OW9wenZycmZvM2o3" target="_blank" rel="noopener" class="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors underline underline-offset-2">Instagram</a>
              <a href="https://www.linkedin.com/company/k%C3%BCresel-liderler-kul%C3%BCb%C3%BC/" target="_blank" rel="noopener" class="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors underline underline-offset-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
