import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { initScreenshot } from 'storybook-chrome-screenshot';

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(initScreenshot());
addDecorator(
  withScreenshot({
    viewport: [
      {
        width: 320,
        height: 480,
        isMobile: true,
        hasTouch: true,
      },
      {
        width: 414,
        height: 736,
        isMobile: true,
        hasTouch: true,
      },
    ],
  }),
);

const req = require.context('../src/', true, /stories.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
