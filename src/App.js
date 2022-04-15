import './App.css';
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from 'react-redux';
import { incNum, dicNum} from "./redux/actions/index"

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className="App">
      <h1>welcome to redux</h1>

      <div className='quantity'>
      <Box>
      <div>
        
        
          <Button
            aria-label="reduce"
            onClick={() => dispatch(dicNum())
              
            }
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => dispatch(incNum()) }
              
            
          >
            <AddIcon fontSize="small" />
          </Button>
        
      </div>
    </Box>
        <input name="quantity" type="text" className="quantity_input" value={myState}></input>
        
      </div>
    </div>
    </>
  );
}

export default App;
