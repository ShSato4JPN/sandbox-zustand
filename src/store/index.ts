import { create } from "zustand";

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

interface CounterState2 {
  count2: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

// const useStore = create<CounterState>((set, get) => ({
//   count: 1,
//   increase: () => set({ count: get().count + 1 }),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }));

const useStore = create<CounterState>((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export const useStore2 = create<CounterState2>((set) => ({
  count2: 100,
  increase: (by) => set((state) => ({ count2: state.count2 + by })),
  decrease: (by) => set((state) => ({ count2: state.count2 - by })),
  reset: () => set({ count2: 0 }),
}));

export default useStore;
