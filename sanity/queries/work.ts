import groq from "groq";

export const GET_ALL_WORKS = groq`*[_type == "work" && language == $language] {
    _id,
  title,
  mainImage,
  url,
  description,
  language
}`;

