import React from 'react';
import Button from "./Button";

class ControlPanelConfig extends React.Component {

    render = () => {

        let setDisabled = this.props.state.isDisabledSet;

        return (
            <div className="controlPanel">
                <Button name={'set'} setDisabled={setDisabled} onClickFunc={this.props.setSettings}/>
            </div>
        );
    }
}

export default ControlPanelConfig;