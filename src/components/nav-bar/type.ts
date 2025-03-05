import { RouteObject } from "react-router-dom";

export interface SubChild extends Omit<RouteObject, "children"> {
  label: string;
  icon: string;
  sublabel: string;
}

export interface LinkList extends Omit<RouteObject, "children"> {
  label: string;
  icon?: React.ElementType;
  subChild?: SubChild[];
}
