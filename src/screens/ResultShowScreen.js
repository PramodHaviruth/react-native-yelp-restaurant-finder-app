import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={styles.subTitleStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flex: 1
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 30
  },
  subTitleStyle: {
    fontWeight: "normal",
    fontSize: 13,
    color: "gray"
  },
  imageStyle: {
    width: 300,
    height: 175,
    borderRadius: 5,
    margin: 30
  }
});
export default ResultsShowScreen;
