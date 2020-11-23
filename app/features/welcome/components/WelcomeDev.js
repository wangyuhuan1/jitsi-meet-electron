
import React, { Component } from 'react';
// import Spinner from '@atlaskit/spinner';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import i18n from '../../../i18n';
import config from '../../config';
import { getSetting, setEmail, setName } from '../../settings';
import JitsiMeetExternalAPI from '../external_api';
import { LoadingIndicator, Wrapper } from '../styled';


class Welcome extends Component<Props, State> {
    /**
     * Initializes a new {@code Welcome} instance.
     *
     * @inheritdoc
     */
    _api = null;
    constructor(props: Props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        this._loadConference();
    }
    _loadConference = () => {
        let host = 'meet.bjnsc.usingnet.com'
        const configOverwrite = {
            startWithAudioMuted: false,
            startWithVideoMuted: false
        };
        const options = {
            configOverwrite,
            parentNode: this._ref.current,
        };
        this._api = new JitsiMeetExternalAPI(host,{
            ...options
        });
        console.log(this._api,'11')
        //开始/停止屏幕共享。不需要参数。
        // this._api.executeCommand('toggleShareScreen');
        //通过数据通道将文本消息发送给另一个参与者。
        // this._api.executeCommand('sendEndpointTextMessage', 'receiverParticipantId', 'text');
    }
    render() {
        return (
            <Wrapper innerRef = { this._ref }>
            </Wrapper>
        );
    }
}

export default Welcome;
