import * as actionTypes from "../actionTypes"
import axios from "axios"

export const AddHobbyToStore = (hobby) => {
    return {
        type: actionTypes.ADD_HOBBY_TO_STORE,
        payload: {hobby}
    }
}

export const FetchUserHobbies = (hobbies) => {
    return {
        type: actionTypes.FETCH_USER_HOBBIES,
        payload: {hobbies}
    }
}

export const SaveHobbyToDB = (newHobby)=> {
    console.log("Axios call");
    return(dispatch)=> {
        
        axios.post("http://localhost:9000/hobby/api/addHobby", {hobbyName:newHobby})
                .then((collection) => {
                    let modifiedHobby = collection.data
                    console.log(modifiedHobby)
                    dispatch(AddHobbyToStore(modifiedHobby))
                }).catch((err)=> {
                    console.log("Error while adding/updating hobby  ", err)
                })
    }
}

export const GetHobbiesFromDB = ()=> {
    console.log("Axios call");
    return(dispatch)=> {
        
        axios.get("http://localhost:9000/hobby/api/getHobbies")
                .then(collection=>collection.data)
                .then(json=> {
                    console.log(json)
                    dispatch(FetchUserHobbies(json))

                })
               .catch((err)=> {
                    console.log("Error while retrieving hobbies  ", err)});
                
    }
}

export const SaveHobbyToDBUsingFetch = (newHobby) => {
    return(dispatch)=> {
        window.fetch("http://localhost:9000/hobby/api/add", 
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(newHobby)
                    }
        ).then((response)=> response.json)
        .then((hobbyData)=> {
            console.log(hobbyData)
            dispatch(AddHobbyToStore(hobbyData))
        }).catch((err)=>{
            console.log("Error while adding/updating hobby to DB using fetch ", err)
        })
    }
}