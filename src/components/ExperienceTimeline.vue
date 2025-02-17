<template>
  <div class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Deneyimlerim</h2>

    <div class="max-w-6xl mx-auto relative">
      <div class="overflow-x-auto" ref="timelineContainer">
        <div class="flex gap-8 relative px-4 min-w-max">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="w-80 flex-shrink-0"
            ref="experienceCards"
          >
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mb-8 h-[300px] flex flex-col justify-between"
            >
              <div>
                <div class="text-gray-600 text-sm mb-2">
                  {{ experience.company }}
                </div>
                <h3 class="text-lg font-bold mb-2">{{ experience.title }}</h3>
                <p class="text-gray-700 text-sm flex-grow">
                  {{ experience.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-4 justify-center">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="relative flex flex-col items-center">
              <div
                class="w-4 h-4 rounded-full bg-green-500 border-4 border-white relative z-10"
              ></div>
              <div class="text-sm text-green-700 font-semibold mt-2">
                {{ experience.date }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute left-1/2 transform -translate-x-1/2 bottom-8 h-0.5 bg-gray-200 w-full"
        ></div>
      </div>
    </div>

    <div class="bottom-4 left-0 right-0 z-50 pt-12 pb-4">
      <div class="flex justify-center gap-4">
        <button
          class="p-3 bg-emerald-400 rounded-full shadow-lg hover:bg-emerald-600 transition-all"
          @click="scroll('left')"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="p-3 bg-emerald-400 rounded-full shadow-lg hover:bg-emerald-600 transition-all"
          @click="scroll('right')"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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
          title: "Front-end Stajyeri",
          company: "T-Soft E-Ticaret Çözümleri",
          description:
            " T-Soft bünyesinde yaptığım stajım süresince Tailwindcss, Vue.js gibi teknolojiler hakkında bilgi edinip, bu teknolojilerle çeşitli projeler geliştirdim. Bu deneyim bana ekip çalışmasını, e-ticaret ve front-end geliştirme hakkında bilgi edindirdi.",
          technologies: ["Vue.js", "Tailwindcss", "Javascript"],
        },
        {
          date: "Ağustos 2023 - Eylül 2023",
          title: "Software Developer Stajyeri",
          company: "Şekerbank A.Ş",
          description:
            " Şekerbankʼtaki stajım sırasında güçlü bir iş etiği ve sorumluluk duygusu geliştirdim. React, Firebase ve Node.js kullanarak bir proje yönetim sistemi geliştirdim, bu da teknik becerilerimi gerçek dünya sorunlarına uygulayabilme yeteneğimi gösterdi.",
          technologies: ["React", "Firebase", "Node.JS"],
        },
        {
          date: "Temmuz 2023 - Haziran 2024",
          title: "Tanıtım Ekibi Üyesi",
          company: "Işık Üniversitesi Kurumsal İletişim Direktörlüğü",
          description:
            "Gelen öğrencilere yönelik okul tanıtımlarını gerçekleştirdim ve etkinlikler düzenledim. İletişim ve etkinlik yönetimi konularında becerilerimi gösterdim.",
        },
        {
          date: "Aralık 2022 - Eylül 2023",
          title: "Koordinatör",
          company: "Işık Üniversitesi Toplum Gönüllüleri Vakfı Kulübü",
          description:
            " Bir koordinatör olarak, sokak hayvanlarını besleme ve yetim çocuklar için bir yardım gecesi düzenleme gibi çeşitli etkinlikler organize ettim. Bu rol, liderlik ve organizasyon becerilerimi geliştirmemi sağladı",
        },
        {
          date: "Ocak 2020 - Mayıs 2021",
          title: "Rapor ve Denetim Sorumlusu",
          company: "Işık Üniversitesi Toplum Gönüllüleri Vakfı Kulübü",
          description:
            " Vakıfa yönelik ayrıntılı raporlar yazarak ve diğer departmanların düzgün çalışmasını sağlayarak kulübün operasyonlarını denetledim. Raporlama, denetim ve operasyonel gözetim konularında güçlü beceriler geliştirdim.",
        },
      ],
    };
  },
  methods: {
    scroll(direction) {
      const container = this.$refs.timelineContainer;
      const scrollAmount = 320;

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    scrollToExperience(index) {
      const container = this.$refs.timelineContainer;
      const experienceCard = this.$refs.experienceCards[index];
      if (experienceCard) {
        const cardPosition = experienceCard.offsetLeft;
        container.scrollTo({
          left: cardPosition,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
