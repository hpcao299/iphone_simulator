import { View, Image, Text } from 'react-native';
import { Link } from '@react-navigation/native';

const AppLogo = ({ imgUrl, title, to }) => {
    return (
        <Link to={{ screen: to }} style={{ marginHorizontal: 10 }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                }}
            >
                <Image
                    source={imgUrl}
                    style={{
                        borderRadius: '16px',
                        width: 65,
                        height: 65,
                        marginHorizontal: 'auto',
                    }}
                />
                <Text
                    style={{ fontSize: '18px', marginTop: 10, color: 'white', fontWeight: '600' }}
                >
                    {title}
                </Text>
            </View>
        </Link>
    );
};

export default AppLogo;
