<script setup lang="ts">
import { onMounted } from "vue";
import confetti from "canvas-confetti";

onMounted(() =>
  /* 纸屑 */
  confetti({
    particleCount: 20,
    spread: 100,
    origin: { y: 0.6 },
  })
);
</script>
