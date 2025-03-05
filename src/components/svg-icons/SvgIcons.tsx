import { IconName } from "./utils";

interface SvgIconProps {
  name: IconName;
  size?: number;
}

export const SvgIcons = (props: SvgIconProps) => {
  const { name, size = 50, ...rest } = props;

  return (
    <svg {...rest} aria-hidden="true" style={{ height: size, width: size }}>
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default SvgIcons;
