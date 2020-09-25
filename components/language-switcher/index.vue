<template>
  <Select
    :extra-options="{ menuPlacement: 'top' }"
    :translate="true"
    :value="currentLang"
    :options="options"
    :top-drop-down="true"
    @input="onChange"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Select from '@/components/select'
import config from '@/constants/config.js'

export default {
  components: {
    Select,
  },
  data() {
    return {
      currentLang: '',
    }
  },
  computed: {
    ...mapState('general', ['locale']),
    options() {
      return config.langs.map((language) => {
        return {
          label: this.$t(`footer.language.${language}`),
          value: language,
        }
      })
    },
  },
  created() {
    let lang = 'en'
    if (this.$route.params.lang) lang = this.$route.params.lang
    this.currentLang = {
      value: lang,
      label: this.$t(`footer.language.${lang}`),
    }
    this.SET_LANG(lang)
  },
  methods: {
    ...mapMutations('general', ['SET_LANG']),
    onChange(locale) {
      this.redirect(locale.value)
    },
    redirect(locale) {
      const currentLocale = this.locale
      this.SET_LANG(locale)
      const path = this.$route.path
      let target = ''
      if (currentLocale === 'en') {
        if (!path.includes('/en')) target = `/${locale}${path}`
        else
          target = path.replace(
            `/${currentLocale}`,
            locale === 'en' ? '' : `/${locale}`
          )
      } else {
        target = path.replace(
          `/${currentLocale}`,
          locale === 'en' ? '' : `/${locale}`
        )
      }
      if (target.length === 0) target = '/'
      window.location.href = target
    },
  },
}
</script>
