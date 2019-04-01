import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot';

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(initScreenshot());
addDecorator(withScreenshot());

const req = require.context('../src/', true, /stories.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
