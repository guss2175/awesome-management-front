<template>
  <TimeSheet />
</template>

<script lang="ts" setup>
let days = Array.from(Array(31).keys()).map(x => x + 1);
let WEEK_LENGTH = 7;
let weeks_in_month = [];

for (let i = 0; i < days.length; i += WEEK_LENGTH) {
  weeks_in_month.push(
    days.slice(i, i + WEEK_LENGTH)
  );
}
console.log(weeks_in_month);
</script>