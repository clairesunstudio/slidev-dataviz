---
theme: apple-basic
fonts:
  sans: 'Noto Sans'
  serif: 'Roboto Slab'
  mono: 'Noto Mono'
---

---
src: ./week2.md
---

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>