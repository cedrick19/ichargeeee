export interface IndustriesCard {
  title: string;
  bgImage: string;
}
export interface IndustryCardType {
  card: IndustriesCard;
  isDesktop: boolean;
  className?: string;
  onClick: () => void;
}
export interface SectorHeading {
  hospitality: string;
  healthcare: string;
  transport: string;
  events: string;
  retail: string;
}
