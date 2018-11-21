import * as React from "react";
import { Stack } from "framer";
import { Room_Element_Unchecked } from "./canvas";

interface Props {
  width: number,
  height: number,
}

export class Room_List extends React.Component<Props> {
  static defaultProps = {
    width: 375,
    height: 60,
  }
    render() {
        const {width, height} = this.props;
        
        const roomName = [            
          "Küche", 
          "Korridor / Essdiele", 
          "Wohnzimmer", 
          "Sitzplatz", 
          "Balkon", 
          "Gäste WC",
          "Halle"
        ]

        const frameHeight = roomName.length * Room_Element_Unchecked.height;

        
        return (
            <Stack width={width} height={frameHeight}>
              {roomName.map(name => (
                <Room_Element_Unchecked Name={name} />
              ))}
            </Stack>
          );
        }
      }
