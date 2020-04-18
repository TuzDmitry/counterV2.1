import React from 'react';

class ComponentInstaller extends React.Component {


    render = () => {


        return (
            <div className="containerValue">
                <div>{this.props.nameInstaller}</div>
                <input type="number"
                       value={this.props.value}
                       onChange={this.props.onChangeFunc}
                       className={this.props.classRed}/>
            </div>
        );
    }
}

export default ComponentInstaller;