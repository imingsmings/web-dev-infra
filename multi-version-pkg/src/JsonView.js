import React from 'react';

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const json = {
  "string property": "my string",
  "": "empty name property",
  "number property": 42.42,
  "boolean property": true,
  "null property": null,
  "array propery": [
    1,
    2,
    3,
    4,
    5
  ],
  "nested object": {
    "first": true,
    "second": "another value",
    "sub nested": {
      "sub1": [
        true,
        true,
        true
      ],
      "longText": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra at dolor eu egestas. Mauris bibendum a sem vel euismod. Proin vitae imperdiet diam. In sed gravida nisi, in convallis felis. Fusce convallis dapibus molestie. In tristique dapibus velit et rutrum. Nam vestibulum sodales tortor. Integer gravida aliquet sollicitudin. Duis at nulla varius, congue risus sit amet, gravida ipsum. Cras placerat pellentesque ipsum, a consequat magna pretium et. Duis placerat dui nisi, eget varius dui egestas eget. Etiam leo mauris, mattis et aliquam hendrerit, dapibus eu massa. Phasellus vitae vestibulum elit. Nulla congue eleifend massa at efficitur. "
    }
  }
}

const App = () => {
  return (
    <React.Fragment>
      {/* <JsonView data={json} shouldExpandNode={allExpanded} style={defaultStyles} /> */}
      {/* <JsonView data={json} shouldExpandNode={allExpanded} style={darkStyles} /> */}
      <JsonView
        data={json}
        shouldExpandNode={allExpanded}
        style={defaultStyles} 
      />
    </React.Fragment>
  );
};

export default App;