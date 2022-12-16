import React from "react";
import { Input } from '@chakra-ui/react'

export default function Search(props){
    return(
        <div>
        <div className="app-banner">
        <label>Search:
        <Input size = "lg"
          type="text" 
         
          onChange=""
          name = "name"
        />
      </label>
          </div>
        
      </div>
    )
}