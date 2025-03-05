export interface ProductDetails {
  name: string;
  image: string;
  description: string;
  seatCapacity?: string;
}

interface ProdSize {
  h: string;
  l: string;
  w: string;
}

interface ProdWatts {
  standBy: string;
  fullLoad: string;
}

interface ProdContents {
  code: string;
  slots: string;
  powerbanks: string;
}

export interface ProductDescriptions {
  wattage: ProdWatts;
  dimensions: ProdSize;
  content: ProdContents;
}

export interface Product {
  productDetails: ProductDetails;
  productDescriptions: ProductDescriptions;
}

export interface ProdModal {
  item: Product;
  open: boolean;
  handleOpenChange: () => void;
}
