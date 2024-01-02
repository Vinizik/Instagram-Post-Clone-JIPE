"use client";
import Image from "next/image";
import { Postagem } from "./components/Postagem";

export default function Home() {
  return (
    <>
      <img
        src="https://github.com/Vinizik/Instagram-Login-Clone/blob/main/assets/logo_instagram.png?raw=true"
        className="text-center w-40 h-14 m-auto mt-4 mb-4"
      />
      <div className="mx-auto flex flex-col justify-center max-w-md pb-12">
        <Postagem
          postUserName="Vinícius Martins"
          postUserImgURL="https://avatars.githubusercontent.com/u/88601887?s=400&u=4abda9182c75b99a3aa073c47f980e864ed36f4b&v=4"
          postUserLocation="Recife"
          postImgURL="https://i.pinimg.com/originals/0d/b6/b0/0db6b0eaa306c16d245835fb5deb317d.jpg"
          postTitle="😀"
          postTags="#praia #boaviagem #recife"
          like={false}
        />
        <Postagem
          postUserName="George Vieira"
          postUserImgURL="https://avatars.githubusercontent.com/u/95360922?v=4"
          postUserLocation="Petrolina"
          postImgURL="https://i.pinimg.com/originals/69/70/3c/69703c141905f88dcea24eb5ff66df78.jpg"
          postTitle="Rumo a Petrolina"
          postTags="#petrolina #viagem #avião #2024"
          like={true}
        />
        <Postagem
          postUserName="Andre Cerqueira"
          postUserImgURL="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/380050935_1215159799361198_7012142229291910082_n.jpg?ccb=11-4&oh=01_AdTg-HlpDbSpFjclYxG20hT35Jyzl-lFZHJfVpv5C2FYXA&oe=659A4781&_nc_sid=e6ed6c&_nc_cat=100"
          postUserLocation="Belo Horizonte"
          postImgURL="https://i.pinimg.com/736x/6b/96/d1/6b96d1c0a37782ea55076eaf49c4ca6c.jpg"
          postTitle="Minha mais nova aquisição"
          postTags="#moto #sidoka #role"
          like={true}
        />
      </div>
    </>
  );
}
