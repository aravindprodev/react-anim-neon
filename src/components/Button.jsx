import { Component } from 'react';
import styled from 'styled-components';
import {Btncss} from '../utils/styled';

export default class Button extends Component{
   
    render(){
        const Butonn = styled.button`
        background: transparent;
        border: none;
        outline: none; `;
        const {onPress} = this.props;
        return(
            <div className = {this.props.classname}>
            <Butonn onClick={onPress}>
            <Btncss sbtn={this.props.sbtn} btn={this.props.btn}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {this.props.text}
            </Btncss>
            </Butonn>
            </div>
        )
    }
}
//SBtn = Secondary Color of Button
//btn = Primary Color of Button
//onPress = onClick Func()
//text = children of Buttom