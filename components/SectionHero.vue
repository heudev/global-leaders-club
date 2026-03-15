<template>
  <section id="home" class="relative h-screen flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="https://www.ieu.edu.tr/aday/tr/UI/big/kampuste-yasam.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-brand-950/70" />
    </div>

    <div class="relative max-w-6xl mx-auto px-6 w-full">
      <div class="max-w-2xl">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-400" />
          {{ $t('hero.badge') }}
        </div>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          {{ $t('hero.title1') }}
          <span class="text-brand-300">{{ $t('hero.title2') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed mb-10">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-950 bg-white hover:bg-slate-100 rounded-lg transition-colors"
            @click.prevent="scrollTo('#contact')"
          >
            {{ $t('hero.cta') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 rounded-lg transition-colors"
            @click.prevent="scrollTo('#about')"
          >
            {{ $t('hero.learnMore') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
