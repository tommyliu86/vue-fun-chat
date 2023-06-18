<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
const { isMobile } = useBasicLayout()
function getStyle() {
		if(isMobile){
		    return "position:absolute;top:110%;text-align:center;bottom:0;margin:0 auto;width:100%;color: #5c6b77"
		}
		return "position:absolute;top:100%;text-align:center;bottom:0;margin:0 auto;width:100%;color: #5c6b77"
}

</script>

<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <RouterView />
		
    </NaiveProvider>
  </NConfigProvider>
</template>
