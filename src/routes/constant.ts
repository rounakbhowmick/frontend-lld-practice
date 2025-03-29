import Accordian from "../components/accordian/Accordian";
import MultiLang from "../components/multi-lang/MultiLang";
import Otp from "../components/otp/Otp";
import ProgressBar from "../components/progress-bar/ProgressBar";
import Shimmer from "../components/shimmer/Shimmer";
import TabForm from "../components/tabs-form/TabForm";
import TicTacToe from "../components/tic-tac-toe/TicTacToe";
import ConfigDriven from "../config-driven/ConfigDriven";

export const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  "/multi-lang": MultiLang,
  "/config-driven": ConfigDriven,
  "/shimmer": Shimmer,
  "/tic-tac-toe": TicTacToe,
  "/accordian": Accordian,
  "/tabs-form": TabForm,
  "progress-bar": ProgressBar,
  otp: Otp,
};
