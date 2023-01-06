import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_600,
    flex: 1
  },
  inputContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: -25,
    flexDirection: 'row'
  },
  input: {
    backgroundColor: colors.gray_500,
    height: 54,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 4
  },
  addButton: {
    width: 52,
    height: 52,
    backgroundColor: colors.blue_dark,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterConatiner: {
    marginTop: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  counterText: {
    fontSize: 14,
    marginRight: 8
  },
  finished: {
    color: colors.purple,
  },
  created: {
    color: colors.blue
  },
  badge: {
    width: 25,
    height: 19,
    borderRadius: 12.5,
    backgroundColor: colors.gray_400,
    color: colors.gray_200,
    fontWeight: 'bold',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: colors.gray_200
  },
  todoContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24
  },
  vr: {
    backgroundColor: colors.gray_300,
    width: '100%',
    height: 1,
    opacity: 0.8
  },
  card: {
    height: 64,
    backgroundColor: colors.gray_500,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12
  },
  cardText: {
    color: colors.gray_100,
    fontSize: 14,
    textAlign: 'justify'
  },
  radioDisabled: {
    width: 17.45,
    height: 17.45,
    borderRadius: 8.725,
    flex: 1,
    borderColor: colors.blue
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48
  },
  emptyListText: {
    color: colors.gray_300,
    fontSize: 14
  }
});