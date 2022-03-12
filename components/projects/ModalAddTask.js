import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Modal from 'react-modal';
import capitalize from '../../lib/capitalize';
import { addTask } from '../../lib/apiClient';
import { Heading, Text } from '../shared';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

const tagsValues = ['ANDROID', 'IOS', 'NODE_JS', 'REACT', 'RAILS'];

const findTags = (stateArray) => {
  const tags = tagsValues.filter((_tag, i) => stateArray[i]);
  return tags;
};

const formatDateToIso = (dateStr) => new Date(dateStr).toISOString();

const getMaxValueForDateInput = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  return new Date(year + 5, month, day).toISOString().slice(0, 10);
};

const ModalAddTask = ({ modalIsOpen, setIsOpen }) => {
  const queryClient = useQueryClient();

  

  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [checkboxes, setCheckboxes] = useState(
    new Array(tagsValues.length).fill(false),
  );

  const handleCheckboxChange = (position) => {
    const updatedState = checkboxes.map((check, i) =>
      i === position ? !check : check,
    );

    setCheckboxes(updatedState);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  const mutation = useMutation(addTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('tasks');
      closeModal();
    },
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    formData.tags = findTags(checkboxes);
    formData.dueDate = formatDateToIso(formData.dueDate);

    const { dueDate, name, pointEstimate, status, tags } = formData;

    mutation.mutate({
      assigneeId: 'd923f8f3-49d8-4edb-9738-929eea1dccec',
      dueDate,
      name,
      pointEstimate,
      status,
      tags,
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add Task modal"
      className="absolute flex flex-col items-center gap-6 rounded-2xl bg-neutral-default p-8"
      overlayClassName="fixed inset-0 bg-neutral-dark/50 flex flex-col items-center pt-8">
      <Heading type="Heading" className="text-textOn">
        Add a New Task
      </Heading>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmission}>
        <div className="flex flex-col">
          <label htmlFor="name">
            <Text className="text-textOn">Name:</Text>
          </label>
          <input name="name" id="name" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate">
            <Text className="text-textOn">Due date:</Text>
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            min={new Date().toISOString().slice(0, 10)}
            max={getMaxValueForDateInput()}
            onChange={(e) => {
              setDueDate(new Date(e.target.value).toISOString().slice(0, 10));
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pointEstimate">
            <Text className="text-textOn">Point estimate:</Text>
          </label>
          <select name="pointEstimate" id="pointEstimate">
            <option value="ZERO">0</option>
            <option value="ONE">1</option>
            <option value="TWO">2</option>
            <option value="FOUR">4</option>
            <option value="EIGHT">8</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="status">
            <Text className="text-textOn">Status:</Text>
          </label>
          <select name="status" id="status">
            <option value="TODO">Working</option>
            <option value="IN_PROGRESS">In progress</option>
            <option value="DONE">Done</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="BACKLOG">Backlog</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {tagsValues.map((tag, i) => (
            <label key={tag} className="flex items-center gap-2">
              <input
                type="checkbox"
                id="cbox-android"
                value={tag}
                onChange={() => {
                  handleCheckboxChange(i);
                }}
              />
              <Text className="text-textOn">{capitalize(tag)}</Text>
            </label>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="rounded bg-neutral-lighter py-2 px-8"
            type="submit">
            Add task
          </button>
          <button
            className="rounded bg-icon-critical py-2 px-8 text-textOn"
            onClick={closeModal}
            type="button">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddTask;
