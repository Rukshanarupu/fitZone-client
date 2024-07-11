import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TEquipment={
  id:string,
  title:string,
  description:string,
  isCompleted?:boolean
}

type TInitialState={
  equipments: TEquipment[]
}
// Define the initial state using that type
const initialState: TInitialState = {
  equipments:[]
}

const fitSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    addEquipment:(state, action: PayloadAction<TEquipment>)=>{
      state.equipments.push({...action.payload, isCompleted:false})
    },
    removeEquipment:(state, action:PayloadAction<string>)=>{
      state.equipments=state.equipments.filter(item=>item.id !== action.payload)
    },
  },
})

export const {addEquipment, removeEquipment}=fitSlice.actions

export default fitSlice.reducer 