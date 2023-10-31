<template>
  <div class="bg-gray-200">
    <div class="container mx-auto mt-10">
      <div class="wrapper bg-white rounded shadow w-full ">
        <div class="header flex justify-between border-b p-2">
          <span class="text-lg font-bold">
            2023 October
          </span>
          <div class="buttons">

          </div>
        </div>

        <!-- TIMESHEET CONTENT -->
        <table class="w-full">
          <thead>
            <tr>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Sunday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Monday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Thursday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Friday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
              </th>
              <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                <span class="xl:block lg:block md:block sm:block hidden">Saturday</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="week in weeks_in_month" class="text-center h-20">
              <td v-for="day in week"
                class="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                <div class="flex flex-col h-20 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">{{ day }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WEEK_LENGTH } from '~/constants'

let days = Array.from(Array(31).keys()).map(x => x + 1);

type ArrayOfArrays<T> = T[][];
let weeks_in_month: ArrayOfArrays<number> = [];

for (let i = 0; i < days.length; i += WEEK_LENGTH) {
  weeks_in_month.push(
    days.slice(i, i + WEEK_LENGTH)
  );
}
console.log(weeks_in_month);
</script>

<style scoped></style>

