import "server-only";

import { GET_ALL_WORKS } from "@/sanity/queries/work";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 30 } };

export const getAllWorks = async (language: string) => {
  return await client.fetch<SanityDocument[]>(GET_ALL_WORKS, { language }, options);
};