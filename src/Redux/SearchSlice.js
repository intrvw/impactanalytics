import { createSlice } from "@reduxjs/toolkit"

const SearchSlice=createSlice({
    name:'CandiateSearch',
    initialState:{
        searchText:null,
        searchResults:[],
        sortBy:'asc',
        selectedCandidate:null,
    },
    reducers:{
        searchResult(state,action){
            state.searchResults=action.payload
        },
        updateSearchText(state,action){
            state.searchText=action.payload
        },
        udpateFilterBy(state,action){
            state.sortBy=action.payload
        },
        updateSelectedCandidate(state,action){
            state.selectedCandidate=action.payload
        }
    }
    
})

export const { searchResult, updateSearchText, udpateFilterBy, updateSelectedCandidate} = SearchSlice.actions;
export default SearchSlice.reducer