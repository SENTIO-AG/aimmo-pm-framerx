import { Data, Override } from "framer"

const data = Data({ 
    background: "#CCCCCC", 
    roomName: "Test";
})

export const RoomHeader: Override = () => {
    return {
      roomName: data.roomName,
    };
  };

export const OnClickRoomNameChance: Override = () => {
    return {
        onTap() {   
            data.roomName = this.props.Room;     
        },
    }
};

export const ConfirmRoomOK: Override = () => {
    return { 
        background: data.background
        }
};

export const OnClicConfirmRoomOK: Override = () => {
    return {
        onTap() {   
            data.background = "green";     
        },
    }
};

export const ConfirmRoomElementDone: Override = () => {
    return { 
        background: data.background
        }
};

export const OnClicConfirmRoomElementDone: Override = () => {
    return {
        onTap() {   
            data.background = "yellow";     
        },
    }
};