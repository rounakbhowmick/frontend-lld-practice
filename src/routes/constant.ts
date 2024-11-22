import MultiLang from "../components/multi-lang/MultiLang";
import Shimmer from "../components/shimmer/Shimmer";
import ConfigDriven from "../config-driven/ConfigDriven";

export const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  "/multi-lang": MultiLang,
  "/config-driven": ConfigDriven,
  "/shimmer": Shimmer,
};
