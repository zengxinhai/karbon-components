<template>
  <span class="countdown" v-if="durationSeconds">
    {{ seconds }}
  </span>
</template>

<script>
function getTimeRemaining(deadline) {
  const t = Date.parse(deadline) - Date.parse(new Date())
  return Math.floor(t / 1000)
}
export default {
  props: {
    durationSeconds: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      seconds: '',
    }
  },
  created() {
    const duration = this.durationSeconds * 1000
    const deadline = new Date(Date.parse(new Date()) + duration)
    this.initClock(deadline)
  },
  methods: {
    initClock(deadline) {
      const vue = this
      function updateClock() {
        const remain = getTimeRemaining(deadline)
        vue.seconds = remain
        if (remain <= 0) {
          clearInterval(timerId)
          vue.$emit('countdownFinish')
        }
      }
      updateClock()
      var timerId = setInterval(updateClock, 1000)
    }
  }
}
</script>
