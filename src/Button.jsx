import React from 'react';
import style from './Button.module.css'

class Button extends React.Component {

    render = () => {
        return (
            <span>
                <button
                    onClick={this.props.onClickFunc}
                    disabled={this.props.setDisabled}
                    className={`${style.buttonClass}`}>
                    {this.props.name}
                </button>
            </span>
        );
    }
}

export default Button;