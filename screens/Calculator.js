import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import CalcButton from '../components/CalcButton';

const Calculator = () => {
    return (
        <View style={{ backgroundColor: '#000', height: '100%', flex: 1 }}>
            <SafeAreaView
                style={{
                    marginHorizontal: 20,
                    height: '100%',
                    justifyContent: 'flex-end',
                }}
            >
                <Text style={{ color: '#fff', fontSize: '90px', textAlign: 'right' }}>0</Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}
                >
                    <CalcButton title="AC" color="#181818" bgColor="#b5b5b5" />
                    <CalcButton title="+/_" color="#181818" bgColor="#b5b5b5" />
                    <CalcButton title="%" color="#181818" bgColor="#b5b5b5" />
                    <CalcButton title="÷" color="#fff" bgColor="#FE9C11" operation />
                    <CalcButton title="7" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="8" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="9" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="x" color="#fff" bgColor="#FE9C11" operation />
                    <CalcButton title="4" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="5" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="6" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="-" color="#fff" bgColor="#FE9C11" operation />
                    <CalcButton title="1" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="2" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="3" color="#DADADA" bgColor="#414141" />
                    <CalcButton title="+" color="#fff" bgColor="#FE9C11" operation />
                    <View
                        style={{
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#414141',
                                flexGrow: 1,
                                borderRadius: '50%',
                                height: 85,
                                display: 'flex',
                                justifyContent: 'center',
                                marginRight: 12,
                            }}
                        >
                            <Text style={{ color: '#DADADA', marginLeft: 20, fontSize: '35px' }}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <CalcButton
                            title=","
                            color="#DADADA"
                            bgColor="#414141"
                            style={{ marginRight: 12 }}
                        />
                        <CalcButton title="=" color="#fff" bgColor="#FE9C11" operation />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Calculator;
