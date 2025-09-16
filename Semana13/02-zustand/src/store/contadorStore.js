import { create } from "zustand";

const useContadorStore = create((set) => ({
  numero:0,
  texto:"Oso",
  //actions
  incrementar: (state) => ({ numero: state.numero + 1}),
  reducir: (state) => ({ numero: state.numero - 1}),
}))

export default useContadorStore;
