import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_PROFILES } from "../../constants";

const GoogleScholarIcon = () => <i className="ai ai-google-scholar-square" />;

const ICON_MAPPING = {
  default: FaCircle,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  "Google Scholar": GoogleScholarIcon,
} as const;

export const SocialIcons = () => (
  <aside aria-label="More links" className="social-rail">
    <ul>
      {Object.entries(SOCIAL_PROFILES).map(([platform, url]) => {
        const IconComponent =
          ICON_MAPPING[platform as keyof typeof ICON_MAPPING] ?? ICON_MAPPING.default;

        return (
          <li key={platform}>
            <a aria-label={platform} href={url} rel="noopener noreferrer" target="_blank">
              <IconComponent />
            </a>
          </li>
        );
      })}
    </ul>
    <p>More Links</p>
  </aside>
);
