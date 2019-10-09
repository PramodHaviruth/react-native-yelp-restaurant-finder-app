import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = props => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={props.term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newTerm => props.onTermChange(newTerm)}
        onEndEditing={() => props.onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row"
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    padding: 5
  },
  inputStyle: {
    borderColor: "black",
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
