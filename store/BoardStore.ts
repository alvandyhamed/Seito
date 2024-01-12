import { getTodosGroupByColum } from "@/lib/getTodosGroupByColum";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBoardStor = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupByColum();

    set({ board });
  },
}));
