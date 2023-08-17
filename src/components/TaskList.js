import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import UpdateTaskModal from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask, removeFromList } from "../slices/tasksSlicesForAll";

export const TaskList = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const UpdateTask = (task) => {
    console.log("Update");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };
  const DeleteTask = (task) => {
    console.log("Delete");
    dispatch(removeFromList(task));
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Task title</th>
            <th>Task description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr className="text-center" key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task?.title}</td>
                  <td>{task?.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => UpdateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" onClick={() => DeleteTask(task)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <UpdateTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
