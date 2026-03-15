<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-brand-900 flex items-center justify-center text-white font-bold text-xs tracking-tight">
            KL
          </div>
          <div class="hidden sm:block leading-tight">
            <div class="text-sm font-semibold text-slate-900">{{ $t('footer.club') }}</div>
            <div class="text-[11px] text-slate-400">{{ $t('hero.badge') }}</div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.hash"
            :href="link.hash"
            class="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
            @click.prevent="scrollToSection(link.hash)"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-3">
          <button
            class="text-[13px] font-medium text-slate-400 hover:text-slate-700 transition-colors"
            @click="toggleLocale"
          >
            {{ locale === 'tr' ? 'EN' : 'TR' }}
          </button>

          <a
            href="#contact"
            class="hidden sm:inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white bg-brand-900 hover:bg-brand-800 rounded-lg transition-colors"
            @click.prevent="scrollToSection('#contact')"
          >
            {{ $t('nav.join') }}
          </a>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white border-b border-slate-100">
        <div class="px-6 py-4 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.hash"
            :href="link.hash"
            class="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            @click.prevent="scrollToSection(link.hash); mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="block mt-2 px-3 py-2.5 text-sm font-semibold text-center text-white bg-brand-900 rounded-lg"
            @click.prevent="scrollToSection('#contact'); mobileOpen = false"
          >
            {{ $t('nav.join') }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = computed(() => [
  { hash: '#about', label: t('nav.about') },
  { hash: '#vision', label: t('nav.vision') },
  { hash: '#activities', label: t('nav.activities') },
  { hash: '#team', label: t('nav.team') },
  { hash: '#contact', label: t('nav.contact') },
])

function toggleLocale() {
  setLocale(locale.value === 'tr' ? 'en' : 'tr')
}

function scrollToSection(hash: string) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
