import type { MetadataRoute } from "next";
import { PREFERRED_CITATION } from "@/lib/geo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karol Digital",
    short_name: "Karol Digital",
    description: PREFERRED_CITATION,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#102f35",
    lang: "en-GB",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "280x158",
        type: "image/png",
      },
    ],
  };
}
