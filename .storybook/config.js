import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withKnobs);
addDecorator(withInfo);

const req = require.context('../src/', true, /stories.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
