import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};
const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progrecces",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  console.log("HAmed", id);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId="board" type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-gray-200" : " bg-white/50"
                }`}
              >
                <h2 className=" flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {todos.length}
                  </span>
                </h2>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
