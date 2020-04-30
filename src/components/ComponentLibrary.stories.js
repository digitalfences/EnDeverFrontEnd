import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import MainUIButton from './MainUIButton/MainUIButton';
import MessageMini from './MessageMini/MessageMini';
import MatchMini from './MatchMini/MatchMini';
import DevCard from './DevCard/DevCard';
import Messenger from './Messenger/Messenger';
import DevProfileTextInput from './DevProfileTextInput/DevProfileTextInput';
import SingleMessage from './SingleMessage/SingleMessage';

import NoIcon from '../img/X.png';


storiesOf('Buttons', module)
    .add('MainUIButton', () => <MainUIButton label="Unmatch" />)
    .add('MainUIButton', () => <MainUIButton label="Unmatch" icon={NoIcon} />)

storiesOf('MessageMini', module)

storiesOf('DevProfileTextInput', module)

storiesOf('Messenger', module)

storiesOf('MatchMini', module)

storiesOf('DevCard', module)

storiesOf('SingleMessage',module)

