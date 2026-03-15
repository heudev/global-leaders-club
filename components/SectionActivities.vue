<template>
  <section id="activities" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3 block">{{ $t('activities.badge') }}</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          {{ $t('activities.title') }}
        </h2>
        <p class="text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
          {{ $t('activities.subtitle') }}
        </p>
      </div>

      <!-- Activities: all image cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, i) in activities"
          :key="i"
          class="group relative rounded-2xl overflow-hidden"
          :class="item.tall ? 'sm:row-span-2' : ''"
        >
          <img
            :src="item.image"
            :alt="$t(`activities.item${i + 1}Title`)"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            :class="item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'"
          />
          <div class="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/55 transition-colors" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="text-base font-bold text-white mb-1">{{ $t(`activities.item${i + 1}Title`) }}</h3>
            <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">{{ $t(`activities.item${i + 1}Desc`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activities = [
  { image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=600&q=80', tall: true },
  { image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', tall: false },
  { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', tall: false },
  { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', tall: false },
  { image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80', tall: false },
  { image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=600&q=80', tall: true },
]
</script>
