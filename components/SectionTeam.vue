<template>
  <section id="team" class="py-24 px-6 bg-slate-50">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3 block">{{ $t('team.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          {{ $t('team.title') }}
        </h2>
        <p class="text-base text-slate-500 max-w-md mx-auto">
          {{ $t('team.subtitle') }}
        </p>
      </div>

      <!-- Photo Corner - scattered/polaroid style -->
      <div class="relative max-w-2xl mx-auto h-[420px] sm:h-[480px]">
        <!-- Photo 1 - left, slightly rotated -->
        <div class="absolute left-0 sm:left-4 top-8 w-[55%] sm:w-[52%] -rotate-3 group z-10 hover:z-30 transition-all duration-500 hover:-rotate-1 hover:scale-105">
          <div class="bg-white rounded-lg p-2 sm:p-3 shadow-xl">
            <img
              src="/team/team1.jpeg"
              alt="Global Leaders Club Team"
              class="w-full aspect-[4/3] object-cover rounded"
            />
          </div>
        </div>

        <!-- Photo 2 - right, slightly rotated other way -->
        <div class="absolute right-0 sm:right-4 top-0 w-[55%] sm:w-[52%] rotate-2 group z-20 hover:z-30 transition-all duration-500 hover:rotate-0 hover:scale-105">
          <div class="bg-white rounded-lg p-2 sm:p-3 shadow-xl">
            <img
              src="/team/team2.jpeg"
              alt="Global Leaders Club Team"
              class="w-full aspect-[4/3] object-cover rounded"
            />
          </div>
        </div>

        <!-- Photo 3 - center bottom, straight -->
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 w-[58%] sm:w-[55%] rotate-1 group z-20 hover:z-30 transition-all duration-500 hover:rotate-0 hover:scale-105">
          <div class="bg-white rounded-lg p-2 sm:p-3 shadow-xl">
            <img
              src="/team/team3.jpeg"
              alt="Global Leaders Club Team"
              class="w-full aspect-[4/3] object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
