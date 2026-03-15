<template>
  <section class="relative h-[40vh] min-h-[280px]">
    <img
      src="https://ieu.edu.tr/images/kampus35.jpg"
      alt="IEU Güzelbahçe Kampüsü"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-brand-950/50" />
    <div class="absolute inset-0 flex items-center justify-center">
      <p class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center max-w-2xl px-6 leading-snug">
        "{{ $t('vision.missionText') }}"
      </p>
    </div>
  </section>
</template>
