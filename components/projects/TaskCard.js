import Image from 'next/image';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {
  MdOutlineTimer,
  MdOutlineAttachFile,
  MdOutlineComment,
} from 'react-icons/md';
import { RiGitMergeLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Heading, Tag, Text } from '../shared';

const TaskCard = ({ task }) => {
  const { name, tags, dueDate, pointEstimate: estimatedTime } = task;

  return (
    <li className="flex flex-col gap-4 rounded-xl bg-neutral-dark p-4">
      <div className="relative aspect-[4/1] w-full">
        <Image
          src="/images/card-image.jpg"
          alt=""
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between">
        <Heading type="Heading">{name}</Heading>
        <span className="text-2xl text-neutral-light">
          <HiOutlineDotsHorizontal />
        </span>
      </div>

      {/* Times */}
      <div className="flex justify-between">
        <div className="flex items-center gap-1 rounded bg-neutral-default py-1 pl-1 pr-2">
          <div className="text-lg">
            <MdOutlineTimer />
          </div>
          <Text>{estimatedTime}</Text>
        </div>
        <div className="flex items-center gap-1 rounded bg-neutral-default py-1 pl-1 pr-2">
          <div className="text-xl">
            <AiOutlineClockCircle />
          </div>
          <Text>{dueDate}</Text>
        </div>
      </div>

      {/* Tags */}
      <ul className="flex gap-1">
        {tags && tags.map((t) => <Tag key={t} text={t} />)}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="relative h-8 w-8 text-xl text-neutral-light">
          <Image
            src="/images/profile-pic.jpg"
            layout="fill"
            alt=""
            className="rounded-full object-cover"
          />
        </span>
        <div className="flex gap-4">
          <div className="flex gap-1 text-xl text-textOn">
            <MdOutlineAttachFile />
          </div>
          <div className="flex gap-1 text-xl text-textOn">
            <Text>5</Text>
            <RiGitMergeLine />
          </div>
          <div className="flex gap-1 text-xl text-textOn">
            <Text>3</Text>
            <MdOutlineComment />
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskCard;
