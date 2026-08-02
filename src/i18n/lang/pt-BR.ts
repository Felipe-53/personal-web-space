import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Início",
    posts: "Posts",
    tags: "Tags",
    about: "Sobre",
    archives: "Arquivos",
    search: "Pesquisar",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado",
    sharePostIntro: "Compartilhe esta postagem:",
    sharePostOn: "Compartilhe esta postagem no {{platform}}",
    sharePostViaEmail: "Compartilhe esta postagem por e-mail",
    tagLabel: "Tags",
    backToTop: "Voltar ao topo",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Postagem anterior",
    nextPost: "Próxima postagem",
  },
  pagination: {
    prev: "Anterior",
    next: "Próximo",
    page: "Página",
  },
  home: {
    socialLinks: "Links sociais",
    featured: "Destaques",
    recentPosts: "Posts recentes",
    allPosts: "Todos os posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos os artigos com a tag",

    tagsTitle: "Tags",
    tagsDesc: "Todas as tags usadas nos posts.",

    postsTitle: "Posts",
    postsDesc: "Todos os artigos que eu postei.",

    archivesTitle: "Arquivos",
    archivesDesc: "Todos os artigos que eu arquivei.",

    searchTitle: "Pesquisar",
    searchDesc: "Pesquise qualquer artigo...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    toggleTheme: "Alternar tema",
    searchPlaceholder: "Pesquisar posts...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a próxima página",
  },
  notFound: {
    title: "404 Não encontrado",
    message: "Página não encontrada",
    goHome: "Voltar para a página inicial",
  },
} satisfies UIStrings;
