import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FcLike } from "react-icons/fc";

interface PostProps {
  postUserName: string;
  postUserImgURL: string;
  postUserLocation: string;
  postTitle: string;
  postImgURL: string;
  postTags?: string;
  like: boolean;
}

export function Postagem({
  postUserName,
  postUserImgURL,
  postUserLocation,
  postTitle,
  postImgURL,
  postTags,
  like,
}: PostProps) {
  const [liked, setLiked] = useState(like);
  const userName = "Vinícius Martins";
  const userImgURL =
    "https://avatars.githubusercontent.com/u/88601887?s=400&u=4abda9182c75b99a3aa073c47f980e864ed36f4b&v=4";
  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl border border-slate-200 mb-10">
      <div className="flex flex-row justify-between items-center mt-2 mx-4">
        <div className="flex flex-row items-center gap-4">
          <img
            src={postUserImgURL}
            className="h-8 w-8 rounded-full object-cover"
          ></img>
          <div className="block">
            <p>{postUserName}</p>
            <p className="text-sm text-gray-500">{postUserLocation}</p>
          </div>
        </div>
        <FiMoreHorizontal className="w-6 h-6 hover:cursor-pointer" />
      </div>
      <div>
        <img src={postImgURL} className="rounded-[4px]" />
      </div>
      <div className="my-2 mx-4 flex flex-row justify-between">
        <div className="flex flex-row gap-4 items-center">
          {liked ? (
            <FcLike
              className="w-8 h-8 hover:cursor-pointer mb-1"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="w-8 h-8 hover:cursor-pointer hover:text-gray-400"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          )}
          <FaRegComment className="w-7 h-7 hover:cursor-pointer hover:text-gray-400" />
          <FiSend className="w-7 h-7 hover:cursor-pointer hover:text-gray-400" />
        </div>
        <BsBookmark className="w-7 h-7 hover:cursor-pointer hover:text-gray-400" />
      </div>
      <div className="mb-4 mx-4">
        <div className="flex flex-row gap-4 items-center mb-2">
          {liked ? (
            <>
              <img src={userImgURL} className="w-5 h-5 rounded-full" />
              <p>
                Liked by <strong>{userName}</strong>
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <p>
          <strong>{postUserName}</strong> {postTitle}
        </p>
        <span className="text-blue-400 text-sm">{postTags}</span>
      </div>
    </div>
  );
}
