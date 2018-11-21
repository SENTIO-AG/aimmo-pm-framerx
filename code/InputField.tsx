import * as React from "react";
import { Property_Room_Not_Checked } from "./canvas";
import TextField from '@material-ui/core/TextField';


export class InputField extends React.Component {
    render() {
        const { classes } = this.props;      

        
        return (
            <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
            variant="filled"
          />

      </form>
          );
        }
      }