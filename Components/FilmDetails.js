import React from 'react';
import { StyleSheet, Text, Image, ScrollView, Button, Linking } from 'react-native';
import { getImageFromApi, getLinkFromApi } from '../API/TMDBApi';

class FilmDetails extends React.Component {
    handleTrailerPress = async () => {
        try {
            const trailerLink = await getLinkFromApi(this.props.route.params.film.id);
            Linking.openURL(trailerLink);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const film = this.props.route.params.film;

        return (
            <ScrollView style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{ uri: getImageFromApi(film.backdrop_path) }}
                />
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.description_text}>{film.overview}</Text>
                <Text style={styles.date_text}>Sorti le: {film.release_date}</Text>
                <Text style={styles.vote_text}>Rating: {film.vote_average}</Text>
                <Button title="Trailer" onPress={this.handleTrailerPress} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 0,
        padding: 25,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    title_text: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
    },
    description_text: {
        fontStyle: 'normal',
        fontSize: 18,
        marginBottom: 16,
    },
    date_text: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'right',
    },
    vote_text: {
        fontSize: 15,
        textAlign: 'right',
    },
});

export default FilmDetails;
