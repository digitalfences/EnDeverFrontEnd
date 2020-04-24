import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import MainUIButton from './MainUIButton/MainUIButton';

import NoIcon from '../img/X.png';


storiesOf('Buttons', module)
    .add('MainUIButton', () => <MainUIButton label="Unmatch" />)
    .add('MainUIButton', () => <MainUIButton label="Unmatch" icon={NoIcon} />)