import { Link } from "react-router-dom";
import { Label } from "../ui/label";

interface LinksProps {
  label: string;
  path: string;
}

interface SectionItemProps {
  title: string;
  links: LinksProps[];
  onClick?: () => void;
}

export const SectionItem = (props: SectionItemProps) => {
  const { title, links, onClick } = props;
  return (
    <div className="flex flex-col gap-1 text-start">
      <Label className="mb-1 text-md md:text-xl font-semibold">{title}</Label>
      <ul className="grid grid-cols-1 space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path} onClick={onClick}>
              <Label className="font-light">{link.label}</Label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionItem;
