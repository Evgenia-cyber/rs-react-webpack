export const formattedDescription = (description) => `${description.slice(0, 100)}...`;

export const formattedDate = (date) => {
  const d = new Date(date).toUTCString();
  const f = d.split(' ');
  return `${f[0]} ${f[1]} ${f[2]} ${f[3]}`;
};

export const formattedResponse = (articles) =>
  articles.map(({ author, title, description, publishedAt, source, urlToImage, url, content }) => ({
    author,
    title,
    description: formattedDescription(description),
    publishedAt: formattedDate(publishedAt),
    source: source.name,
    urlToImage,
    url,
    content,
  }));
