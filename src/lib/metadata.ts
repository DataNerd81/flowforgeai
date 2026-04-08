import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface CreateMetadataOptions {
  title?: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.png",
}: CreateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      images: [ogImage],
    },
  };
}
