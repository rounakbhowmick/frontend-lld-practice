import MultiLang from "../components/multi-lang/MultiLang";
import ConfigDriven from "../config-driven/ConfigDriven";

export const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  "/multi-lang": MultiLang,
  "/config-driven": ConfigDriven,
};
