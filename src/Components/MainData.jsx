import { Alert, AlertTitle, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Btn from "./Button";
import TextFieldBOX from "./TextFieldBox";

const MainData = () => {
  
  let [value1, setValue] = useState(JSON.parse(localStorage.getItem("savings")));
  let [value2, setValue2] = useState(0);
  let [withDraw, setWithDraw] = useState(0);
  let StartMonet=JSON.stringify(localStorage.setItem("savings",value1));

  let changeTask = ({ target: { value } }) => {
    if (value === "") {
    } else {
      let converted = parseInt(value);

      setValue2(converted);
    }
  };
  let assigndata = () => {
    setValue(value1 + value2);
  };

  let changeTask2 = ({ target: { value } }) => {
    if (value === "") {
    } else {
      let converted2 = parseInt(value);

      setWithDraw(converted2);
    }
  };
  let assigndata2 = () => {
    
    if(withDraw>value1){
      alert("Insufficent Fund")
      
    
      
    }
    else{
      alert(`do you want to WithDraw the money from ${withDraw}`);
      setValue(value1 - withDraw);
      setTimeout(() => {
        alert(`Sucssfully  WithDraw the money of ${withDraw}`);
      }, 1000);
    }
    
  };
  // useEffect(()=>{  localStorage.setItem("balence",value)},[])
  return (
    <Stack>
      <Stack sx={{display:"flex" ,justifyContent: 'center',flexDirection: 'row'}}>
      <Typography
        component="h1"
        sx={{ width: 1 / 4, border: 1, borderColor: "primary.main",m:"20px",p:"10px",textDecoration: 'underline',fontSize:"30px",color:"#ffab40",borderColor:"#ffab40",borderRadius: '16px' }}
      >
        $:{value1}
      </Typography>
     
      </Stack>
     
      <Stack
        sx={{
          display: "flex",
          border: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ m: "20px", width: "300px" }}>
          <TextFieldBOX
            id={"outlined-number"}
            label={"Amount"}
            type={"number"}
            placeholder={"Enter Amount"}
            fun={changeTask}
          />
          <Btn
            variant="contained"
            size="small"
            title={"Add"}
            fun={assigndata}
          />
        </Stack>

        {/* ////////////////////////// */}
        <Stack sx={{ m: "20px", width: "300px" }}>
          <TextFieldBOX
            id={"outlined-number"}
            label={"Drawn Amount"}
            type={"number"}
            placeholder={"Enter Amount"}
            fun={changeTask2}
          />
          
          <Btn
            variant="contained"
            size="small"
            title={"withDraw"}
            fun={assigndata2}
          />
        </Stack>
      </Stack>
     
    </Stack>
  );
};

export default MainData;
