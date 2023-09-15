<script setup lang="ts">
import { onMounted } from "vue"
import { listUser } from "@/api/user";
import TheWelcome from '@/components/TheWelcome.vue'

onMounted(async() => {
  const res = await listUser()
  console.log(res);
  console.log(import.meta);
  
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <van-button type="primary">主要按钮</van-button>
  <svg-icon name="support"></svg-icon>
</template>
