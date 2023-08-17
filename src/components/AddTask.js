import Reac, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../slices/tasksSlicesForAll";
import { useDispatch } from "react-redux";

const AddTask = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const AddTask = (e) => {
    e.preventDefault();
    dispatch(addTaskToList({title, description}))
    setTitle('');
    setDescription('');
    console.log({ title, description });
  };
  return (
    <section className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div className="text-end">
          <Button variant="primary" type="submit" onClick={(e) => AddTask(e)}>
            AddTask
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default AddTask;
