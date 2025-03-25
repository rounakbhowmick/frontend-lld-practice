import Accordian from "../components/accordian/Accordian";
import MultiLang from "../components/multi-lang/MultiLang";
import Shimmer from "../components/shimmer/Shimmer";
import TicTacToe from "../components/tic-tac-toe/TicTacToe";
import ConfigDriven from "../config-driven/ConfigDriven";

export const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  "/multi-lang": MultiLang,
  "/config-driven": ConfigDriven,
  "/shimmer": Shimmer,
  "/tic-tac-toe": TicTacToe,
  "/accordian": Accordian,
};
