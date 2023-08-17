import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  const result = await PostService.createPost(req.body);
  console.log(result);

  try {
    res.send({
      success: true,
      message: "User Created Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

//

export const PostController = {
  createPostController,
};
