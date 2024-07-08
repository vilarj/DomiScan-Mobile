import { Text } from "react-native";
import Styles from "../Styles/Styles";

const TotalScore = ({ score }) => (
  <Text style={Styles.player_total_score}>{score}</Text>
);

export default TotalScore;
