<template>
  <div>
    <SectionHero />
    <SectionAbout />
    <SectionVision />
    <SectionActivities />
    <SectionBanner />
    <SectionTeam />
    <SectionContact />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('footer.club') + ' | ' + t('hero.badge'),
})
</script>
