import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../src/', true, /stories.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
