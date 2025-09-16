import { create } from "zustand";

//set es una función que nos permite "actualizar" el estado y modificar lo que indiquemos en el set
const useContadorStore = create((set) => ({
  numero: 0,
  texto: "Oso",
  //actions
  incrementar: () => {
    set((state) => ({ numero: state.numero + 1 }));
  },
  reducir: () => {
    set((state) => ({ numero: state.numero - 1 }));
  },
  cambiarTexto: () => {
    set({ texto: "Pingüino"})
  },
  concatenarTexto: () => {
    set((state) => ({ texto: state.texto + " Tortuga"}))
  }
}));

export default useContadorStore;
