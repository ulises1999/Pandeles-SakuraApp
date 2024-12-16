import React from 'react'
import {ClipLoader} from "react-spinners";

const Loader = () => {
  return (
    <div style={{
      width:'100%',
      height:'90vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  }}>
      <ClipLoader />
    </div>
  )
}

export default Loader
