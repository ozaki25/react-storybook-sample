import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';

const stories = storiesOf('components/Button', module);

stories.add('ボタン', () => (
  <Button onClick={action('click')}>{text('children', 'ボタン')}</Button>
));
