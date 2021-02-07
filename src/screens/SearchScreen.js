import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    
    return(
        // You can also just use <></> instead of <View></View>. This removes a containing element and you will just render each element on the screen. This removes the need for flex.
        <View style={{flex: 1}}>
            <SearchBar 
                term={term} 
                // shorthand for referencing functions could also be onTermChange={(newTerm) => setTerm(newTerm)}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
           
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View> 
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;