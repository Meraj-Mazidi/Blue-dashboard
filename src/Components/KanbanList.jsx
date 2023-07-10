import React, { useState } from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
        {
          id: 4,
          title: "Card title 4",
          description: "Card content",
        },
        {
          id: 5,
          title: "Card title 5",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 6,
          title: "Card title 6",
          description: "Card content",
        },
        {
          id: 7,
          title: "Card title 7",
          description: "Card content",
        },
        {
          id: 8,
          title: "Card title 8",
          description: "Card content",
        },
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 14,
          title: "Card title 14",
          description: "Card content",
        },
        {
          id: 15,
          title: "Card title 15",
          description: "Card content",
        },
        {
          id: 16,
          title: "Card title 16",
          description: "Card content",
        },
        {
          id: 17,
          title: "Card title 17",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 18,
          title: "Card title 18",
          description: "Card content",
        },
        {
          id: 19,
          title: "Card title 19",
          description: "Card content",
        },
        {
          id: 20,
          title: "Card title 20",
          description: "Card content",
        },
      ],
    },
    {
      id: 5,
      title: "Production",
      cards: [
        {
          id: 21,
          title: "Card title 21",
          description: "Card content",
        },
        {
          id: 22,
          title: "Card title 22",
          description: "Card content",
        },
        {
          id: 23,
          title: "Card title 23",
          description: "Card content",
        },
        {
          id: 24,
          title: "Card title 24",
          description: "Card content",
        },
        {
          id: 25,
          title: "Card title 25",
          description: "Card content",
        },
        {
          id: 26,
          title: "Card title 26",
          description: "Card content",
        },
      ],
    },
    {
      id: 6,
      title: "Production",
      cards: [
        {
          id: 27,
          title: "Card title 27",
          description: "Card content",
        },
        {
          id: 28,
          title: "Card title 28",
          description: "Card content",
        },
        {
          id: 29,
          title: "Card title 29",
          description: "Card content",
        },
        {
          id: 30,
          title: "Card title 30",
          description: "Card content",
        },
        {
          id: 31,
          title: "Card title 31",
          description: "Card content",
        },
      ],
    },
  ],
};

const KanbanList = () => {
  const [controlledBoard, setBoard] = useState(boardData);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }
  return (
    <div className=" overflow-x-scroll w-full h-fit">
      <Board
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        initialBoard={controlledBoard}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        onCardNew={console.log}
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
      />
    </div>
  );
};

export default KanbanList;
