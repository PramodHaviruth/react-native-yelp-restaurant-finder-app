import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={styles.subTitleStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  titleStyle: {
    fontWeight: "bold"
  },
  subTitleStyle: {
    fontWeight: "normal",
    fontSize: 13,
    color: "gray"
  },
  imageStyle: {
    width: 250,
    height: 125,
    borderRadius: 4,
    marginBottom: 5
  }
});
export default ResultsDetail;
