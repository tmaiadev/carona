import React from 'react';
import PropTypes from 'prop-types';

const ICONS = {
    car: "M403.208 117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875 0-25.604 8.531-29.875 21.333L64 234.667v160C64 406.396 73.604 416 85.333 416h21.334c11.729 0 21.333-9.604 21.333-21.333V384h256v10.667c0 11.729 9.604 21.333 21.333 21.333h21.334c11.729 0 21.333-9.604 21.333-21.333v-160l-44.792-117.334zM138.667 320c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zm234.666 0c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zM106.667 213.333l32-85.333h234.666l32 85.333H106.667z",
    search: "M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"   
}

const Icon = props => {
    return <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={props.className}
                fill={props.fill}>
        <path d={ICONS[props.type]} />
    </svg>
}

Icon.propTypes = {
    type: PropTypes.oneOf(Object.keys(ICONS)),
    className: PropTypes.string,
    fill: PropTypes.string
}

export default Icon;