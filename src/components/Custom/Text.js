import React from 'react';
import { Text as TextRN } from 'react-native';

const Text = props => (
  <TextRN style={[
    props.style,
    {
      fontWeight: props.bold ? "700" : "400",
      color: props.color ? props.color : "#333"
    }
  ]}>{props.children}</TextRN>
)

export default Text;