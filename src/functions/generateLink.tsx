export const generateLink = (id: number, media_type: string) => {
  if (media_type === "movie") {
    return `/movies/${id}`;
  } else if (media_type === "tv") {
    return `/tv/${id}`;
  }

  return `/`;
};
