import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderComponent, MainComponent } from '../components/NoteComponent';
import realm from '../../store/realm';

const EditNoteScreen = (props) => {
    const { route, navigation } = props;
    const id = route.params.id;
    const [dataToUpdate, setDataToUpdate] = useState([]);

    useEffect(() => {
        console.log('edit screen');
        console.log(dataToUpdate);
    }, [dataToUpdate]);

    useEffect(() => {
        const data = realm.objects('Note').filtered(`id = ${id}`);
        setDataToUpdate(data);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <HeaderComponent
                title="Edit"
            />
            <MainComponent
                date="Date"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default EditNoteScreen