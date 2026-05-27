import type { ReactNode } from "react";

export const capitalizeFirstLetterOfWords = (value: string) =>
  value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const changeStringSeparator = (
  value: string,
  oldSeparator: string,
  newSeparator: string,
) => value.split(oldSeparator).join(newSeparator);

export const interleaveArrays = <T,>(first: T[], second: T[]) => {
  const result: T[] = [];
  const maxLength = Math.max(first.length, second.length);

  for (let index = 0; index < maxLength; index += 1) {
    if (first[index]) result.push(first[index]);
    if (second[index]) result.push(second[index]);
  }

  return result;
};

export const getVideoComponent = (video: string) => (
  <div className="media-frame">
    <video className="responsive-media" controls>
      <source src={video} type="video/mp4" />
    </video>
  </div>
);

export const getImageComponent = (image: string) => (
  <div className="media-frame">
    <img className="responsive-media" src={image} alt="" />
  </div>
);

export const getTextComponent = (text: string): ReactNode => (
  <p className="project-copy">{text}</p>
);
