import "server-only";

import { Locale } from "@/i18n/routing";
import { env } from "@/config/env";
import strapi from "@/lib/strapi";
import qs from "qs";


export const getHomeInfo = async (currentLocale: Locale = "en") => {

  const query = qs.stringify({
    locale: currentLocale,
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      }
    }
  });

  const { data: { about, image } } = await strapi("home", query);

  const imageResponse = {
    src: new URL(image.url, env.STRAPI_HOST).toString(),
    alt: image.alternativeText || "Image not found",
  };


  return { about, image: imageResponse };
}