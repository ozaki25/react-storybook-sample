import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withScreenshot } from 'zisui';

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(withScreenshot({
  viewport: {
    width: 600,
    height: 400,
  },
 }));

const req = require.context('../src/', true, /stories.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
