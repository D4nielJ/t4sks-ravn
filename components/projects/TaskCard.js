import Image from 'next/image';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Heading } from '../shared';

const TaskCard = ({ task }) => {
  const { name, tags, dueDate, estimatedTime, userAvatar, image } = task;
  return (
    <li className="flex flex-col gap-4 rounded-xl bg-neutral-dark p-4">
      {image && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt=""
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between">
        <Heading type="Heading">{name}</Heading>
        <span className="text-2xl text-neutral-light">
          <HiOutlineDotsHorizontal />
        </span>
      </div>

      {/* Times */}
      <div className="flex justify-between">
        <div>{estimatedTime}</div>
        <div>{dueDate}</div>
      </div>

      {/* Tags */}

      {/* Footer */}
    </li>
  );
};

export default TaskCard;
