import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
}
    from 'react-native';

const propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    opacity: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number
};

const defaultProps = {
    opacity: .3,
    color: 'red',
    size: 5,
    position: 'absolute',
};

class Dot extends React.Component {
    render() {
        const { opacity, size, color, left, bottom, position } = this.props
        return (
            <View
                style={
                    {
                        opacity: opacity,
                        width: size,
                        height: size,
                        backgroundColor: color,
                        bottom: bottom && bottom - Math.round(size / 2),
                        left: left && left - Math.round(size / 2),
                        position: position,
                        borderRadius: size,
                        margin: 0
                    }
                }
            />

        );
    }
}

Dot.propTypes = propTypes; Dot.defaultProps = defaultProps;
export default Dot;