export default {
  name: "experience",
  title: "Experience",
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
      title: "Experience Screenshot",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: 'string'}]
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    }
  ]
};
