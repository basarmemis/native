import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { Button, ButtonGroup } from '@rneui/base';

export default function TopBar() {
    const handleClick = () => {
        console.log("basar");
    }
    return (
        <View style={{ height: 50, backgroundColor: 'transparent', flexDirection: 'row' }}>
            <View style={{
                flex: 1, height: 50,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button
                    onPress={handleClick}
                    buttonStyle={{ backgroundColor: 'transparent' }}
                    containerStyle={{
                        borderRadius: 25,
                    }}
                    icon={<FontAwesomeIcon icon={faArrowLeft} size={25} color='black' />}
                    iconRight
                />

            </View>
            <View style={{ flex: 3, height: 50, backgroundColor: 'transparent' }}></View>
            <View style={{
                flex: 1, height: 50,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button
                    onPress={handleClick}
                    buttonStyle={{ backgroundColor: 'transparent' }}
                    containerStyle={{                        
                        borderRadius: 25,
                    }}
                    icon={<FontAwesomeIcon icon={faArrowRight} size={25} color='black' />}
                    iconRight                    
                />

            </View>
        </View>
    )
}
