import React from 'react';
import Display from "./Display";
import ControlPanel from "./ControlPanel";

class ComponentBox extends React.Component {

    render = () => {

        return (
            <div className="box">
                <Display state={this.props.state}
                         adjustValueMin={this.props.adjustValueMin}
                         adjustValueMax={this.props.adjustValueMax}
                />

                <ControlPanel state={this.props.state} incCounter={this.props.incCounter}
                              switchMode={this.props.switchMode}
                              resetToZero={this.props.resetToZero}/>
            </div>
        );
    }
}

export default ComponentBox;