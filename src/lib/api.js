import { useSanityClient, groq } from "astro-sanity";


export async function getFirstPost() {
  const query = groq`*[_type == "post"]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}