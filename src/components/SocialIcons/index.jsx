import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaCircle
} from "react-icons/fa";
import { SOCIAL_PROFILES } from "../../constants";

const GoogleScholarIcon = () => (
  <i className="ai ai-google-scholar-square"></i>
);

const ICON_MAPPING = {
  default: FaCircle,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  "Google Scholar": GoogleScholarIcon
};

export const SocialIcons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(SOCIAL_PROFILES).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>More Links</p>
    </div>
  );
};
