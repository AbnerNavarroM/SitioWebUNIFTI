import React from 'react';
import UniLogoImg from './UniLogoImg';

export default function UniLogo(props) {
    return (
        <div >
            <UniLogoImg height={props.height}
            viewBox = {props.viewBox}
            />
        </div>
    )
}
