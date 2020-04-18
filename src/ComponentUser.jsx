import React from 'react';
import DisplayUser from "./DisplayUser";
import ControlPanelUser from "./ControlPanelUser";


class ComponentUser extends React.Component {


    render = () => {

        return (
            <div className="counterBlock">
                <div className="box">
                    <DisplayUser state={this.props.state}
                                 adjustValueMin={this.props.adjustValueMin}
                                 adjustValueMax={this.props.adjustValueMax}
                    />

                    <ControlPanelUser state={this.props.state} incCounter={this.props.incCounter}
                                      switchMode={this.props.switchMode}
                                      resetToZero={this.props.resetToZero}/>
                </div>
            </div>
        );
    }
}

export default ComponentUser;