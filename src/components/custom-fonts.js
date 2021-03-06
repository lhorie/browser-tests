import React, {Component} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {withFontLoading as FontHOC} from 'fusion-plugin-font-loader-react';

// FIXME: as of React 16, <div> props are written to html (e.g. fontstyles)
const FancyLink1 = FontHOC('Lato-Bold')(
  styled('a', props => ({
    ':hover': {fontSize: `${props.answer}px`},
    ...props.fontStyles,
  }))
);
const FancyLink2 = FontHOC('Lato-Italic')(
  styled('div', props => ({...props.fontStyles}))
);

const FontedContainer = FontHOC('Lato-Regular')(
  styled('div', props => ({
    background: 'lightgreen',
    border: '5px solid pink',
    ...props.fontStyles,
  }))
);

export default class CustomFonts extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <FontedContainer>
        Styled!
        <FancyLink1 href="#" answer={42}>
          Here is Bold
        </FancyLink1>
        <FancyLink2>Here is thin</FancyLink2>
      </FontedContainer>
    );
  }
}
