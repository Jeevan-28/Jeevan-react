//  export const incNumber = ()=> { type: "INCREMENT"};

export const incNumber = () => {
  return {
    type: "INCREMENT"
  }
};

export const decNumber = () => {
  return {
    type: "DECREMENT"
  }
};
export const reset = () => {
  return {
    type: "RESET"
  }
};


{users?.map((row, index)=>(<p key={index}>{row.id}""{row.name}</p>) )}