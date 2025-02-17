<template>
  <div class="container mx-auto py-12 px-4 max-w-4xl">
    <h1 class="text-4xl font-bold mb-12 text-center">Projelerim</h1>

    <div class="space-y-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex flex-col md:flex-row">
          <div class="md:w-2/5">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div class="md:w-3/5 p-6">
            <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-4">
              <a
                v-if="project.demoLink"
                :href="project.demoLink"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 font-medium"
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
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Blog Projesi",
          description:
            "Vue.js ve Tailwind CSS kullanarak geliştirdiğim kişisel blog projesi. Modern ve responsive tasarımı ile kullanıcı dostu bir arayüz sunuyor. İçerik yönetimi için özel bir CMS sistemi entegre edildi.",
          image: "https://picsum.photos/seed/1/800/600",
          technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
          demoLink: "https://demo-link.com",
          githubLink: "https://github.com/username/project",
        },
        {
          id: 2,
          title: "E-Ticaret Uygulaması",
          description:
            "MERN stack kullanarak geliştirdiğim tam kapsamlı e-ticaret uygulaması. Ürün yönetimi, sepet işlemleri, ödeme sistemi ve admin paneli gibi temel e-ticaret özellikleri içeriyor.",
          image: "https://picsum.photos/seed/2/800/600",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          demoLink: "https://demo-link.com",
          githubLink: "https://github.com/username/project",
        },
        {
          id: 3,
          title: "Task Yönetim Uygulaması",
          description:
            "Vue.js ve Firebase kullanarak geliştirdiğim task yönetim uygulaması. Gerçek zamanlı güncelleme, drag-and-drop özelliği ve kullanıcı yetkilendirme sistemi bulunuyor.",
          image: "https://picsum.photos/seed/3/800/600",
          technologies: ["Vue.js", "Firebase", "Vuex"],
          demoLink: "https://demo-link.com",
          githubLink: "https://github.com/username/project",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
