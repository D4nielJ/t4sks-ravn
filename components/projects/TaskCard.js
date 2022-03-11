import Image from 'next/image';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {
  MdOutlineSearch,
  MdOutlineAttachFile,
  MdOutlineComment,
} from 'react-icons/md';
import { RiGitMergeLine } from 'react-icons/ri';
import { Heading, Tag, Text } from '../shared';

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
