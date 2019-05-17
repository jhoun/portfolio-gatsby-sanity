export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Project Screenshot",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "text"
    },
    {
      name: "liveDemoUrl",
      title: "Live Demo URL",
      type: "text"
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    }
  ]
};
