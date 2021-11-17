import React from "react";

export const Home = () => {
  const styles = getStyles();
  return (
    <div style={styles.container}>
      <h1>Home</h1>
      <button>Here</button>
    </div>
  );
};

const getStyles = () => ({
  container: {},
});
