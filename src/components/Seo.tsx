import { useEffect } from "react";
import { META } from "../constants";

type SeoProps = {
  description?: string;
  title?: string;
};

export default function Seo({
  description = META.description,
  title = META.title,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.append(metaDescription);
    }

    metaDescription.content = description;
  }, [description, title]);

  return null;
}
