import Loading from "@/components/main/Loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { Suspense } from "react";
import Image from "next/image";

type GridProps = {
  films: any;
};

const Grid = ({ films }: GridProps) => {
  const getRandomUnsplashImage = () => {
    const randomImage = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/random/300x200?sig=${randomImage}`;
  };

  return (
    <Suspense fallback={<Loading />}>
      {films && (
        <div className="grid w-full grid-cols-3 gap-6 my-6 cursor-pointer">
          {films.map((film: any, index: number) => {
            return (
              <Card key={index} className="hover:border hover:border-gray-100">
                <CardHeader className="bg-gray-800 overflow-hidden p-0">
                  <div className="h-64 w-full overflow-hidden relative">
                    <Image
                      src={getRandomUnsplashImage() ?? ""}
                      alt="Star Wars"
                      layout="fill"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex my-6 flex-col gap-y-2">
                  <p>Title: {film.node.title}</p>
                  <p>Director: {film.node.director}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-fit">View Details</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </Suspense>
  );
};

export default Grid;
