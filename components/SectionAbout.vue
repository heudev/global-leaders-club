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
            src="https://www.ieu.edu.tr/aday/tr/UI/img/foto-galeri2/web-fotoalbum-o-1.jpg"
            alt="IEU öğrencileri"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://www.ieu.edu.tr/aday/tr/UI/img/foto-galeri2/web-fotoalbum-k110.jpg"
            alt="IEU kampüs"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://www.ieu.edu.tr/aday/tr/UI/img/foto-galeri2/web-fotoalbum-o-5.jpg"
            alt="IEU öğrenci yaşamı"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://www.ieu.edu.tr/aday/tr/UI/img/foto-galeri2/web-fotoalbum-k120.jpg"
            alt="IEU kampüs binası"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://www.ieu.edu.tr/aday/tr/UI/img/foto-galeri2/web-fotoalbum-o-10.jpg"
            alt="IEU öğrenciler"
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
