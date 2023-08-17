import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      success: true,
      message: "Post Created Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
    res.send({
      success: true,
      message: "All Post Retrieved Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post Retrieved Successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

//

export const PostController = {
  createPostController,
  getAllPosts,
  getSinglePost,
};
