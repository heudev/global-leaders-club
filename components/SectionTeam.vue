<template>
  <section id="team" class="py-24 px-6 bg-slate-50">
    <div class="max-w-6xl mx-auto">
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

      <!-- Team Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(member, i) in teamMembers" :key="i" class="group relative rounded-2xl overflow-hidden">
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h4 class="text-sm font-bold text-white">{{ member.name }}</h4>
            <p class="text-xs text-slate-300 mt-0.5">{{ $t(member.roleKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Enes Uysal',
    roleKey: 'team.president',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=530&q=80',
  },
  {
    name: 'Aylin Demir',
    roleKey: 'team.vicePresident',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=530&q=80',
  },
  {
    name: 'Can Yilmaz',
    roleKey: 'team.secretary',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=530&q=80',
  },
  {
    name: 'Zeynep Kaya',
    roleKey: 'team.coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=530&q=80',
  },
]
</script>
