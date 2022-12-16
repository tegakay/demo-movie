import React from "react";
import { Box } from "@chakra-ui/react";

export default function List(props) {
  const {  name } = props;

  return (
    <div className="square--box">
      <li className="movie--card">
        <Box className="box" w="100%" h="100%" p={4} color="white">
          {name}
        </Box>
      </li>
    </div>
  );
}
