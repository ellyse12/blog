<template>
  <section :class="{ 'bg-slate-600': darkMode }">
    <div class="container mx-auto py-12 px-4 max-w-4xl">
      <h1
        class="text-4xl font-bold mb-12 text-center"
        :class="{ 'text-white': darkMode }"
      >
        Projelerim
      </h1>

      <div class="space-y-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex flex-col md:flex-row dark:bg-slate-300">
            <div class="md:w-2/5 border">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div class="md:w-3/5 p-6">
              <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-4 justify-center">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-4 justify-center">
                <a
                  v-if="project.demoLink"
                  :href="project.demoLink"
                  target="_blank"
                  class="text-emerald-600 hover:text-emerald-800 font-semibold"
                >
                  Demo →
                </a>
                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  class="text-gray-600 hover:text-gray-800 font-medium"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsView",
  props: { darkMode: Boolean },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Blog Projesi",
          description:
            "Vue.js ve Tailwind CSS kullanarak geliştirdiğim kişisel blog projesi. Modern ve responsive tasarımı ile kullanıcı dostu bir arayüz sunuyor.",
          image: "blog-pic2.png",
          technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
          demoLink: "https://ilkercihandurmus.onrender.com/",
          githubLink: "https://github.com/ellyse12/blog",
        },
        {
          id: 2,
          title: "Yapılacaklar Listesi Web Uygulaması",
          description: "Vue.js kullanarak geliştirdiğim to-do web uygulaması.",
          image: "to-do-pic.png",
          technologies: ["Vue.js", "HTML", "Tailwindcss"],
          demoLink: "https://to-do-app-4dso.onrender.com",
          githubLink: "https://github.com/ellyse12/to-do-app",
        },
        {
          id: 3,
          title: "E-Ticaret Klon Sayfası",
          description:
            "HTML, JavaScript ve Tailwindcss kullanarak, T-Soft örnek sayfasının klonunu kodladım.",
          image: "klon-pic.png",
          technologies: ["HTML", "JavaScript", "Tailwindcss"],
          demoLink: "https://tsoft-internship.onrender.com",
          githubLink: "https://github.com/ellyse12/tsoft_internship",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
