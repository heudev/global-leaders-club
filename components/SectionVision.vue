<template>
  <section id="vision" class="py-24 px-6 bg-slate-50">
    <div class="max-w-6xl mx-auto">
      <!-- Mission -->
      <div class="grid lg:grid-cols-2 gap-6 mb-6">
        <div class="relative rounded-2xl overflow-hidden min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Liderlik ve vizyon"
            class="w-full h-full object-cover absolute inset-0"
          />
          <div class="absolute inset-0 bg-brand-950/60" />
          <div class="relative p-8 lg:p-10 flex flex-col justify-end h-full">
            <span class="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">{{ $t('vision.badge') }}</span>
            <h3 class="text-2xl font-bold text-white mb-3">{{ $t('vision.missionTitle') }}</h3>
            <p class="text-base text-slate-200 leading-relaxed italic">
              "{{ $t('vision.missionText') }}"
            </p>
          </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
            alt="Global vizyon"
            class="w-full h-full object-cover absolute inset-0"
          />
          <div class="absolute inset-0 bg-brand-950/60" />
          <div class="relative p-8 lg:p-10 flex flex-col justify-end h-full">
            <h3 class="text-2xl font-bold text-white mb-3">{{ $t('vision.visionTitle') }}</h3>
            <p class="text-base text-slate-200 leading-relaxed">
              {{ $t('vision.visionText') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(value, i) in values" :key="i" class="bg-white rounded-2xl border border-slate-100 p-6">
          <div class="w-10 h-10 rounded-lg mb-4 flex items-center justify-center" :class="value.bg">
            <svg class="w-5 h-5" :class="value.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="value.path" />
            </svg>
          </div>
          <h4 class="text-sm font-bold text-slate-900 mb-2">{{ $t(`vision.value${i + 1}Title`) }}</h4>
          <p class="text-sm text-slate-400 leading-relaxed">{{ $t(`vision.value${i + 1}Desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  { bg: 'bg-blue-50', icon: 'text-blue-600', path: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { bg: 'bg-amber-50', icon: 'text-amber-600', path: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { bg: 'bg-emerald-50', icon: 'text-emerald-600', path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { bg: 'bg-rose-50', icon: 'text-rose-600', path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
]
</script>
