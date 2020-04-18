import React from 'react';
import DisplayConfig from "./DisplayConfig";
import ControlPanelConfig from "./ControlPanelConfig";


class ComponentConfig extends React.Component {


    render = () => {

        return (
            <div className="configBlock">
                <div className="box">
                    <DisplayConfig state={this.props.state} adjustValueMin={this.props.adjustValueMin}
                                   adjustValueMax={this.props.adjustValueMax}/>
                    <ControlPanelConfig setSettings={this.props.setSettings} state={this.props.state}/>
                </div>
            </div>
        );
    }
}

export default ComponentConfig;