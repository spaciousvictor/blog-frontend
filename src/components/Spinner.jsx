import { React, CSSProperties } from 'react'
import { ClipLoader } from "react-spinners";



const overide = {
    display: "purple",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner =({loading}) => {
    return (
        <ClipLoader
            
            loading={loading}
            cssOverride={overide}
            size={150}
            aria-label='Loading Spinner'
            data-testid='loader'
        />
    )
}

export default Spinner