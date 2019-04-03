import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from '.';

const stories = storiesOf('components/Text', module);

stories.add('テキスト', () => <Text>{text('children', 'sample text')}</Text>);
