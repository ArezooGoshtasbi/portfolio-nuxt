<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="footer__top">
            <div class="footer__links"></div>
            <div class="footer__links__right">
              <LanguageSwitcher />
            </div>
          </div>
          <div class="footer__bottom">
            <span class="footer__copyright">
              <span>{{
                $t('footer.copyright') + ' ' + new Date().getFullYear()
              }}</span>
            </span>
            <div class="footer__socials">
              <a :href="SOCIAL_LINKS.LINKEDIN" target="_blank">
                <i class="icon-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/language-switcher'
import SOCIAL_LINKS from '@/constants/social-links.js'

export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      SOCIAL_LINKS,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
