import Image from 'next/image';
import React from 'react';
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
            className="absolute inset-0 rounded-lg object-cover"
          />
        </div>
      )}
      <Heading type="Heading">{name}</Heading>
    </li>
  );
};

export default TaskCard;
