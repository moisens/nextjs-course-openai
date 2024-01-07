"use client";

import { editTask } from "../utils/actions";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm">Edit</button>
    </form>
  );
};

export default EditForm;
