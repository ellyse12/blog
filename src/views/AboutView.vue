<template>
  <div>
    <!-- Hakkımda Bölümü -->
    <div class="container mx-auto py-16 px-4">
      <div
        class="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto"
      >
        <div class="md:w-1/2 flex justify-center">
          <img
            src="@/assets/main-pic.jpg"
            alt="Profil Fotoğrafı"
            class="rounded-lg shadow-lg w-64 h-auto object-cover"
          />
        </div>

        <div class="md:w-1/2 text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-6">
            Merhaba, Ben İlker
          </h1>

          <div class="space-y-4 text-gray-700">
            <p class="text-lg leading-relaxed">
              Işık Üniversitesi Yazılım Mühendisliği bölümünde son sınıf
              öğrencisiyim. Bu blog'da yazılım mühendisliği kariyer
              yolculuğumdaki gelişmeleri paylaşacağım.
            </p>

            <p class="text-lg leading-relaxed">
              Sürekli kendimi geliştirmeye ve yeni teknolojiler öğrenmeye
              odaklanıyorum. Kullanıcı deneyimini ön planda tutarak, temiz ve
              sürdürülebilir kod yazmaya özen gösteriyorum.
            </p>

            <div class="pt-4">
              <h2 class="text-xl font-semibold mb-3">Yeteneklerim</h2>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Java</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Vue.js</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >JavaScript</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >HTML5</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >CSS3</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Tailwind CSS</span
                >
              </div>
            </div>

            <div class="pt-4">
              <h2 class="text-xl font-semibold mb-3">İletişim</h2>
              <div class="flex gap-4">
                <a
                  href="mailto:ilkercihandurmus@gmail.com"
                  class="text-green-600 hover:text-green-500 font-bold"
                >
                  Email
                </a>
                <a
                  href="https://github.com/ellyse12"
                  target="_blank"
                  class="text-green-600 hover:text-green-500 font-bold"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ilker-cihan-durmus-8a180b1b0/"
                  target="_blank"
                  class="text-green-600 hover:text-green-500 font-bold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center mb-8 md:pt-12 md:pb-20"
      id="scrollToExperience"
    >
      <div class="animate-bounce cursor-pointer" @click="scrollToExperience">
        <svg
          class="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>

    <ExperienceTimeline ref="experience" />
  </div>
</template>

<script>
import ExperienceTimeline from "@/components/ExperienceTimeline.vue";

export default {
  name: "AboutView",
  components: {
    ExperienceTimeline,
  },
  methods: {
    scrollToExperience() {
      this.$refs.experience.$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>

<style scoped></style>
