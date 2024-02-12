import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

import { PostcodeContext } from "../context/PostcodeContext";


function PostcodeProvider({children}) {
    const [crimeData, setCrimeData] = useState()

    const locateNeighbourhood = useMutation({
        mutationFn: (postcodeData) =>
            axios.get(`https://data.police.uk/api/locate-neighbourhood?q=${postcodeData.lat},${postcodeData.lng}`),
            onSuccess: ({data}) => {
            neighbourhoodData.mutate(data)
        },
    })

    const neighbourhoodData = useMutation({
        mutationFn: (neighbourhoodInfo) =>
            axios.get(`https://data.police.uk/api/${neighbourhoodInfo.force}/${neighbourhoodInfo.neighbourhood}`),
            onSuccess: ({data}) => {
            setCrimeData(data);
        },
    })

    const searchPostcode = useMutation({
        mutationFn: (postcode) =>
          axios.get(`http://api.getthedata.com/postcode/${postcode}`),
          onSuccess: ({data}) => {
            locateNeighbourhood.mutate({lat: data.data.latitude, lng: data.data.longitude})
          },
      })

    const findPostcodeData = async (postcode) => {
        try{
            await searchPostcode.mutateAsync(postcode)
        } catch (error) {
        console.log('Error running mutations:', error)
        }

    }


    const value = {
        crimeData,
        findPostcodeData
    }

    return (
        <PostcodeContext.Provider value={value}>
            {children}
        </PostcodeContext.Provider>
    )
}

export default PostcodeProvider