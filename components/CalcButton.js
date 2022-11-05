import { TouchableOpacity, Text } from 'react-native';

const CalcButton = ({ bgColor, color, title, style, operation }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: bgColor,
                borderRadius: '50%',
                width: 85,
                height: 85,
                alignContent: 'center',
                justifyContent: 'center',
                marginBottom: 12,
                ...style,
            }}
        >
            <Text
                style={{ color: color, fontSize: operation ? '45px' : '35px', textAlign: 'center' }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CalcButton;
