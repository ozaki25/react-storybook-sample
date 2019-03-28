import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
