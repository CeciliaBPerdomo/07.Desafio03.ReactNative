import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/colors'

const Header = ({ title, sub }) => {
    return (
        <View style={styles.container}>
            <Image
                // Logo 
                source={{ uri: "https://i.ibb.co/zXNHTsp/Logo.png" }}
                style={styles.imagen}
                resizeMode="cover"
            />
            <Text style={styles.texto}>
                {title}
            </Text>

            <Text style={styles.subTitulo}>
                {sub}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 10,
    },

    texto: {
        fontSize: 24,
    },

    subTitulo: {
        fontSize: 16,
        color: colors.primary
    },

    imagen: {
        width: 100,
        height: 100,
    }
})