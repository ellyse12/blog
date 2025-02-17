<template>
  <div class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Deneyimlerim</h2>

    <div class="max-w-3xl mx-auto">
      <div class="relative">
        <div
          class="absolute h-full md:left-1/2 left-4 md:-translate-x-1/2 w-0.5 bg-gray-200"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="relative"
          >
            <div
              class="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-y-4"
            >
              <div
                class="w-4 h-4 rounded-full bg-blue-500 border-4 border-white"
              ></div>
            </div>

            <div
              :class="[
                'md:w-5/12',
                'w-full',
                'pl-12 md:pl-0',
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8',
              ]"
            >
              <div
                class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <div class="flex flex-wrap gap-2 items-center mb-2">
                  <div class="text-sm text-blue-600 font-semibold">
                    {{ experience.date }}
                  </div>
                  <div class="text-gray-600">{{ experience.company }}</div>
                </div>

                <h3 class="text-xl font-bold mb-2">{{ experience.title }}</h3>
                <p class="text-gray-700 mb-4">{{ experience.description }}</p>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="px-2 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceTimeline",
  data() {
    return {
      experiences: [
        {
          date: "Ocak 2025 - Günümüz",
          title: "Intern Frontend Developer",
          company: "T-Soft E-Ticaret Çözümleri",
          description:
            "Modern web tasarımları geliştirme, ekip çalışması ve responsive tasarımlar üzerine deneyim edindim.",
          technologies: ["Vue.js", "Tailwindcss", "Javascript"],
        },
        {
          date: "Ağustos 2023 - Eylül 2023",
          title: "Intern Software Developer",
          company: "Şekerbank A.Ş",
          description:
            "Bireysel Krediler Yazılım Geliştirme Biriminde agile çalışma metodları, arayüz geliştirme ve ödeme sistemleri hakkında bilgi edindim.",
          technologies: ["React", "Javascript", "Java"],
        },
        {
          date: "Eylül 2019 - Haziran 2025",
          title: "Yazılım Mühendisliği Öğrencisi",
          company: "FMV Işık Üniversitesi",
          description:
            "Java üzerinden Nesne Yönelimli Programlama, Veri Yapıları ve Veri Yönetimi, Yazılım Mimarileri üzerine eğitim aldım",
          technologies: ["Java", "MySQL", "C#"],
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .relative::before {
    content: "";
    @apply absolute left-4 top-0 h-full w-0.5 bg-gray-200;
  }
}
</style>
