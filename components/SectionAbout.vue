<template>
  <section id="about" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3 block">{{ $t('about.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          {{ $t('about.title') }}
        </h2>
        <p class="text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
          {{ $t('about.description') }}
        </p>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        <div class="col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Öğrenciler birlikte çalışıyor"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
            alt="Liderlik eğitimi"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80"
            alt="Takım çalışması"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
            alt="Öğrenci topluluğu"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            alt="Mezuniyet ve başarı"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="text-center">
          <div class="text-3xl font-bold text-slate-900">{{ $t(`about.stat${i}Value`) }}</div>
          <div class="text-sm text-slate-400 mt-1">{{ $t(`about.stat${i}Label`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
