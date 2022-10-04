import React from "react";
import { useState, useEffect } from "react";
import { Day } from "./day";


export function Days ({item}) {

return (
    <> 
    {
        item.map((day) => (
        <Day key={day.dt} {...day} />
       ))
    }
    </>
)}
